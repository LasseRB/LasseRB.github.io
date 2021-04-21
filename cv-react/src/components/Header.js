import React from 'react'
import { Link } from "react-router-dom";
import Contact from './Contact';



export default function Header(props) {
    let isOver = "";
    if(props.position > 11){
        isOver = "color: white;";
    }
    return (
        <div>
              <header>
                    {/* <Link to='/contact' id="contact-header">contact</Link> */}
                    <a href="mailto:lassebrunt@gmail.com">contact</a> 
                    // <a href="#">da</a> / <a href="#">en</a>

            </header>
        </div>
    )
}
