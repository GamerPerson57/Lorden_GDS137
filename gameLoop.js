var canvas, context, player, ball, timer, interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

ball = new Ball();
ball.vx = 5;
ball.vy = 5;

timer = setInterval(animate, interval);

function animate() 
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.move();
    if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius;
        ball.vx *= -1;
        ball.color = randomColor();
    }
    if (ball.x - ball.radius < 0) {
        ball.x = ball.radius;
        ball.vx *= -1;
        ball.color = randomColor();
    }

    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
        ball.vy *= -1;
        ball.color = randomColor();
    }
    if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;
        ball.vy *= -1;
        ball.color = randomColor();
    }

    ball.draw();
}



