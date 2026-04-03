var canvas, context, player, timer, interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new Player();
player.vx = 5;
player.vy = 0;

timer = setInterval(animate, interval);

function animate() 
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.move();
    if (player.x > canvas.width + player.width / 2) 
    {
        // player.x = -player.width / 2;         // Wrap around screen
        player.vx *= -1;                         // Bounce off the side

    }
    
    if (player.x < -canvas.width + player.width / 2) 
    {
        player.vx /= -1;
    }

    player.draw();
}



