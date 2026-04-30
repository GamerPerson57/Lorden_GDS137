function GameObject(x,y,h,w,color)
{
    // set up player's starting point
    if(x==undefined)
        this.x = canvas.width/2;
    else
        this.x = x;
    if(y==undefined)
        this.y = canvas.height/2;
    else
        this.y = y;
    // set up player's dimentsions
    if(w==undefined)
        this.width = 100;
    else
        this.width = w;
    if(h==undefined)
        this.height = 100
    else
        this.height = h;
    
    this.radius = 50;

    // set players color
    if(color==undefined)
        this.color = "#ff0000";
    else
        this.color = color;

    //Set up bounding box
    // this.left = function()
    // {
    //     return this.x - this.width/2;
    // }
    // this.right = function()
    // {
    //     return this.x + this.width/2;
    // }
    // this.top = function()
    // {
    //     return this.y - this.height/2;
    // }
    // this.bottom = function()
    // {
    //     return this.y + this.height/2;
    // }


    //New Collision
    this.left = function() {
        return {x: this.x - this.width/2, y:this.y}
    }

    this.right = function() {
        return {x: this.x + this.width/2, y:this.y}
    }

    this.top = function() {
        return {x: this.x, y:this.y - this.height/2}
    }

    this.bottom = function() {
        return {x: this.x, y:this.y + this.height/2}
    }

    this.canJump = false;
    this.prevX = this.x;




    // set up player's velocity
    this.vx = 0;
    this.vy = 0;

    // Set up physics
    this.force = 1; // force
    this.ax = 1;  // horizontal acceleration
    this.ay = 1; // veritcal acceleration

    //jump speed
    this.jumpSpeed = 0;

    this.drawCircle = function()
    {
        context.beginPath();
        context.arc(this.x,this.y, this.radius, 0, 360*Math.PI/180, true)
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
        context.restore();
    }

    this.drawRect = function() 
    {
        context.beginPath();
        context.fillRect(this.x, this.y, this.width, this.height);
        context.stroke();

    }

    this.drawDebug = function() 
    {
        var size = 10;
        context.save();
            context.fillRect(this.x-size/2, this.y-size/2, size, size);
            context.fillRect(this.left().x-size/2, this.left().y-size/2, size, size);
            context.fillRect(this.right().x-size/2, this.right().y-size/2, size, size);
            context.fillRect(this.top().x-size/2, this.top().y-size/2, size, size);
            context.fillRect(this.bottom().x-size/2, this.bottom().y-size/2, size, size);
        context.restore();
    }

    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

    this.collisionCheck = function(obj)
    {
        if(
            this.left() < obj.right() &&
            this.right() > obj.left() &&
            this.top() < obj.bottom() &&
            this.bottom() > obj.top()
        )
        {
            return true;
        }
        return false;
    }

    this.hitTestPoint = function() {
        if (obj.x >= this.left().x && 
            obj.x <= this.right().x && 
            obj.y >= this.top().y && 
            obj.y <= this.bottom().y) 
            {
                return true;
            }
            return false;
    }
}



