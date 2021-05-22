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
                            this.sprite.x += 15;
                        }
                        if (this.life == 3) {
                            this.sprite.x += 17;
                        }
                        if (this.life == 2) {
                            this.sprite.x += 17;
                        }
                        if (this.life == 1) {
                            this.sprite.x += 17;
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