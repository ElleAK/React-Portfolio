import React from 'react';

//A single Footer component that appears on multiple pages



function Footer() {

    return(
    <footer className='footer fixed-bottom'>
        <a href='https://www.linkedin.com/in/lindsey-kelly-ab47b47b/'><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
        <a href='https://github.com/ElleAK'><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
    </footer>

    )
}

export default Footer;