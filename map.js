class Map {
    constructor(array, title, autoscrollerx, autoxspeed, autoscrollery, autoyspeed) {
        this.map = array;
        this.title = title;
        this.autoscrollerx = autoscrollerx;
        this.autoscrollery = autoscrollery;
        this.axspeed = autoxspeed;
        this.ayspeed = autoyspeed;

        this.image1 = loadImage('img/ground1.png');
        this.image2 = loadImage('img/ground2.png');
        this.image3 = loadImage('img/ground3.png');
        this.image4 = loadImage('img/ground4.png');
        this.poleImg = loadImage('img/pole.png');
        this.left = loadImage('img/leftbottom.png');
        this.middle = loadImage('img/middlebottom.png');
        this.right = loadImage('img/rightbottom.png');
        this.wiggle = loadImage('img/wigglesworth.png');
        this.doorImg = loadImage('img/door.png');
        this.enemy1Img = loadImage('img/enemy1real.png');
        this.images = [this.image1, this.image2, this.image3];
        this.moveImg = loadImage('img/heavymetal.png');

        this.x = 0;

        this.lowest = 0;
        this.farthest = 0;

        this.dir = 1;
        this.switch = 0;

        this.enemies = [];
        this.materials = [];
        this.movePlatsH = [];
        this.movePlatsV = [];
        this.realground = [];
        this.doors = [];
        this.poles = [];
        this.timer = 0;
        this.start = false;

        this.allSprites = [];

        this.score = '';
    }
    showTitle() {
        camera.zoom = 1;
        camera.position.x = width / 2;
        camera.position.y = height / 2;
        console.log(this.timer);
        background(0, 0, 0);
        textSize(40);
        fill(255, 215, 0);
        this.x += 1;
        text(this.title, width / 2 + this.x, height / 2);
    }
    loadMap() {
            for (var i = 0; i < this.map.length; i++) {
                for (var j = 0; j < this.map[i].length; j++) {
                    if (this.map[i][j] == 'P') {
                        bob = createSprite(j * TILESIZE, i * TILESIZE, 40, 40);
                        var scl = (width / height) / 2;
                        bob.addAnimation("crouching", crouching);
                        bob.addAnimation("crouching2", crouching2)
                        bob.addAnimation("runningright", runrightAnimation);
                        bob.addAnimation("runningleft", runleftAnimation);
                        bob.addAnimation("standing", bobImage);
                        bob.scale = 1 * scl;
                    
                        bob.setCollider("rectangle", 0, 0, bob.width - 30, bob.height);
                    }
                    if (this.map[i][j] == '1') {
                        var ground = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        var groundcollider = createSprite(j * TILESIZE, i * TILESIZE - (TILESIZE / 2), TILESIZE, 2);
                        groundcollider.visible = false;
                        if (i * TILESIZE > this.lowest) {
                            this.lowest = i * TILESIZE + 1;
                        }
                        var x = random(0, 2);
                        var image = this.images[x];
                        ground.addImage(random(this.images));
                        ground.scale = 2.4;
                        //ground.shapeColor = "green";
                        groundGroup.add(ground);
                        groundcolGroup.add(groundcollider);
                        this.allSprites.push(ground);
                        console.log("Ground");
                    }
                    if (this.map[i][j] == '2') {
                        var ground = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        if (i * TILESIZE > this.lowest) {
                            this.lowest = i * TILESIZE;
                        }
                        var x = random(0, 2);
                        var image = this.images[x];
                        ground.addImage(this.image4);
                        ground.scale = 2.4;
                        groundGroup.add(ground);
                            this.allSprites.push(ground);
                        console.log("Ground");
                    }
                    if (this.map[i][j] == '3') {
                        var pole = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        pole.addImage(this.poleImg);
                        pole.scale = 2.4;
                        flagpoleGroup.add(pole);
                        this.poles.push(pole);
                            this.allSprites.push(pole);
                    }
                    if (this.map[i][j] == '4') {
                        var flag = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        flag.shapeColor = "black";
                        flagpoleGroup.add(flag);
                        this.allSprites.push(flag);
                        this.farthest = (j * TILESIZE) - (TILESIZE / 2);
                    }
                    if (this.map[i][j] == '5') {
                        var bottom = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        bottom.addImage(this.left);
                        bottom.scale = 2.4;
                        groundGroup.add(bottom);
                            this.allSprites.push(bottom);
                    }
                    if (this.map[i][j] == '6') {
                        var bottom = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        bottom.addImage(this.middle);
                        bottom.scale = 2.4;
                        groundGroup.add(bottom);
                            this.allSprites.push(bottom);
                    }
                    if (this.map[i][j] == '7') {
                        var bottom = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        bottom.addImage(this.right);
                        bottom.scale = 2.4;
                        groundGroup.add(bottom);
                            this.allSprites.push(bottom);
                    }
                    if (this.map[i][j] == '8') {
                        var flag = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        var imge = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        imge.addImage(this.wiggle);
                        imge.scale = 0.5;
                        flag.shapeColor = "black";
                        flagpoleGroup.add(flag);
                        flagpoleGroup.add(imge);
                            this.allSprites.push(flag);
                    }
                    if (this.map[i][j] == 'E') {
                        var enemy = new Enemy(j * TILESIZE, i * TILESIZE, this.enemy1Img, 1);
                        enemy.display();
                        this.enemies.push(enemy);
                            this.allSprites.push(enemy);
                    }
                    if (this.map[i][j] == 'W') {
                        var sprite = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        sprite.visible = false;
                        var wood = new Material('W', j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        wood.display();
                        this.materials.push(wood);
                        materialGroup.add(sprite);
                            this.allSprites.push(sprite);
                        this.score = 'W';
                    }
                    if (this.map[i][j] == 'G') {
                        var sprite = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        sprite.visible = false;
                        var gold = new Material('G', j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        gold.display();
                        this.materials.push(gold);
                        materialGroup.add(sprite);
                            this.allSprites.push(sprite);
                        this.score = 'G';
                    }
                    if (this.map[i][j] == 'H') {
                        var movePlat = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        movePlat.addImage(this.moveImg);
                        movePlat.scale = 2.4;
                        var groundcollider = createSprite(j * TILESIZE, i * TILESIZE - (TILESIZE / 2), TILESIZE, 2);
                        groundcollider.visible = false;
                        groundcolGroup.add(groundcollider);
                        groundGroup.add(movePlat);
                        this.movePlatsH.push(movePlat);
                    }
                    if (this.map[i][j] == 'V') {
                        var movePlat = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        movePlat.addImage(this.moveImg);
                        movePlat.scale = 2.4;
                        var groundcollider = createSprite(j * TILESIZE, i * TILESIZE - (TILESIZE / 2), TILESIZE, 2);
                        groundcollider.visible = false;
                        groundcolGroup.add(groundcollider);
                        groundGroup.add(movePlat);
                        this.movePlatsV.push(movePlat);
                    }
                    if (this.map[i][j] == 'D') {
                        var door = new Door(j * TILESIZE, i * TILESIZE, this.doorImg, 2.4);
                        this.doors.push(door);
                    }
                }
            }
    }

    update() {
        this.switch += 1;
        console.log(this.lowest);
        if (this.switch >= 30) {
            this.dir *= -1;
            this.switch = 0;
        }
        for (var i = 0; i < this.enemies.length; i++) {
            var a = dist(bob.x, bob.y, this.enemies[i].x, this.enemies[i].y);
            if (a < width && a < height) {
                this.enemies[i].display();
            }
            else {
                this.enemies[i].sprite.velocityY = 0;
                this.enemies[i].x = this.enemies[i].sx;
                this.enemies[i].y = this.enemies[i].sy;
            }
        }
        for (var j = 0; j < this.materials.length; j++) {
            var b = dist(bob.x, bob.y, this.materials[j].x, this.materials[j].y);
            if (b < width && b < height) {
                this.materials[j].display();
            }
        }
        for (var k = 0; k < this.movePlatsH.length; k++) {
            var c = dist(bob.x, bob.y, this.movePlatsH[k].x, this.movePlatsH[k].y);
            if (this.movePlatsH[k+1]) {
                var huh = dist(this.movePlatsH[k].x, this.movePlatsH[k].y, this.movePlatsH[k+1].x, this.movePlatsH[k+1].y);
            }
            else {
                var huh = TILESIZE+1;
            }
            if (c < width && c < height) {
                if (huh < TILESIZE) {
                    this.movePlatsH[k].x += 5 * this.dir;
                    this.movePlatsH[k+1].x += 5 * this.dir;
                }
                else {
                    this.movePlatsH[k].x += 5 * this.dir;
                }
            }
        }
        for (var l = 0; l < this.movePlatsV.length; l++) {
            var d = dist(bob.x, bob.y, this.movePlatsV[l].x, this.movePlatsV[l].y);
            if (d < width && d < height) {
                this.movePlatsV[l].position.y += 5 * this.dir;
            }
        }
        for (var m = 0; m < this.doors.length; m++) {
            var d = dist (bob.x, bob.y, this.doors[i].sprite.x, this.doors[i].sprite.y);
            if (d < width && d < height) {
                this.doors[i].display();
            }
        }
        this.timer += 1;
    }

    destroy() {
        flagpoleGroup.removeSprites();
        groundGroup.removeSprites();
        enemyGroup.removeSprites();
        materialGroup.removeSprites();
        groundcolGroup.removeSprites();
        bob.remove();
    }
}