import React from 'react';

//A single Footer component that appears on multiple pages



function Footer() {

    return(
    <div>
        <footer>
            <ul>
                <li>
                    <h3>LinkedIn</h3>
                {/* <a href='https://www.linkedin.com/in/lindsey-kelly-ab47b47b/'/> */}
                </li>
                <li>
                    <h3>GitHub</h3>
                {/* <a href='https://github.com/ElleAK'/> */}
                </li>
            </ul>
        </footer>
    </div>
    )
}

export default Footer;