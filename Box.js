class Particle{
    constructor(x, y, r){
        var options = {
            restitution : 1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }
    
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        ellipse(0, 0, this.r);
        pop()
    }

    isOffScreen(){
        var pos = this.body.position;
        return(pos.y > height + 50)
    }

    removeFromWorld(){
        World.remove(world, this.body);
    }
}