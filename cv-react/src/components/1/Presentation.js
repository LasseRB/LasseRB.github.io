import React from 'react';

import Canvas from './Canvas'
import './Presentation.css';
import Lasse from './lasse_unscaled.jpg';


export default function Presentation() {
    return (
        <div id="presentation-container" >
            <div id="inner">
                
                <h1 id="nameHeader">Lasse Rützou Bruntse</h1>
                
                <div id="canvas-container">
                    <Canvas image={Lasse}/>
                </div>
                <div id="line-container">
                    <p>Junior Consultant at <a href="https://nine.dk/">Nine A/S</a></p>
                    <br/>
                    <div id="line"></div>
                </div>
                <div className="arrow-down icon"></div>
                
            </div>
            
            
        </div>
    )
}


