import React, { Component, useRef } from 'react'
import Lasse from './lasse_unscaled.jpg';
export default class Canvas extends Component {
    componentDidMount(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        // canvas.width  = window.innerWidth;
        // canvas.height = 500;
     
        const image = this.refs.image;
        var scrollDiff = 0;
        
        image.onload = () => {
            ctx.drawImage(image,(canvas.width/2)-640/2,0, 640,360);
            window.imageData= ctx.getImageData(0,0,canvas.width, canvas.height);
            
            window.addEventListener("scroll", ()=>{
                scrollDiff = (window.scrollY - scrollDiff);
                ctx.putImageData(scroll_shift(window.imageData, window.scrollX,scrollDiff,ctx),0,0);
            });  

        }   
        const scroll_shift = (data,x, y,ctx) =>{
            // console.log(y);
            var bigwidth = (ctx.canvas.width * 4);
            for(var n = 0; n < data.data.length; n += 4){
               
                    var brightness = (  data.data[n+0] +
                                        data.data[n+1] +
                                    data.data[n+2] )/3

                    
                    
                    if(brightness > y){
                        var r = data.data[n+bigwidth+12];
                        var g = data.data[n+bigwidth+13];
                        var b = data.data[n+bigwidth+14];
                        var a = data.data[n+bigwidth+15];
                           
                        data.data[n+0] = r;
                        data.data[n+1] = g;
                        data.data[n+2] = b;
                        data.data[n+3] = a;
                              
                        r = data.data[n+0];
                        g = data.data[n+1];
                        b = data.data[n+2];
                        a = data.data[n+3];

                    }
               
                    
            }
            
           return data;
           
        }
    }
    
        render() {
            return(
            <div>
                <canvas id="canvas"ref="canvas"width={window.innerWidth} height={360}> 
                <img ref="image" src={this.props.image} alt="" width={640} height = {360}/>
                </canvas>
            </div>
            )
        }
}