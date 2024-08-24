import SideBar from "./components/SideBar";
// @ts-ignore
import headerImg from "./assets/no-projects.png";
import React from "react";
import { useState } from "react";
import ProjectDescription from "./components/ProjectDescription";
import CreateProject from "./components/CreateProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { render } from "react-dom";

function App() {
  console.log("in app");
  const [projects, setProjects] = useState({});
  const [activeProjectKey, setActiveProjectKey] = useState(undefined);

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

  const handleCancel = function () {
    setActiveProjectKey(undefined);
  };
  const renderMainDiv = function (activeKey) {
    switch (activeKey) {
      case undefined:
        return <NoProjectSelected handleCreateProject={handleChooseProject} />;
      case null:
        return (
          <CreateProject
            handleSaveProject={handleSaveProject}
            handleCancel={handleCancel}
          />
        );
      default:
        return (
          <ProjectDescription projectKey={activeKey} projects={projects} />
        );
    }
  };
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          projects={projects}
          handleSaveProject={handleSaveProject}
          handleChooseProject={handleChooseProject}
        />
        {renderMainDiv(activeProjectKey)}
      </main>
    </>
  );
}

export default App;
