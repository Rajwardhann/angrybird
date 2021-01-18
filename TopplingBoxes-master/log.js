class Log extends parent{
    constructor(x, y, width, height,angle) {
      super(x, y, width, height,angle)
      
      
      this.img = loadImage("sprites/wood2.png")
      Matter.Body.setAngle(this.body,angle);
      
      
    }
    
  };