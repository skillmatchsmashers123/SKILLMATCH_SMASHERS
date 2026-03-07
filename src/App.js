// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// // import Pitches from "./pages/Pitches";
// // import Messages from "./pages/Messages";
// // import Navbar from "./components/Navbar";
// // import Welcome from "./pages/Welcome";
// // import Login from "./pages/Login";
// // import BrowseStudents from "./pages/BrowseStudents";
// // import Signup from "./pages/Signup";

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/pitches" element={<Pitches />} />
// //         <Route path="/messages" element={<Messages />} />
        
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/" element={<Welcome />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/browse-students" element={<BrowseStudents />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }








// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Welcome from "./pages/Welcome";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import BrowseProjects from "./pages/BrowseProjects";
// import BrowseStudents from "./pages/BrowseStudents";
// import Messages from "./pages/Messages";
// import Pitches from "./pages/Pitches";
// import Profile from "./pages/Profile";
// import Achievements from "./pages/Achievements";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Welcome />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/browse-projects" element={<BrowseProjects />} />
//         <Route path="/browse-students" element={<BrowseStudents />} />
//         <Route path="/messages" element={<Messages />} />
//         <Route path="/pitches" element={<Pitches />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/achievements" element={<Achievements />} />
//       </Routes>
//     </Router>
    
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import BrowseProjects from "./pages/BrowseProjects";
import BrowseStudents from "./pages/BrowseStudents";
import Messages from "./pages/Messages";
import Pitches from "./pages/Pitches";
import Profile from "./pages/Profile";
import Achievements from "./pages/Achievements";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>

      {/* 🔔 Toast container add here */}
      <ToastContainer position="bottom-right" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse-projects" element={<BrowseProjects />} />
        <Route path="/browse-students" element={<BrowseStudents />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/pitches" element={<Pitches />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>

    </Router>
  );
}

export default App;