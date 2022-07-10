import React, { useState } from 'react';


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
};

export default ProjectList;