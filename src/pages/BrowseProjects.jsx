// import { useState } from "react";

// const BrowseProjects = () => {
//   const currentUserId = 1; // simulate logged in user

//   const [activeTab, setActiveTab] = useState("all");
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     tech: "",
//     membersNeeded: "",
//   });

//   const [projects, setProjects] = useState([
//     {
//       id: 1,
//       name: "AI Chatbot",
//       description: "A conversational AI built with React and Node.js.",
//       tech: ["React", "Node.js", "AI"],
//       members: [1, 3, 4],
//       membersNeeded: 5,
//       status: "Open",
//       skillMatch: true,
//       owner: 1,
//     },
//     {
//       id: 2,
//       name: "Portfolio Website",
//       description: "Personal portfolio showcasing skills and projects.",
//       tech: ["HTML", "CSS", "Tailwind"],
//       members: [2],
//       membersNeeded: 3,
//       status: "Open",
//       skillMatch: false,
//       owner: 2,
//     },
//   ]);

//   // Join project -> also move to My Projects tab
//   const handleJoin = (projectId) => {
//     setProjects((prev) =>
//       prev.map((p) =>
//         p.id === projectId && !p.members.includes(currentUserId)
//           ? { ...p, members: [...p.members, currentUserId] }
//           : p
//       )
//     );

//     // switch to My Projects after joining
//     setActiveTab("my");
//   };

//   // Create project (always Open)
//   const handleCreate = () => {
//     if (!form.name || !form.description) return;

//     const newProject = {
//       id: Date.now(),
//       name: form.name,
//       description: form.description,
//       tech: form.tech.split(",").map((t) => t.trim()),
//       members: [currentUserId],
//       membersNeeded: Number(form.membersNeeded) || 1,
//       status: "Open",
//       skillMatch: false,
//       owner: currentUserId,
//     };

//     setProjects((prev) => [newProject, ...prev]);
//     setShowModal(false);
//     setActiveTab("my");
//     setForm({ name: "", description: "", tech: "", membersNeeded: "" });
//   };

//   // My Projects = owned OR joined
//   const filteredProjects = projects
//     .filter((p) =>
//       activeTab === "my"
//         ? p.owner === currentUserId || p.members.includes(currentUserId)
//         : true
//     )
//     .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-pink-100 flex justify-center items-start p-8">
//       <div className="w-full max-w-6xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-gray-200">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-4xl font-extrabold text-gray-800">🚀 Browse Projects</h2>
//           <button
//             onClick={() => setShowModal(true)}
//             className="relative top-1 px-5 py-2 bg-green-600 text-white rounded-xl font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition-transform"
//           >
//             + Create
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-6 mb-8 border-b pb-2">
//           <button
//             onClick={() => setActiveTab("all")}
//             className={`pb-1 font-semibold ${
//               activeTab === "all"
//                 ? "text-indigo-600 border-b-2 border-indigo-600"
//                 : "text-gray-600 hover:text-indigo-600"
//             }`}
//           >
//             All Projects
//           </button>
//           <button
//             onClick={() => setActiveTab("my")}
//             className={`pb-1 font-semibold ${
//               activeTab === "my"
//                 ? "text-indigo-600 border-b-2 border-indigo-600"
//                 : "text-gray-600 hover:text-indigo-600"
//             }`}
//           >
//             My Projects
//           </button>
//         </div>

//         {/* Search */}
//         <div className="flex gap-4 mb-10">
//           <input
//             type="text"
//             placeholder="Search projects..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="flex-1 border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
//           />
//         </div>

//         {/* Projects */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {filteredProjects.map((project) => {
//             const joined = project.members.includes(currentUserId);

//             return (
//               <div
//                 key={project.id}
//                 className="bg-white/80 rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-transform"
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
//                   <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
//                     Open
//                   </span>
//                 </div>

//                 <p className="text-gray-600 mb-4">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((t, i) => (
//                     <span key={i} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <p className="text-sm text-gray-500 mb-2">
//                   {project.members.length}/{project.membersNeeded} Members
//                 </p>

//                 {!joined && (
//                   <button
//                     onClick={() => handleJoin(project.id)}
//                     className="w-full py-2 rounded-xl font-semibold bg-indigo-600 text-white hover:bg-indigo-700"
//                   >
//                     Join
//                   </button>
//                 )}

//                 {joined && (
//                   <button className="w-full py-2 rounded-xl font-semibold bg-gray-400 text-white cursor-not-allowed">
//                     Joined
//                   </button>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* CREATE MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl">
//             <h2 className="text-2xl font-bold mb-6">Create Project</h2>

