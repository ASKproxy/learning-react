import SideBar from "./components/SideBar";
// @ts-ignore
import headerImg from "./assets/no-projects.png";
import React from "react";
import { useState } from "react";
import ProjectDescription from "./components/ProjectDescription";
import CreateProject from "./components/Project";

function App() {
  const [projects, setProjects] = useState({});
  const [activeProjectKey, setActiveProjectKey] = useState("");

  const handleSaveProject = function (name, description, dueDate) {
    const newValue = {
      name: name,
      description: description,
      dueDate: dueDate,
      tasks: [],
    };
    setProjects((prevProjects) => ({ ...prevProjects, [name]: newValue }));
  };

  const handleChooseProject = (projectKey) => setActiveProjectKey(projectKey);

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          projects={projects}
          handleSaveProject={handleSaveProject}
          handleChooseProject={handleChooseProject}
        />
        <CreateProject />
      </main>
      {activeProjectKey !== "" && (
        <ProjectDescription projectKey={activeProjectKey} projects={projects} />
      )}
    </>
  );
}

export default App;
