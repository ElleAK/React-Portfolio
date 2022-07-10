import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg';


// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default


function About () {
    return (
        <section>
            <h1>About Me</h1>
            <img src={coverImage} style={{ width: "50%" }} alt="cover" />
        
        <div>
            <p> This is a paragraph about myself</p>
        </div>
        </section>
    )
}

export default About;