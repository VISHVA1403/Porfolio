import React from 'react'
import Style from '../static/Skills.module.css'
import reactimg from '../static/react.png'
import nodejs from '../static/nodejs.png'
import expressjs from '../static/express.png'
import mongodb from '../static/mongodb.png'
import python from '../static/python.png'
import django from '../static/django.png'
import mysql from '../static/sql.png'
import Javascript from '../static/js.png'
import socoal from '../static/social.png'

function Skills(){
    const objects = [
        {name:'JavaScript', url:Javascript},
        {name:'React',url:reactimg},
        {name:'Node js',url:nodejs},
        {name:'Express js',url:expressjs},
        {name:'Mongo db',url:mongodb},
        {name:'Python',url:python},
        {name:'Django',url:django},
        {name:'MySQL',url:mysql},
        {name:'GitHub',url:socoal}
    ]
    const renderobject = objects.map((object) => {
        return (
            <div key={object.name} className={`${Style.skill} ${Style.parentDiv}`}>
                <img src={object.url} alt={object.name} className={Style.skillicon}/>
                <div className={Style.name}>{object.name}</div>
            </div>

        )
    })
    return (
    <div id='skills' className={Style.skills}>
        <div>
            <h1 className={Style.title}>Skills</h1>
        </div>
        <div className={Style.skillcontainer}>
            {renderobject}
        </div>
        {/* <hr></hr> */}
    </div>);
}


export default Skills