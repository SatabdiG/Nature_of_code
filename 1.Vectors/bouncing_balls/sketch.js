
let location1;
let speed;

function setup()
{
    createCanvas(640, 500);
    background(255);    
    location1 = createVector(100, 100);
    speed = createVector(1, 3.3);
    
}

function draw()
{
    background(255);
    location1.add(speed);

    if((location1.x>width)||(location1.x<0))
        {
     
            speed.x = speed.x *-1;

        }
    if((location1.y>height)||(location1.y<0))
        {
           
            speed.y = speed.y * -1;
        }
    stroke(0);
    fill(175);
    ellipse(location1.x, location1.y, 16, 16);
}