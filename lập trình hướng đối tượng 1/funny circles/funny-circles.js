function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function creatCircle(){
    let ctx = document.getElementById('myCanvas').getContext("2d");
    let radius = Math.floor(Math.random() * 70); 
    let color = getRandomColor();
    let x = Math.random() * 900;
    let y = Math.random() * 700;
    let circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0 ,2*Math.PI);
    console.log(color);     
    ctx.fillStyle = color;
    ctx.fill();
}   

function creteMultipCircle (){
    for ( i = 1; i < 30 ; i++){
        creatCircle();
    }
}

creteMultipCircle();
