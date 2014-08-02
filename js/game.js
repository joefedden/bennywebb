function Game() {
    this.inputManager = new InputManager();
    this.character = new Character("Mage", "Male", 10, 10, 1);
    this.character.groundState = true;
}

Game.prototype.update = function() {
    this.character.x = this.inputManager.getMouseX();
    this.character.y = this.inputManager.getMouseY();

    this.character.update();
}

Game.prototype.render = function(context) {
    //render background
    var w = Start.WIDTH;
    var h = Start.HEIGHT;
    context.fillStyle = "#3399FF";
    context.fillRect(0, 0, w, h);

    this.character.render(context, 0, 0);
}