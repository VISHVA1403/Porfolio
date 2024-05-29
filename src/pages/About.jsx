import React from "react";
import style from '../static/about.module.css'
function About(){
    return <div id="about" className={style.about}>
        <div className={style.heading}>About Me</div>
        <div className={style.container}><p>
        Hello…! It is me, Vishva T.
        </p><p>
Currently, I am a student studying towards a Bachelor’s degree in Electronics and Communication Engineering at Karpagam Institute of Technology. I have had technical development experience with projects involving coding, especially full-stack development and machine learning.
</p><p>
In my undergraduate engineering years, I have been exposed to different programming languages like Python, Javascript, React js ,React Native etc., libraries and frameworks such as scikit-learn ,pandas ,matplotlib.
</p><p>
At the moment I am looking for an internship or junior software developer role where my coding and process improvement skills can be put into use to create quality software systems. I have excellent front-end programming skills and can develop both web-based and desktop applications; also I can test them in agile environments to ensure maximum efficiency. In addition to this, my knowledge base includes familiarity with various tools used during the development lifecycle of software such as databases or web technology. My expertise lies in testing software systems for quality assurance purposes as well as contributing to corporate governance initiatives through software architecture creation. Additionally, I seek opportunities where my technical abilities can be applied within real-life situations that make a difference.
        </p>
        </div>
    </div>;
}

export default About;