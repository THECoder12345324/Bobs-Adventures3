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

class Danny {
    constructor(x, y, life, scl, ylim, xlim) {
        var image = loadAnimation("img/DANNY-removebg-preview.png");
        this.sprite = createSprite(x, y);
        this.sprite.addAnimation("daze", image);
        this.sprite.addAnimation("spin", dannyAnimation);
        this.sprite.scale = scl;
        this.sprite.setCollider("rectangle", 0, 0, 130, 150);
        this.defeated = false;
        this.hit = false;
        this.life = life;
        this.timer = 0;
        this.xmove = 0;
        this.ylim = ylim;
        this.xlim = xlim;
        this.activate = false;
        this.shieldImg = loadImage("img/shield.png");
    }
    display() {
        this.timer += 1;
        if (bob.y < this.ylim && bob.x > this.xlim) {
            this.activate = true;
        }
        if (this.activate == true) {
            if (this.defeated == false) {
                if (this.life == 5) {
                    bossMusic.rate(0.2);
                }
                if (this.life == 4) {
                    bossMusic.rate(0.4);
                }
                if (this.life == 3) {
                    bossMusic.rate(0.6);
                }
                if (this.life == 2) {
                    bossMusic.rate(0.8);
                }
                if (this.life == 1) {
                    bossMusic.rate(1);
                }
                if (this.timer < 240) {
                    this.sprite._rotation = 0;
                    this.sprite.changeAnimation("spin");
                    if (bob.x < this.sprite.x) {
                        if (this.life == 5) {
                            this.sprite.x -= 10;
                        }
                        if (this.life == 4) {
                            this.sprite.x -= 12;
                        }
                        if (this.life == 3) {
                            this.sprite.x -= 12;
                        }
                        if (this.life == 2) { 
                            this.sprite.x -= 12;
                        }
                        if (this.life == 1) {
                            this.sprite.x -= 12;
                        }
                    }
                    else {
                        if (this.life == 5) {
                            this.sprite.x += 10;
                        }
                        if (this.life == 4) {
                            this.sprite.x += 12;
                        }
                        if (this.life == 3) {
                            this.sprite.x += 15;
                        }
                        if (this.life == 2) {
                            this.sprite.x += 15;
                        }
                        if (this.life == 1) {
                            this.sprite.x += 15;
                        }
                    }
                    this.sprite.velocityY += 0.8;

                    if (bob.isTouching(this.sprite)) {
                        tick = 0;
                        deadx = bob.y - (warpthingyy) - 900;
                        gamestate = "dead";
                        bgMusic1.stop();
                        bossMusic.stop();
                        bossm = "off";
                        musicloop = 0;
                        death.play();
                    }
                }
                if (this.timer == 240) {
                    this.xmove = 0;
                }
                if (this.timer >= 240) {
                    this.sprite.changeAnimation("daze");
                    if (bob.isTouching(this.sprite)) {
                        if (this.hit == false) {
                            this.life -= 1;
                            /*if (this.life == 2) {
                                for (var i = 0; i < 5; i++) {
                                    enemy = new Enemy(map.doors[0].sprite.x + i * 30, bob.y, map.enemy1img, 1)
                                    this.enemies.push(enemy);
                                }
                            }*/
                        }
                        this.hit = true;
                    }
                    else if (this.timer > 300 && this.hit == false) {
                        this.timer = 0;
                    }



                    if (this.hit == true) {
                        if (bob.x < this.sprite.x) {
                            this.xmove += 1;
                            if (this.xmove < 60) {
                                this.sprite.x += 8;
                            }
                            if (this.sprite._rotation < 90) {
                                this.sprite._rotation += 8;
                            }
                            if (this.xmove > 100) {
                                this.timer = 0;
                                this.hit = false;
                            }
                        }
                        if (bob.x > this.sprite.x) {
                            this.xmove += 1;
                            if (this.xmove < 60) {
                                this.sprite.x -= 8;
                            }
                            if (this.sprite._rotation > -90) {
                                this.sprite._rotation -= 8;
                            }
                            if (this.xmove > 100) {
                                this.timer = 0;
                                this.hit = false;
                            }
                        }
                    }
                    this.sprite.velocityY += 0.8;
                }
            }
            if (this.life == 0) {
                this.defeated = true;
            }
            this.sprite.collide(groundGroup);
        }
    }
}
class WIGGLE {
    constructor(x, y, life, scl) {
        var image = loadImage("img/wigglesworth.png");
        this.sprite = createSprite(x, y);
        this.sprite.addImage("alive", image);
        this.sprite.scale = scl;
        this.defeated = false;
        this.hit = false;
        this.life = life;
        this.timer = 0;
        this.activate = false;
        this.arrow;
        this.x = 0;
        this.y = 0;
    }
    start() {
        if (dist(bob.x, bob.y, this.sprite.x, this.sprite.y) < width) {
            this.timer += 1;
            if (this.timer <= 80) {
                if (this.timer % 10 === 0) {
                    var dx = random(0, 50);
                    var dx2 = -dx;
                    var dy = random(0, 50);
                    var dy2 = -dy;
                    var haha = random(dx, dx2);
                    var haha2 = random(dy, dy2);
                }

                /*this.sprite.x -= haha / 10;
                this.sprite.y -= haha2 / 10;*/
            }
            if (this.timer > 50) {
                this.sprite.x = lerp(this.sprite.x, bob.x + width / 4, 0.05);
                this.sprite.y = lerp(this.sprite.y, bob.y - height / 6, 0.05);
            }
            if (this.timer > 260) {
                if (this.timer % (20 * this.life) === 0) {
                    this.x = bob.x;
                    this.y = bob.y;
                    if (this.hit == false) {
                        this.arrow = createSprite(this.sprite.x, this.sprite.y);
                    }
                    var img = loadImage("img/arrow.png");
                    this.arrow.addImage("shoot", img);
                    enemyGroup.add(this.arrow);
                    this.arrow.scale = 0.8;
                    this.arrow.lifetime = 60;
                }
                if (this.arrow) {
                    if (this.arrow.collide(groundGroup)) {
                        this.arrow.destroy();
                    }
                    if (this.x < this.arrow.x) {
                        this.arrow.x -= 18;
                    }
                    else {
                        this.arrow.x += 18;
                    }
    
                    if (this.y < this.arrow.y) {
                        this.arrow.y -= 18;
                    }
                    else {
                        this.arrow.y += 18;
                    }
                    if (this.x == this.arrow.x && this.y == this.arrow.y) {
                        this.arrow.destroy();
                    }
                }
            }
            if (this.timer == 500) {
                this.shield = createSprite(bob.x + 40, bob.y);
                var image = loadImage("img/shield.png");
                this.shield.addImage("shield", image);
                this.tock = 0;
            }
            if (this.timer > 560) {
                if (bob.collide(this.shield)) {
                    this.shield.destroy();
                    this.destruct = createSprite(bob.x, bob.y, TILESIZE * 2, TILESIZE * 2);
                    this.destruct.visible = false;
                    this.tock = 1;
                    madvar = 1;
                    this.hit = false;
                }
                if (this.tock == 1) {
                    this.destruct.x = bob.x;
                    this.destruct.y = bob.y;
                    if (this.arrow.isTouching(this.destruct)) {
                        this.arrow.lifetime = 900;
                        this.hit = true;
                        this.arrow.x = lerp(this.arrow.x, this.sprite.x, 0.4);
                        this.arrow.y = lerp(this.arrow.y, this.sprite.y, 0.4);
                    }
                    if (this.sprite.isTouching(this.arrow) && this.hit == true) {
                        this.arrow.destroy();
                        this.life -= 1;
                        madvar = 0;
                        this.destruct.destroy();
                        this.timer = 260;
                    }
                }
            }
        }
        if (this.life == 0) {
            this.defeated = true;
        }
    }
}