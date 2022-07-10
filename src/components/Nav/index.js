import React from "react";

// A single Navigation component within the header that will be used to 
// conditionally render the different sections of your portfolio

// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation
//  without the page reloading and that title is highlighted


function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;


  return (
    <main>
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label=""> </span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="my-2 mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About      
            </a>
          </li>
          <li className="my-2 mx-2">
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
              Portfolio      
            </a>
          </li>
          <li className="my-2 mx-2">
            <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
              Resume      
            </a>
          </li>
          <li className={`my-2 mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
   
    <footer>

    </footer>
     </main>
  );
}

export default Nav;