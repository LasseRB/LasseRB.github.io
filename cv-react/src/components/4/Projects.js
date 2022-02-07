import React from 'react'
import './Projects.css'
export default function Projects() {
    let xps = [
        {'id':  1,'href':'http://droemmehavet.dk/','name':'Drømmehavet: A bedtime story platform'},
        {'id':  2,'href':'https://peertree.app/','name':'Master Thesis: Automatic Knowledge Mapping'},
        {'id':  3,'href':'https://virk.dk/myndigheder/stat/ERST/selvbetjening/Regnskab_20/','name':'Virk.dk: Regnskab Indberet'}
        // {'id':  2,'href':'https://define.app/','name':'Define.app: A personal dictionary for students​'},
   
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
