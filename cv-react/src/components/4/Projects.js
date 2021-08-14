import React from 'react'
import './Projects.css'
export default function Projects() {
    let xps = [
        {'id':  1,'href':'https://peertree.app/','name':'Master Thesis: Automatic Knowledge Mapping'},
        {'id':  2,'href':'https://define.app/','name':'Define.app: A personal dictionary for students​'},
        {'id':  3,'href':'http://droemmehavet.dk/','name':'Drømmehavet: A bedtime story platform'}
    ]
    return (
        <div id="prj-container" >
            <div id="prj-box">
                <h3>Things I've got going on</h3>
                <ul>
                {xps.map(exp => 
                    <li key = {exp.id}> 
                        <a href={exp.href} target="_blank">{exp.name}</a>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}
