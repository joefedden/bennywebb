function TextureRegion(name, ex, why, w, h, sf) {
    this.image = new Image();
    this.image.src = "resources/" + name + ".png";

    this.box = new Rectangle(ex, why, w, h);
    this.scaleFactor = sf;
    this.locked = false;
}

TextureRegion.prototype.render = function(context, ex, why) {
    context.drawImage(this.image, this.box.x, this.box.y, this.box.width, this.box.height, ex, why, this.box.width * this.scaleFactor, this.box.height * this.scaleFactor);
}

TextureRegion.prototype.isOnScreen = function(screenEx, screenWhy, texEx, texWhy) {
    var screen = new Rectangle(screenEx, screenWhy, Start.WIDTH, Start.HEIGHT);
    var tex = new Rectangle(texEx, texWhy, this.box.width * this.scaleFactor, this.box.height * this.scaleFactor);
    return screen.contains(tex) || screen.intersects(tex);
}
