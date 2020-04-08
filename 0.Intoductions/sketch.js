let walker;


function setup()
{
    createCanvas(640, 400);
    walker = new Walker();
    background(51);
}


function draw()
{    
    walker.step();
    walker.show();

}