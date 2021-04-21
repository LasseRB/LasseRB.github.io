import React from 'react'
import './Experience.css'
export default function Experience() {
    let xps = [
        {'id':  1,'href':'https://learnit.itu.dk/local/coursebase/view.php?s=ft&view=public&ciid=334','name':'IT University, Copenhagen​','what': ['T​eaching assistant','Introduction to Database systems']},
        {'id':  2,'href':'https://www.toonboom.com/products/harmony','name':'Toon Boom, Montreal​','what': ['H​armony software consultant','Paperless animation & pipeline consultation at Synergy animation in Shanghai, China']},
        {'id':  3,'href':'https://www.noerlum.com/project/big-hero-6','name':'Nørlum, Denmark','what': ['A​nimation Supervisor','Walt Disney\'s \'Big Hero 6 - tv series']}
    ]
    return (
        <div id="exp-container" >
            <div id="exp-box">
                <h3>HIGHLIGHTED EXPERIENCES</h3>
                <ul>
                {xps.map(exp => <li key = {exp.id}> <a href={exp.href} target="_blank">{exp.name}</a><br/>
                                    {exp.what[0]+ " - "}  {exp.what[1]} </li>)}
                </ul>
            </div>
        </div>
    )
}
