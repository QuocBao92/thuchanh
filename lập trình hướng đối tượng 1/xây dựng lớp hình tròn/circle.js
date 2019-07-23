let Circle = function(radius,color){
    this.radius = radius;
    this.color = color;
    this.getRadius = function(){
        return radius;
    }
    this.getColor = function(){
        return color;
    }
    this.getArea = function(){    
        return Math.PI * radius*radius;
    } 
}

let circle1 = new Circle(3,'red');
let color = circle1.getColor();
let radius = circle1.getRadius();
let area = circle1.getArea();

alert("radius: "+radius+ ". Area: "+area+ ". Color: "+color);

let circle2 = new Circle(4,'yellow');

alert('Circle2 with radius is '+ circle2.radius +' and the Area is '+ circle2.getArea() +' with color is: '+circle2.color);
