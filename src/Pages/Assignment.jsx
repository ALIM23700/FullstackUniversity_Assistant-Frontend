import React, { useEffect, useState } from "react";

const Assignment = () => {
  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const token = localStorage.getItem("token");
      console.log("Fetching assignments with token:", token);

      if (!token) {
        console.error("No token found, user might not be logged in");
        return;
      }

      try {
        const res = await fetch("https://fullstackuniversity-assistant-backend-1.onrender.com/api/getassignment", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          console.error("Failed to fetch assignments:", res.status, res.statusText);
          return;
        }

        const data = await res.json();
        console.log("Assignments fetched:", data.newgetassignment);

       
        setAssignment(data.newgetassignment || []);
      } catch (err) {
        console.error("Error fetching assignments:", err);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-700">
        Upcoming Assignments
      </h1>

      <div className="flex flex-col items-center gap-6 w-full">
        {assignment.length === 0 && (
          <p className="text-gray-500">No assignments available</p>
        )}

        {assignment.map((post) => (
          <div
            key={post._id}
            className="flex flex-col justify-center shadow-gray-700 shadow-md m-5 items-center border border-gray-700 h-auto w-full max-w-md sm:w-96 p-4 bg-white rounded"
          >
            <p className="mt-2 font-semibold">Subject: {post.SubjectName}</p>
            <p className="mt-2">Topic: {post.TopicName}</p>
            <p className="mt-2">Department: {post.Department}</p>
            <p className="mt-2">Batch: {post.Batch}</p>
            <p className="mt-2">Deadline: {post.Deadline}</p>
            <p className="mt-2">Time: {post.Time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignment;