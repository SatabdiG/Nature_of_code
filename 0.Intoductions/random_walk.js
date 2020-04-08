

class Walker {

    constructor()
    {
        this.x = width/2;
        this.y = height/2;


    }
    step()
    {
        let stepx = int(random(3))-1;
        let stepy = int(random(3)) -1;
        this.x+=stepx;
        this.y+=stepy;
        //Adding Levy's flight
        // let r = random(1);
        // if(r<0.01)
        //     {
        //         xstep = random(-100, 100);
        //         ystep = random(-100, 100);

        //     } else{
        //         xstep = random(-1, 1);
        //         ystep = random(-1, 1);
        //     }
    }

    show()
    {
        // strokeWeight(16);
        stroke(255);
        point(this.x, this.y);
    }
}