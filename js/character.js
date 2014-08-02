Character.BACK = 0;
Character.RIGHT = 1;
Character.FORWARD = 2;
Character.LEFT = 3;

Character.GRAVITY = -1100;
Character.JUMP_VELOCITY = 350;
Character.JUMP_BUFFER_MAX = 5;

Character.SF = 2;
Character.SPEED = 3;
Character.WIDTH = 18 * Character.SF;
Character.HEIGHT = 29 * Character.SF;

function Character(type, sex, ex, why, facing) {
    if (!type)
        return;

    var fileName = type + "-" + sex.substring(0, 1).toUpperCase();
    this.type = type;

    var w = 18;
    var h = 29;

    //facing back
    var facingBack = new TextureAnimation(10,
        [new TextureRegion(fileName, 3, 3, w, h, Character.SF, false),
        new TextureRegion(fileName, 27, 3, w, h, Character.SF, false),
        new TextureRegion(fileName, 51, 3, w, h, Character.SF, false),
        new TextureRegion(fileName, 27, 3, w, h, Character.SF, false)]
    ); facingBack.setIndex(1);

    //facing right
    var facingRight = new TextureAnimation(10,
        [new TextureRegion(fileName, 3, 35, w, h, Character.SF, false),
        new TextureRegion(fileName, 27, 35, w, h, Character.SF, false),
        new TextureRegion(fileName, 51, 35, w, h, Character.SF, false),
        new TextureRegion(fileName, 27, 35, w, h, Character.SF, false)]
    ); facingRight.setIndex(1);

    //facing forward
    var facingForward = new TextureAnimation(10,
        [new TextureRegion(fileName, 3, 67, w, h, Character.SF, false),
        new TextureRegion(fileName, 27, 67, w, h, Character.SF, false),
        new TextureRegion(fileName, 51, 67, w, h, Character.SF, false),
        new TextureRegion(fileName, 27, 67, w, h, Character.SF, false)]
    ); facingForward.setIndex(1);

    //facing left
    var facingLeft = new TextureAnimation(10,
        [new TextureRegion(fileName, 3, 99, w, h, Character.SF, false),
        new TextureRegion(fileName, 27, 99, w, h, Character.SF, false),
        new TextureRegion(fileName, 51, 99, w, h, Character.SF, false),
        new TextureRegion(fileName, 27, 99, w, h, Character.SF, false)]
    ); facingLeft.setIndex(1);

    this.textures = [facingBack, facingRight, facingForward, facingLeft];

    this.x = ex;
    this.y = why;
    this.facing = facing;
    this.lastStepX = ex;
    this.lastStepY = why;
    this.velocity = 0;
    this.groundState = false;
    this.jumpBuffer = 0;
    this.alive = true;
    this.ball = null;
    this.spinning = false;
    this.spinningAnimation = new Animation(40, 4);
    this.spinningAnimation.setIndex(Character.FORWARD);
}

Character.prototype.update = function() {
    var strideDist = 7 * Character.SF;
    if (this.groundState) {
        if (this.facing == 0 || this.facing == 2) {
            if (Math.abs(this.lastStepY - this.y) >= strideDist) {
                this.textures[this.facing].step();
                this.lastStepY = this.y;
            }
        } else {
            if (Math.abs(this.lastStepX - this.x) >= strideDist) {
                this.textures[this.facing].step();
                this.lastStepX = this.x;
            }
        }
    }
    else {
        this.textures[this.facing].setIndex(1);
        this.velocity += Character.GRAVITY * 0.0167;
        this.y -= this.velocity * 0.0167;
    }

    //jump code needs to be redone

    if (this.ball) {
        this.ball.update();
    }

    if (this.spinning) {
        this.spinningAnimation.update();
        this.facing = this.spinningAnimation.getIndex();
        this.textures[this.facing].running = true;
    }
}

Character.prototype.render = function(context, ex, why) {
    this.textures[this.facing].render(context, this.x - ex, this.y - why);
    if (this.ball)
        this.ball.render(context, ex, why);
}

Character.prototype.isOnScreen = function(ex, why) {
    return this.textures[this.facing].isOnScreen(ex, why, this.x, this.y);
}

Character.prototype.isLocked = function() {
    return false;
}

Character.prototype.setGroundState = function(gs) {
    this.groundState = gs;
    if (this.groundState)
        this.jumpBuffer = 0;
}

Character.prototype.getBoundingBox = function() {
    return new Rectangle(this.x, this.y, this.width, this.height);
}