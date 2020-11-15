class Box{
constructor(x, y, width, height){
    var boxOption={
        restitution:0.8
    }
    this.body=Bodies.rectangle(x, y, width, height, boxOption);
    World.add(world, this.body);
    this.width=width;
    this.height=height;



}

display(){
    var pos=this.body.position;
    var a = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(a);
    rectMode(CENTER);
    fill(255)
    rect(0, 0, this.width, this.height);
    pop();
}

}