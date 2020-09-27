class Paper  {

    constructor() {
    
    var option={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    
    
    }
    
    this.body=Bodies.circle(200, 200 , 5 , options)
    World.add(world, this.body)
    }
    
    display(){
        circle();
        this.body(this.body.position.x,this.body.position.y)
    
    }
}