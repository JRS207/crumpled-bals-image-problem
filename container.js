class container {
constructor(x,y){
    var options={
        restituition:1.3,
        density:2
    }
    this.x=x;
    this.y=y;
    this.body=Bodies.rectangle(this.x,this.y,options)
    World.add(world,this.body)
}
display()
}