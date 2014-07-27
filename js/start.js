var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/60) };

var width =  window.innerWidth;
var height =  window.innerHeight;

var canvas = document.createElement('canvas');

var context = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

var game = new Game();

var update = function() {
    game.update();
};

var render = function() {
  game.render(context);
};

var step = function() {
  update();
  render();
  animate(step);
};