function Scene() {
    this.list = {};
    this.x = 0;
    this.y = 0;
    this.zoom = 1;

    this.pupfx = 0;
    this.pupfy = 0;
    this.panner = new Animation(0, 0);

    this.zupfx = 0;
    this.zupfy = 0;
    this.zoomer = new Animation(0, 0);

}

Scene.prototype.update = function() {
    for (var item in this.list) {
        item.update();
    }
    if (!this.panner.isEnded() && this.panner.running) {}
        this.move(this.pupfx, this.pupfy, 0);
        this.panner.update();
    } else {
        this.panner.running = false;
    }
}

Scene.prototype.render = function(context) {
    for (var item in this.list) {
        if (item.locked)
            item.render(0, 0);
        else
            if (item.isOnScreen(this.x, this.y))
                item.render(this.x, this.y);
    }
}

Scene.prototype.add = function(item) {
    this.list.push(item);
}

Scene.prototype.add = function(index, item) {
    this.list.splice(index, 0, item);
}

Scene.prototype.move = function(dx, dy, dz) {
    this.x += dx;
    this.y += dy;
    this.zoom = dz;
}

Scene.prototype.zoom = function(dz) {
    this.zoom += dz;
}

Scene.prototype.pan = function(dx, dy, dz, frames) {
    this.panner = new Animation(1, frames);
    this.panner.running = true;

    this.pupfx = dx / frames;
    this.pupfy = dy / frames;
}

Scene.prototype.get = function(index) {
    return this.list[index];
}
