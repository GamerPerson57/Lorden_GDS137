
function randomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 50%)";
}

function Ball () {
    // player's starting point
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    // player's dimensions
    this.width = 100;
    this.height = 100;
    this.radius = 50;

    // player velocity
    this.vx = 0;
    this.vy = 0;

    // player color
    this.color = randomColor();

    this.draw = function() 
    {
        context.save();
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 360*Math.PI/180, true);
            context.fillStyle = this.color;
            context.fill();
            context.closePath();
        context.restore();
    }

    this.move = function() 
    {
        this.x += this.vx;
        this.y += this.vy;
    }

}