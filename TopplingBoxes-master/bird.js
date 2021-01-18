class Bird extends parent {
    constructor(x, y, width, height) {
      super(x, y, width, height)
      this.img = loadImage("sprites/bird.png")
      
      
    }
    display(){
      super.display();
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY
      
     
    }
  };
  