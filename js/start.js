Start.WIDTH =  window.innerWidth;
Start.HEIGHT =  window.innerHeight;
function Start() {

}

var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/60) };

var canvas = document.createElement('canvas');

var context = canvas.getContext('2d');

canvas.width = Start.WIDTH;
canvas.height = Start.HEIGHT;

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};
context.webkitImageSmoothingEnabled = false;
context.mozImageSmoothingEnabled = false;
context.imageSmoothingEnabled = false;


var game = new Game();

var update = function() {
    game.update();
    Start.WIDTH =  window.innerWidth;
    Start.HEIGHT =  window.innerHeight;
};

var render = function() {
    game.render(context);
};

var step = function() {
    update();
    render();
    animate(step);
};