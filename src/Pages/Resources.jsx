import React, { useEffect, useState } from "react";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const token = localStorage.getItem("token");

  const fetchResources = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/getresource", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (data.success) setResources(data.resources);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !file) return alert("Provide title and file");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("File uploaded!");
        setTitle("");
        setFile(null);
        fetchResources();
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleDownload = async (filename) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/download/${filename}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error(error);
      alert("Download failed");
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Resources</h1>

      <form
        className="flex flex-col gap-3 max-w-md mx-auto bg-white p-5 rounded shadow"
        onSubmit={handleUpload}
      >
        <input
          type="text"
          placeholder="Resource Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded"
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Upload
        </button>
      </form>

      <div className="mt-6 max-w-xl mx-auto flex flex-col gap-4">
        {resources.map((res) => (
          <div
            key={res._id}
            className="flex justify-between items-center p-4 bg-white rounded shadow"
          >
            <span>{res.title}</span>

            <button
              onClick={() => handleDownload(res.filename)}
              className="text-blue-600 hover:underline"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;