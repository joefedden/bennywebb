function Game() {
    this.inputManager = new InputManager();
}

Game.prototype.update = function() {

}

Game.prototype.render = function(context) {
    //render background
    var w = window.innerWidth;
    var h = window.innerHeight;
    context.fillStyle = "#3399FF";
    context.fillRect(0, 0, w, h);
}