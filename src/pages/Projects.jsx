import React from "react";
import style from '../static/Projects.module.css'
function Projects(){
    const projectlist = [
        {
            name:"Ecobin Harnessing IoT with ML for Waste Segregation and Recycling",
            description:[
                "Created a Waste Bin Management System with Django and React.js, incorporating IoT sensors for live waste sorting. Utilized Google Maps API for spatial visualization and Chart.js for waste composition analysis. Showcased expertise in full-stack development and IoT integration, promoting sustainable waste management practices."
            ],
            url:"https://github.com/VISHVA1403/WasteManagement-ML.git",

        },
        {
            name:' Alumni Mobile Application(on Development)',
            description:[
                `Currently building an interactive platform for graduates with Django and React.js.`,

                `Incorporated a real-time chat feature to encourage seamless communication and foster connections among alumni.`,
                `Developed a user-friendly interface enabling easy profile management and streamlined event invitation processes.`
            ],
            url:`https://github.com/VISHVA1403/alumni-server.git`
        },
        {
            name:'Public Health Awareness Campaign Data Analysis',
            description:[
                'Led a data analysis project on a public health campaign, focusing on preprocessing and visualization.',
                ' -> Utilized Pandas for campaign metrics and Excel for survey data.',
                ' -> Cleaned and merged data, employing feature engineering for insight.',
                ' -> Conducted exploratory analysis with Seaborn and Matplotlib.',
                ' -> Provided actionable insights for future initiatives.'
            ]
        }
    ]
    
    const renderproject = projectlist.map((project) =>{
        const renderdescription = project.description.map((line) =>{
            return (
                <li>{line}</li>
            );
        })
        return (
            <div>
                <div className={style.projectname}>
                    <a href={project.url}> {project.name}</a>
                    
                </div>
                <div className={style.describe}>
                    <ul>
                    {renderdescription}
                    </ul>
                </div>
            </div>
        )
    });
    return (<div id="project" className={style.project}>
        <div className={style.title}>
            Project
        </div>
        <div className={style.box}>
                {renderproject}
        </div>
    </div>);
}

export default Projects;