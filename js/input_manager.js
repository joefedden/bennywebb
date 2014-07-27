InputManager.LEFT  = 37;
InputManager.UP    = 38;
InputManager.RIGHT = 39;
InputManager.DOWN  = 40;
InputManager.W     = 87;
InputManager.A     = 65;
InputManager.S     = 83;
InputManager.D     = 68;
InputManager.SPACE = 32;

var mouse;
var keysPressed;

function InputManager() {
    mouse = {x: 0, y: 0};
    keysPressed = {};

    document.addEventListener('mousemove', InputManager.prototype.updateMouse, false);
    document.addEventListener('keyup', function(event) { InputManager.prototype.onKeyUp(event); }, false);
    document.addEventListener('keydown', function(event) { InputManager.prototype.onKeyDown(event); }, false);
}

InputManager.prototype.updateMouse = function(e) {
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
}

InputManager.prototype.getMouseX = function() {
    return mouse.x;
}

InputManager.prototype.getMouseY = function() {
    return mouse.y;
}

InputManager.prototype.isKeyDown = function(keyCode) {
    return keysPressed[keyCode] ? true : false;
}

InputManager.prototype.onKeyDown = function(event) {
    keysPressed[event.keyCode] = true;
}

InputManager.prototype.onKeyUp = function(event) {
    delete keysPressed[event.keyCode];
}