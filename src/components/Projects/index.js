import React, { useState } from 'react';

// A single Project component that will be used multiple 
//times in the Portfolio section

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s
//  applications with links to both the deployed applications 
//  and the corresponding GitHub repository

//For each project you feature in your portfolio, you should include the following:
// •	An image of the deployed application (either a GIF or a screenshot)
// •	The title of the project
// •	A link to the deployed application
// •	A link to the corresponding GitHub repository


const ProjectList = () => {
  
  const [projects] = useState([
    {
      name: 'Note Taker App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'README Generator',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
        name: 'Baroke Social Media',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Budget Tracker',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'My Dream Passport',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Work Day Scheduler',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
    
]);
  return (
    <div>

    </div>
  )
};

export default ProjectList;