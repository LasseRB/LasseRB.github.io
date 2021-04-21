import React,{useState,useEffect,useRef,useCallback} from 'react'
import AOS from 'aos';
import './Skill.css';

export default function Skills() {
    const elements = [{language:"Java",level:10}, {language:"JS",level:8}, {language:"Python",level:8},{language:"F#",level:4},{language:"Git",level:10},{language:"Psql",level:11},{language:"HTML",level:14.6},{language:"CSS",level:14.6}];
    const items = [];
   
        let index = -1;
        elements.map(item => {
            index++;
        items.push(<li key={index}>{<SkillBar language = {item.language} level = {item.level}/>} </li>)
        })

    return (
        <div id="skillList"  data-aos="fade-right" data-aos-duration="2000" data-aos-anchor="#presentation-container"
        data-aos-anchor-placement="top-top" >
            <h3>Programming Language Skills</h3>
            <ul>
                {items}
            </ul>
        </div>
    )
}

const SkillBar = (props) =>{
    var [pos, setPos] = useState("top");
    var[bar, setBar] = useState({});
    const {language, level} = props;

    useEffect (()=>{
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 5){
               setPos("moved")
            } else {
               setPos("top")
            }
        })
        console.log("moved!")
    },[])

   
  if(pos =="moved"){ 
        setTimeout(()=>{
            setBar({width: level*10})
        }, 1000-level*2)
      
    }else{
        setTimeout(()=>{
            setBar({width: 0})
        }, 10)
  
    }
    var dots = "";
    for(var i = 0; i < 30; i++){
         dots += " . ";
    }
   

    return(
        <div className="skillContainer">
            <h3>{language}</h3>
             <div id="skillBar"><div id="bar" style={bar}/>{dots}</div>
        </div>
    )
}
