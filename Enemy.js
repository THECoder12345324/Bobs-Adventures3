class Enemy {
    constructor(x, y, img, scl) {
        this.sprite = createSprite(x, y);
        this.image = img;
        this.sprite.addImage(this.image);
        this.sprite.scale = scl;
        this.sx = x;
        this.sy = y;
        this.x = x;
        this.y = y;
        this.dir = 1;
        this.rand = 0;
        enemyGroup.add(this.sprite);
    }
    display() {
        var x2 = this.x - 60;
        var x3 = this.x + 60;
        if (this.sprite.x < x2 || this.sprite.x > x3) {
            this.dir *= -1;
        }
        this.rand = random(0, 100);

        if (this.sprite.collide(groundGroup)) {
            if (this.rand < 90) {
                this.sprite.velocityY -= 13;
            }
        }
        this.sprite.velocityY += 0.8;

        this.sprite.x += 2 * this.dir;
    }
}

class Goo {
    constructor(x, y, scl, range, speed) {

        this.right = loadAnimation("img/goo1.png");
        this.left = loadAnimation("img/goo2.png");
        this.sprite = createSprite(x, y);
        this.sprite.addAnimation("right", this.right);
        this.sprite.addAnimation("left", this.left);
        this.sprite.scale = scl;

        this.range = range;
        this.sx = x;
        this.sy = y;
        this.x = x;
        this.y = y;
        this.dir = 1;
        this.speed = speed;
        enemyGroup.add(this.sprite);
    }
    display() {
        var d = dist(bob.x, bob.y, this.sprite.x, this.sprite.y);
        if (d < this.range * 2) {
            if (bob.x < this.sprite.x) {
                this.sprite.changeAnimation("left");
                this.sprite.x -= this.speed;
            }
            else if (bob.x > this.sprite.x) {
                this.sprite.changeAnimation("right");
                this.sprite.x += this.speed;
            }
        }
        else {
            if (this.sprite.x < this.x) {
                this.sprite.changeAnimation("right");
                this.sprite.x += this.speed / 2;
            }
            else if (this.sprite.x > this.x) {
                this.sprite.changeAnimation("left");
                this.sprite.x -= this.speed / 2;
            }
            else {
                this.sprite.changeAnimation("right");
            }
        }
    }
}

class FlyJay {
    constructor(x, y, scl) {
        this.sprite = createSprite(x, y);
        this.right = loadAnimation("img/Flyjay.png");
        this.left = loadAnimation("img/Flyjay2.png");
        this.sprite.scale = scl;
        this.x = x;
        this.y = y;
        this.sx = x;
        this.sy = y;
        this.sprite.addAnimation("right", this.right);
        this.sprite.addAnimation("left", this.left);
        enemyGroup.add(this.sprite);
    }
    display() {
        this.sprite.x = lerp(this.sprite.x, bob.x, 0.05);
        this.sprite.y = lerp(this.sprite.y, bob.y, 0.05);
        this.sprite.collide(groundGroup);
        if (bob.x < this.sprite.x) {
            this.sprite.changeAnimation("right");
        }
        else {
            this.sprite.changeAnimation("left");
        }
    }
}