//             <input
//               placeholder="Project Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="w-full border p-2 rounded-lg mb-4"
//             />

//             <textarea
//               placeholder="Project Description"
//               value={form.description}
//               onChange={(e) => setForm({ ...form, description: e.target.value })}
//               className="w-full border p-2 rounded-lg mb-4"
//             />

//             <input
//               placeholder="Technologies (comma separated e.g React,Node,AI)"
//               value={form.tech}
//               onChange={(e) => setForm({ ...form, tech: e.target.value })}
//               className="w-full border p-2 rounded-lg mb-4"
//             />

//             <input
//               type="number"
//               placeholder="Members Needed"
//               value={form.membersNeeded}
//               onChange={(e) => setForm({ ...form, membersNeeded: e.target.value })}
//               className="w-full border p-2 rounded-lg mb-6"
//             />

//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 bg-gray-300 rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleCreate}
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg"
//               >
//                 Create
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BrowseProjects;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BrowseProjects = () => {
  const currentUserId = 1;

  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    tech: "",
    membersNeeded: "",
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "AI Chatbot",
      description: "A conversational AI built with React and Node.js.",
      tech: ["React", "Node.js", "AI"],
      members: [1, 3, 4],
      membersNeeded: 5,
      status: "Open",
      skillMatch: true,
      owner: 1,
    },
    {
      id: 2,
      name: "Portfolio Website",
      description: "Personal portfolio showcasing skills and projects.",
      tech: ["HTML", "CSS", "Tailwind"],
      members: [2],
      membersNeeded: 3,
      status: "Open",
      skillMatch: false,
      owner: 2,
    },
  ]);

  const handleJoin = (projectId) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId && !p.members.includes(currentUserId)
          ? { ...p, members: [...p.members, currentUserId] }
          : p
      )
    );

    setActiveTab("my");
  };

  const handleCreate = () => {
    if (!form.name || !form.description) {
      toast.error("Please fill all required fields");
      return;
    }

    const newProject = {
      id: Date.now(),
      name: form.name,
      description: form.description,
      tech: form.tech.split(",").map((t) => t.trim()),
      members: [currentUserId],
      membersNeeded: Number(form.membersNeeded) || 1,
      status: "Open",
      skillMatch: false,
      owner: currentUserId,
    };

    setProjects((prev) => [newProject, ...prev]);
    setShowModal(false);
    setActiveTab("my");
    setForm({ name: "", description: "", tech: "", membersNeeded: "" });

    // 🔔 Success Popup
    toast.success("Project created successfully 🚀", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const filteredProjects = projects
    .filter((p) =>
      activeTab === "my"
        ? p.owner === currentUserId || p.members.includes(currentUserId)
        : true
    )
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-pink-100 flex justify-center items-start p-8">
      <div className="w-full max-w-6xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-gray-200">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800">
            🚀 Browse Projects
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 bg-green-600 text-white rounded-xl font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition-transform"
          >
            + Create
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b pb-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-1 font-semibold ${
              activeTab === "all"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            All Projects
          </button>

          <button
            onClick={() => setActiveTab("my")}
            className={`pb-1 font-semibold ${
              activeTab === "my"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            My Projects
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-4 mb-10">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
          />
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const joined = project.members.includes(currentUserId);

            return (
              <div
                key={project.id}
                className="bg-white/80 rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-transform"
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  {project.members.length}/{project.membersNeeded} Members
                </p>

                {!joined ? (
                  <button
                    onClick={() => handleJoin(project.id)}
                    className="w-full py-2 rounded-xl font-semibold bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Join
                  </button>
                ) : (
                  <button className="w-full py-2 rounded-xl font-semibold bg-gray-400 text-white cursor-not-allowed">
                    Joined
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CREATE MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Create Project</h2>

            <input
              placeholder="Project Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border p-2 rounded-lg mb-4"
            />

            <textarea
              placeholder="Project Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full border p-2 rounded-lg mb-4"
            />

            <input
              placeholder="Technologies (React,Node,AI)"
              value={form.tech}
              onChange={(e) => setForm({ ...form, tech: e.target.value })}
              className="w-full border p-2 rounded-lg mb-4"
            />

            <input
              type="number"
              placeholder="Members Needed"
              value={form.membersNeeded}
              onChange={(e) =>
                setForm({ ...form, membersNeeded: e.target.value })
              }
              className="w-full border p-2 rounded-lg mb-6"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleCreate}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container */}
     
    </div>
  );
};

export default BrowseProjects;
      

    
      
  
      
     

             
            
