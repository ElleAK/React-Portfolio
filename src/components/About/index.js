import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg';

function About () {
    return (
        <section>
            <h1>About Me</h1>
            <img src={coverImage} style={{ width: "100%" }} alt="cover" />
        
        <div>
            <p> This is a paragraph about myself</p>
        </div>
        </section>
    )
}

export default About;