let xs = []
for(var i = 0; i < 1000; i++){
    xs.push(i)
}
var t = 0
function animate(){
    let points = xs.map(x =>{
        let y = 100 + 10 * Math.sin((x + t)/ 10)
        return [x,y]
    })
    let path = "M" + points.map(p =>{
        return p[0] + "," +p[1]
    }).join(" L")

    document.querySelector("path").setAttribute("d", path)
    requestAnimationFrame(animate)
    t += 0.3;
}

animate()