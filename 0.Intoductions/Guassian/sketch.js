

function setup()
{
    createCanvas(640, 400);
}


function draw()
{
    let num = randomGaussian();
    let sd = 10;
    let mean = 320;

    let x = sd * num + mean;
    fill(255, 10);
    ellipse(x, 150, 16, 16);

}