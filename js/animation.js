function Animation(d, l) {
    this.index = 0;
    this.delay = d;
    this.delayCounter = 0;
    this.length = l;
    this.running = false;
}

Animation.prototype.update = function() {
    if (this.running == true) {
        this.delayCounter++;
        if (this.delayCounter == this.delay) {
    	    this.delayCounter = 0;
    	    this.step();
        }
    }
}

Animation.prototype.isEnded = function() {
    return this.index == length - 1;
}

Animation.prototype.step = function() {
    this.index++;
    if (this.index >= this.length)
        this.index = 0;
}

Animation.prototype.setIndex = function(index) {
    this.index = index;
}

Animation.prototype.getIndex = function() {
    return this.index;
}