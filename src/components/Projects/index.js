// // A single Project component that will be used multiple 
// //times in the Portfolio section

// //For each project you feature in your portfolio, you should include the following:
// // •	An image of the deployed application (either a GIF or a screenshot)
// // •	The title of the project
// // •	A link to the deployed application
// // •	A link to the corresponding GitHub repository


import React from "react";

const ProjectList = () => {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div className="projects">
        <div className="card">
          <a className="projectGithub" href="https://github.com/ElleAK/Note-Taker-App">Note Taker App</a>
        </div>
        <div className="card">
          <a className="projectGithub" href="https://github.com/ElleAK/README-Generator">README Generator</a>
        </div>
        <div className="card">
        <a className="projectGithub" href="https://github.com/ElleAK/Baroke-Social-Media">Social Media App</a>
        </div>
        </div>
        <div className="projects">
        <div className="card">
        <a className="projectGithub" href="https://github.com/ElleAK/Budget-Tracker-PWA">Budget Tracker</a>
        </div>
        <div className="card">
          
        <a className="projectGithub" href="https://github.com/ElleAK/Budget-Tracker-PWA">My Dream Passport</a>
        </div>
        <div className="card">
          
        <a className="projectGithub" href="https://github.com/ElleAK/Third-Party-APIs-Challenge-Work-Day-Scheduler">Work Day Scheduler</a>
        </div>
        {/* <div className="card">
          On The Shelf
        <a className="projectGithub" href="https://github.com/ElleAK/"></a>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectList;