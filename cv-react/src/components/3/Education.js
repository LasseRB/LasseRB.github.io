import React,{useState} from 'react'
import './Education.css'
import video_mp4 from './web.mp4'
import video_webm from './web.webm'
import video_ogg from './web.ogg'

export default function Education() {

    let edu = [
        {'id':  1,'href':'https://en.itu.dk/','name':'IT University, Copenhagen​','when': '2019/2021','what':'M​aster of Science'},
        {'id':  2,'href':'https://animationworkshop.via.dk/en/','name':'The Animation Workshop, ​Denmark','when': '2012/2016','what':'B​achelor of Arts'}
    ]
    return (
        <div id="block-container">
            <div id="video-container">
                <video width="450" height="450" autoPlay muted loop>
                    {/* <source src="web.mov" type="video/mov"/> */}
                    <source src={video_mp4} type="video/mp4"/>
                    <source src= {video_webm}type="video/webm"/>
                    <source src= {video_ogg} type="video/ogg"/>
                    Your browser does not support video
                </video>
            </div>
            <div id="edu-box">
                <h3>EDUCATION</h3>
                <ul>
                {edu.map(edu => <li key = {edu.id}> <a href={edu.href} target="_blank">{edu.name}</a><br/>
                                    {edu.what+ " - "}  {edu.when} </li>)}
                </ul>
            </div>
        </div>
    )
}
