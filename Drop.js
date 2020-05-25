class Drop{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.radiusX=random(10,20);
        this.radiusY= this.radiusX + 20;
    }

    display(){
        fill(0,0,255);
        ellipse(this.x,this.y,this.radiusX,this.radiusY);
    }

    fall(){
        this.y=this.y+random(10,30)
        if(this.y>=height){
            this.y=0;
        }
    
    }
    
}