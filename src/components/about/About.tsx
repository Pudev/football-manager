import * as React from 'react';
import img from 'src/about-page.jpg';

const About = () => {
    return (
        <div>
            <h5 style={{ marginTop: '20px', fontWeight: 'bold' }}>Welcome</h5>
            <p>This application is created for helping people easly organize their football team when playing minifootball games. Hope you enjoy it!</p>
            
            <img src={img}></img>

            <br/>
            <p>You can contact me in the following addresses:
                <a href="mailto:dpudev@gmail.com">dpudev@gmail.com</a>
            </p>
        </div>
    );
};

export default About;