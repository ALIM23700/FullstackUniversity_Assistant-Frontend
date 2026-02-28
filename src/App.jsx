import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Features from './Pages/Features';
import Assignment from './Pages/Assignment';
import Routine from './Pages/Routine';
import Cgpa from './Pages/Cgpa';
import Notice from './Pages/Notice';
import Resources from './Pages/Resources';
import ClassTest from './Pages/ClassTest';
import Register from './Pages/Register';
import Login from './Pages/Login';
import PrivateRoute from './Components/PrivateRoute';
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/features"
          element={
            <PrivateRoute>
              <Features />
            </PrivateRoute>
          }
        />
        <Route
          path="/assignment"
          element={
            <PrivateRoute>
              <Assignment />
            </PrivateRoute>
          }
        />
        <Route
          path="/routine"
          element={
            <PrivateRoute>
              <Routine />
            </PrivateRoute>
          }
        />
        <Route
          path="/cgpa"
          element={
            <PrivateRoute>
              <Cgpa />
            </PrivateRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <PrivateRoute>
              <Resources />
            </PrivateRoute>
          }
        />
        <Route
          path="/classTest"
          element={
            <PrivateRoute>
              <ClassTest />
            </PrivateRoute>
          }
        />
        <Route
          path="/notice"
          element={
            <PrivateRoute>
              <Notice />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;