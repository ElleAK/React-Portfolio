import React from 'react';

//A single Footer component that appears on multiple pages


function Footer() {
    return (
      <footer className="flex-row foot">
        <div className="flex-row">
          <div className="flex-row px-1">
            <a className="github" href="https://github.com/ElleAK"></a>
          </div>
          <div className="flex-row px-1">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/lindsey-kelly-ab47b47b/"
            ></a>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;