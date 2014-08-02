function Rectangle(ex, why, w, h) {
    this.x = ex;
    this.y = why;
    this.width = w;
    this.height = h;
}

Rectangle.prototype.contains = function(other) {
    return (other.x > this.x && other.y > this.y)
        && (other.x + other.width < this.x + this.width && other.y > this.y)
        && (other.x > this.x && other.y + other.height < this.y + this.height)
        && (other.x + other.width < this.x + this.width && other.y + other.height < this.y + this.height);
}

Rectangle.prototype.intersects = function(other) {
    var l1 = {x: this.x, y: this.y};
    var r1 = {x: this.x + this.width, y: this.y + this.height};
    var l2 = {x: other.x, y: other.y};
    var r2 = {x: other.x + other.width, y: other.y + other.height};

    if (l1.x > r2.x || l2.x > r1.x) {
        return false;
    }

    if (l1.y > r2.y || l2.y > r1.y) {
        return false;
    }

    return true;
}