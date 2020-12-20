import React from 'react'

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <img src="./profile.jpg" alt="Chris White" className="about_img"></img>
            <p>Current student at Coder Academy in Brisbane.</p>
            <p>Chris has previous experience in Electronics Engineering where he had learned 
            software skills with Embedded programming using C++ language. He decided to move 
            onto web development as he had done some research into React Native, which seemed 
            complicated at the time, and then discovered over topics such as JS and Rails.</p>
            <p>Chris’s strengths are his passion for React and JS. Outside of work, he likes 
            to play video/board games and travel</p>
            <p>My CV: <a href="./img/CV_V3.pdf">Link</a></p>
        </div>
    )
}

export default About