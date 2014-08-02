function TextureAnimation(delay, textureRegions) {
    this.animation = new Animation(delay, textureRegions.length);
    this.textures = textureRegions;
    this.locked = false;
    this.running = false;
}

TextureAnimation.prototype.update = function() {
    this.animation.running = this.running;
    this.animation.update();
}

TextureAnimation.prototype.render = function(context, ex, why) {
    this.textures[this.animation.getIndex()].render(context, ex, why);
}

TextureAnimation.prototype.isOnScreen = function(screenEx, screenWhy, texEx, texWhy) {
    return this.textures[this.animation.index].isOnScreen(screenEx, screenWhy, texEx, texWhy);
}

TextureAnimation.prototype.setIndex = function(index) {
    this.animation.setIndex(index);
}

TextureAnimation.prototype.getIndex = function() {
    return this.animation.getIndex();
}

TextureAnimation.prototype.step = function() {
    this.animation.step();
}

TextureAnimation.prototype.isEnded = function() {
    return this.animation.isEnded();
}