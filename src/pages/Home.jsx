import React from "react";
import style from '../static/Homepage.module.css'
import userimage from '../static/profile-pic.png'
// import download from '../static/downloading.png'
// import resume from '../static/'
// import About from "./About";
function Home(){
        const downloadResume = () => {
            try {
              // Replace 'YOUR_GOOGLE_DRIVE_LINK_HERE' with the shareable link to your PDF file
              const url = 'https://drive.google.com/file/d/1mGZWyst0WiKdD_TyTrq4lz62UCu1UpWv/view?usp=drive_link&export=download';
              const a = document.createElement('a');
              a.href = url;
              a.target = '_blank'; // Open in a new tab
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            } catch (error) {
              console.error('Error downloading the resume:', error);
            }
      };
    
    return(
        <div className={style.container} id="home">
            <div className={style.detail}>
                <div className={style.name}>
                    VISHVA T
                    <div className={style.passion}>
                    Student seeking to master full-stack development
                    </div>
                    <button onClick={(e)=>{downloadResume()}}>Resume</button>
                </div>
                <div className={style.profile}>
                    <img src={userimage} alt="mypicture" className={style.profilepicture}/>
                </div>
            </div>
            <div className="Title">
            <div className={style.educationtitle}>
                        Education
                    </div>
            <div className={style.profession}>
                <div className={style.education}>
                    
                    <div className={style.degree}>
                        <p>B.E Electronics and Communication Engineering</p>
                    </div>
                    <div className={style.college}>
                        Karpagam Institute of Technology, Coimbatore
                    </div>
                    <div className={style.year}>
                        2021 - Present
                    </div>
                </div>
                <div className={style.education2}>
                    <div className={style.degree}>
                        <p>Higher Secondary Education</p>
                    </div>
                    <div className={style.college}>
                        Hindu Higher Secondary School
                    </div>
                    <div className={style.year}>
                        2019-2021
                    </div>
                </div>
                </div>
            </div>
            {/* <hr></hr> */}
        </div>
    )
}

export default Home;