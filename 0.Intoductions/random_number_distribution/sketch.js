let random_nums = new Array(20).fill(0);

function setup()
{
    createCanvas(640, 400);    
    
}

function draw()
{
    background(255);
    let index = int(random(random_nums.length));
    random_nums[index]++;  
    stroke(0);
    fill(175);
    let w = width/random_nums.length;
    console.log(w);
    for(let x=0; x<random_nums.length; x++)
        {
            rect(x*w, height-random_nums[x], w-1, random_nums[x]);
        }
}