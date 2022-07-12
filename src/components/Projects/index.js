import React from 'react';

// A single Project component that will be used multiple 
//times in the Portfolio section

//For each project you feature in your portfolio, you should include the following:
// •	An image of the deployed application (either a GIF or a screenshot)
// •	The title of the project
// •	A link to the deployed application
// •	A link to the corresponding GitHub repository


const ProjectList = () => {
  const projects = [
    {
      name: 'Note Taker App',
      webite: 'https://github.com/ElleAK/Note-Taker-App',
      GitHub: 'https://notetaker-departure.herokuapp.com'
    },
    {
      name: '',
      webite: '',
      GitHub: ''
    },
    {
      name: '',
      webite: '',
      GitHub: ''
    },
    {
      name: '',
      webite: '',
      GitHub: ''
    },
    {
      name: '',
      webite: '',
      GitHub: ''
    },
    {
      name: '',
      webite: '',
      GitHub: ''
    }

  ]
// //   const [projects] = useState([
// //     {
// //       name: 'Note Taker App',
// //       description:
// //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
// //     },
// //     {
// //       name: 'README Generator',
// //       description:
// //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
// //     },
// //     {
// //         name: 'Baroke Social Media',
// //         description:
// //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
// //       },
// //       {
// //         name: 'Budget Tracker',
// //         description:
// //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
// //       },
// //       {
// //         name: 'My Dream Passport',
// //         description:
// //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
// //       },
// //       {
// //         name: 'Work Day Scheduler',
// //         description:
// //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
// //       },
    
// // ]);
//   return (
//     <div>
//       <h2>Projects</h2>
//       <ul>
//         <li>
//           <h4>Note Taker App</h4>
//           {/* <h5 src='https://github.com/ElleAK/Note-Taker-App'>GitHub</h5>
//           <a src='https://notetaker-departure.herokuapp.com'/> */}
//         </li>
//         <li>
//           <h4>README Generator</h4>
//           {/* <a src=''/> */}
//         </li>
//         <li>
//           <h4>Social Media App</h4>
//           {/* <a src=''/> */}
//         </li>
//         <li>
//           <h4>Budget Tracker</h4>
//           {/* <a src=''/> */}
//         </li>
//         <li>
//           <h4>My Dream Passport</h4>
//           {/* <a src=''/> */}
//         </li>
//         <li>
//           <h4>Work Day Scheduler</h4>
//           {/* <a src=''/> */}
//         </li>
//       </ul>
//     </div>
//   )
};

export default ProjectList;