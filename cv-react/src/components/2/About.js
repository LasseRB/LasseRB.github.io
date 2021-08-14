import React from 'react'

export default function About() {
    const style = {

        position: "relative",
        width: "400px",
        // height: "px",
        // left: "785px",
        top: "0px",
        "fontFamily": "Antic Didone",
        "fontStyle": "normal",
        "fontWeight": "normal",
        // "fontSize": "15px",
        "lineHeight": "21px",
        // "border": "1px solid black",
        color: "#000000",
        padding: "0",
        margin: "0"
      };
     
    return (
        <div style={style}  data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1200" data-aos-anchor="#presentation-container"
        data-aos-anchor-placement="top-top" >
            <h3>Who</h3>
            <p>  I’m a copenhagen based software developer, working as junior consultant for Nine A/S. 
                I also help run a small story-platform called <a href="droemmehavet.dk">drømmehavet</a>. 
                 I love learning new things and is not afraid to be thrown into the deep end.
                 I have a past in character animation, drawing and art. </p>
        
        </div>

    )
}
