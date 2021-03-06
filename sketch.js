var runrightAnimation;
var runleftAnimation;
var bobImage;

var TILESIZE;
var groundGroup;

var gamestate = "title";

var groundcheck;
var la = 0;
var lo = 0;

var grid;
var tilesize;

var madvar = 0;

var cols = 0;
var rows = 0;

var theendishere = false;
var startdraw = false;

var addendtime = 0;

var iteration = 0;
var jumpcount = 0;
var level = 1;
var warpthingy = 0;
var warpthingyy = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var scoreaddx = 0;
var scoreaddy = 0;
var scoreaddtimer = 0;
var deadx = 0;
var tick;

var x1;
var y1;
var x2;
var y2;
var x3;
var y3;
var x4;
var y4;
var x5;
var y5;
var x6;
var y6;
var x7;
var y7;

var x = 0;

var woodCount = 0;
var addWood = 0;

var addTimeforintro = 0;
var addsome = 0;

var goldCount = 0;
var addGold = 0;

var stoneCount = 0;
var addStone = 0;

var lerpr = false;
var lerpl = false;

var levelp = 1;

var ptimer = 0;

var phoneangle = 0;
var phonedir = 1;
var bgMusic1;

var pause = false;

var musicloop = 0;
var bossm = "off";

var bob;
var fakebob;
var addscore = 0;

var answered1 = false;
var bonus1 = false;

var answered2 = false;
var woodS = false;

var bgMusic1;
var castleImg;

function preload() {
    runrightAnimation = loadAnimation("img/run1.png", "img/run2.png", 
                                    "img/run3.png", "img/run4.png", 
                                    "img/run5.png", "img/run6.png", 
                                    "img/run7.png", "img/run8.png");
    runleftAnimation = loadAnimation("img/run1l.png", "img/run2l.png", 
                                    "img/run3l.png", "img/run4l.png", 
                                    "img/run5l.png", "img/run6l.png", 
                                    "img/run7l.png", "img/run8l.png");
    crouching = loadAnimation("img/crouch1.png", "img/crouch2.png");
    crouching2 = loadAnimation("img/crouch3.png", "img/crouch4.png");
    flagpoleAnimation = loadAnimation("img/flagpoleslide1.png", "img/flagpoleslide2.png");
    bobDead = loadAnimation("img/dead.png");
    bobImage = loadAnimation("img/bob.png");

    dannyAnimation = loadAnimation("img/dspin1-removebg-preview.png", "img/dspin2-removebg-preview.png", "img/dspin3-removebg-preview.png", "img/dspin4-removebg-preview.png");
    dannyAnimation.frameDelay = 2;

    world1 = loadImage("img/world-1-2.png");
    pinImg = loadImage("img/pin.png");
    bedImg = loadImage("img/bedroom2.png");
    phoneImg = loadImage("img/phonebase.png");
    ringImg = loadImage("img/phone.png");

    pauseImg = loadImage("img/Pause.png");

    wbuildImg = loadImage("img/woodbuild.png");
    sbuildImg = loadImage("img/stonebuild.png");
    gbuildImg = loadImage("img/goldbuild.png");

    mountainImg = loadImage("img/mountainbackground.png");
    castleImg = loadImage("img/Castlebg.png");

    v1 = loadSound("snd/Recording1.m4a");
    v2 = loadSound("snd/Recording2.m4a");
    v3 = loadSound("snd/Recording3.m4a");
    v4 = loadSound("snd/Recording4.m4a");
    v5 = loadSound("snd/Recording5.m4a");
    v6 = loadSound("snd/Recording6.m4a");
    v7 = loadSound("snd/Recording7.m4a");
    v8 = loadSound("snd/Recording8.m4a");
    v9 = loadSound("snd/Recording9.m4a");
    v10 = loadSound("snd/Recording10.m4a");
    v11 = loadSound("snd/Recording11.m4a");
    v12 = loadSound("snd/Recording12.m4a");
    v13 = loadSound("snd/Recording13.m4a");
    v14 = loadSound("snd/Recording14.m4a");
    bgMusic1 = loadSound("snd/BgMusic1.wav");
    bgMusic2 = loadSound("snd/bgMusic2.wav");
    telephone = loadSound("snd/telephone.wav");
    bossMusic = loadSound("snd/danana.wav")
    death = loadSound("snd/death.wav");
    endMusic = loadSound("snd/endMusic.wav");

    allSound = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, 
        bgMusic1, bgMusic2, telephone, bossMusic, telephone, death, endMusic];
}

function setup() {
    canvas = createCanvas(displayWidth - 100, displayHeight - 140);
    pin = createSprite((displayWidth - 100) / 4.58, (displayHeight - 100) / 1.4384);
    pin.addImage(pinImg);
    pin.scale = 0.2;
    playButton = createButton("PLAY");
    playButton.size(200, 100);
    playButton.style("font-size", 40 + "pt");
    playButton.style("border-radius", 25);
    playButton.style("background-color", "gold");
    playButton.position((width / 2 - 100) * (displayWidth / 1920), (height / 2 + 200) * (displayHeight / 1080));

    menuButton = createButton("CONTROLS");
    menuButton.size(200, 100);
    menuButton.style("font-size", 25 + "pt");
    menuButton.style("border-radius", 25);
    menuButton.style("background-color", "gold");
    menuButton.position((width / 2 - 100) * (displayWidth / 1920), (height / 2 + 50) * (displayHeight / 1080));

    backButton = createButton("BACK");
    backButton.size(200, 100);
    backButton.style("font-size", 40 + "pt");
    backButton.style("border-radius", 25);
    backButton.style("background-color", "gold");
    backButton.position((width / 2 - 100) * (displayWidth / 1920), (height / 2 + 50) * (displayHeight / 1080));
    backButton.hide();

    doneButton = createButton("DONE");
    doneButton.size(200, 100);
    doneButton.style("font-size", 40 + "pt");
    doneButton.style("border-radius", 25);
    doneButton.style("background-color", "gold");
    doneButton.position((width - (displayWidth / 6.066)), (displayHeight / 16.2));
    doneButton.hide();

}

function draw() {
    background(255);
    scale(displayWidth / 1920, displayHeight / 1080);
    if (woodCount < addWood) {
        woodCount += 1;
    }
    else if (woodCount > addWood) {
        woodCount -= 1;
    }

    if (goldCount < addGold) {
        goldCount += 1;
    }
    else if (goldCount > addGold) {
        goldCount -= 1;
    }

    if (stoneCount < addStone) {
        stoneCount += 1;
    }
    else if (stoneCount > addStone) {
        stoneCount -= 1;
    }

    if (gamestate == "title") {
        pin.visible = false;
        image(mountainImg, 0, 0, width, height);
        textSize(105);
        fill(255, 215, 0);
        textAlign(CENTER, CENTER);
        text("BOB'S", (width / 2), (height / 2) - (350 * (displayHeight / 1080)));
        text("ADVENTURES", (width / 2), (height / 2) - (250 * (displayHeight / 1080)));
        playButton.mousePressed(function () {
            gamestate = "intro";
            fakebob = createSprite(0, 0, 40, 40);
            var fakescl = (displayWidth / 1920) * (displayHeight / 1080);
            fakebob.addAnimation("crouching", crouching);
            fakebob.addAnimation("crouching2", crouching2)
            fakebob.addAnimation("runningright", runrightAnimation);
            fakebob.addAnimation("runningleft", runleftAnimation);
            fakebob.addAnimation("standing", bobImage);
            fakebob.scale = 1.55 * fakescl;
            playButton.hide();
            menuButton.hide();
        })

        menuButton.mousePressed(function () {
            gamestate = "menu";
            menuButton.hide();
            playButton.hide();
            backButton.show();
        })
    }

    if (gamestate == "menu") {
        textSize(35);
        textAlign(CENTER, CENTER);
        fill("red");
        text("Move Bob with the arrow keys", width / 2, 40);
        text("Run with shift", width / 2, 140);
        text("Enter levels by pressing Enter", width / 2, 240);
        text("Get as much materials as you can! (You'll need them later)", width / 2, 340);
        text("Press p to pause", width / 2, 440);
        text("Good Luck!", width / 2, 540);
        backButton.mousePressed(function () {
            menuButton.show();
            playButton.show();
            backButton.hide();
            gamestate = "title";
        })
    }

    if (gamestate == "intro") {
        addTimeforintro += 1;
        phoneangle += phonedir * 5;
        if (phoneangle >= 30 || phoneangle <= -30) {
            phonedir *= -1;
        }
        if (addTimeforintro < 60) {
            fakebob.visible = false;
            background(0, 0, 0);
            textSize(40);
            fill(255, 215, 0);
            addsome += 1;
            text("Once upon a time", width / 2 + addsome, height / 2);
        }
        if (addTimeforintro > 30 && addTimeforintro < 70) {
            text("In a far far world", width / 2 + addsome + 50, height / 2 + 70);
        }
        if (addTimeforintro >= 60 && addTimeforintro < 1780) {
            fakebob.visible = true;
            push();
            imageMode(CENTER);
            image(bedImg, width/2, height/2, width, height);
            image(phoneImg, width/2 , height / 2, width, height);
            pop();
            
            push();
            textSize(20);
            fill('red');
            strokeWeight(5);
            textAlign(RIGHT, BOTTOM);
            text("Press space to skip ???", width - 10, height - 10);
            pop();

            if (addTimeforintro < 200) {
                fakebob.changeAnimation("standing");
                fakebob.x = ((displayWidth - 100) / 6.7407) * (displayWidth / 1920);
                fakebob.y = ((displayHeight - 100) / 1.4475);
                fakebob._rotation = -90;
            }
            if (addTimeforintro < 180) {
                fill("black");
                textSize(40);
                textAlign(CENTER, CENTER);
                text("Maybe I'll finally get some rest today", width / 2, height / 6);
                if (iteration == 0) {
                    v1.play();
                    iteration = 1;
                }
            }
            if (addTimeforintro > 180 && addTimeforintro < 400) {
                push();
                imageMode(CENTER);
                angleMode(DEGREES);
                translate((displayWidth - 100) / 1.2907, (displayHeight - 100) / 1.5217);
                rotate(phoneangle);
                image(ringImg, 0,0, width / 14.33, height / 26.48);
                pop();
                if (addTimeforintro < 250 && addTimeforintro > 180) {
                    fill("black");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("Ugh, what now!", width / 2, height / 6);
                    if (iteration == 1) {
                        v2.play();
                        iteration = 2;
                        telephone.loop();
                    }
                }
            }
            if (addTimeforintro <= 180 || addTimeforintro >= 1585) {
                push();
                imageMode(CENTER);
                image(ringImg, (displayWidth - 100) / 1.2907, (displayHeight - 100) / 1.5217, width / 14.33, height / 26.48);
                pop();
            }
            if (addTimeforintro > 200 && addTimeforintro < 300) {
                if (fakebob._rotation < 0) {
                    fakebob._rotation += 1;
                }
                if (fakebob.y < height - (fakebob.height / 1.4)) {
                    fakebob.y += 5;
                }
            }
            if (addTimeforintro >= 300 && addTimeforintro < 400) {
                fakebob.changeAnimation("runningright");
                fakebob.x += 10;
            }
            if (addTimeforintro >= 400 && addTimeforintro <= 1585) {
                telephone.stop();
                fakebob.changeAnimation("standing");
                push();
                imageMode(CENTER);
                translate((displayWidth - 100) / 1.3502, (displayHeight - 100) / 1.2628);
                rotate(90);
                image(ringImg, 0, 0, width / 14.33, height / 26.48);
                pop();
                if (addTimeforintro < 470) {
                    fill("black");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("What is it, you ruined my sleep!", width / 2, height / 5);
                    if (iteration == 2) {
                        v3.play();
                        iteration = 3;
                    }
                }
                if (addTimeforintro < 580 && addTimeforintro > 490) {
                    fill("red");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("Sorry sir, it was very important", width / 2, height / 5);
                    if (iteration == 3) {
                        v4.play();
                        iteration = 4;
                    }
                }
                if (addTimeforintro < 710 && addTimeforintro > 600) {
                    fill("red");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("Your supplies for building your castle", width / 2, height / 5);
                    text("are well, stolen!", width / 2, height / 5 + 50);
                    if (iteration == 4) {
                        v5.play();
                        iteration = 5;
                    }
                }
                if (addTimeforintro < 800 && addTimeforintro > 730) {
                    fill("black");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("What! By who!", width / 2, height / 5);
                    if (iteration == 5) {
                        v6.play();
                        iteration = 6;
                    }
                }
                if (addTimeforintro < 880 && addTimeforintro > 820) {
                    fill("red");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("Let me check sir", width / 2, height / 5);
                    if (iteration == 6) {
                        v7.play();
                        iteration = 7;
                    }
                }
                if (addTimeforintro < 1020 && addTimeforintro > 900) {
                    fill("red");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("The witnesses say the person was", width / 2, height / 5);
                    text("the evil Wizard Wigglesworth!", width / 2, height / 5 + 50);
                    if (iteration == 7) {
                        v8.play();
                        iteration = 8;
                    }
                }
                if (addTimeforintro < 1220 && addTimeforintro > 1050) {
                    fill("black");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("Well, since you have shown your incompetence", width / 2, height / 5);
                    text("I guess I will have to retrieve the supplies", width / 2, height / 5 + 50);
                    text("MYSELF!", width / 2, height / 5 + 100);
                    if (iteration == 8) {
                        v9.play();
                        iteration = 9;
                    }
                }
                if (addTimeforintro < 1340 && addTimeforintro > 1240) {
                    fill("red");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("But sir! We've heard Wigglesworth is very dangerous!", width / 2, height / 5);
                    if (iteration == 9) {
                        v10.play();
                        iteration = 10;
                    }
                }
                if (addTimeforintro < 1450 && addTimeforintro > 1360) {
                    fill("black");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("Not for me!", width / 2, height / 5);
                    if (iteration == 10) {
                        v11.play();
                        iteration = 11;
                    }
                }
                if (addTimeforintro < 1540 && addTimeforintro > 1470) {
                    fill("red");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("Well, Be care---", width / 2, height / 5);
                    if (iteration == 11) {
                        v12.play();
                        iteration = 12;
                    }
                }
                if (addTimeforintro < 1580 && addTimeforintro > 1530) {
                    if (addTimeforintro > 1540) {
                        fill("black");
                        textSize(40);
                        textAlign(CENTER, CENTER);
                        text("Yeah, yeah, Bye", width / 2, height / 5);
                    }
                    if (iteration == 12) {
                        v13.play();
                        iteration = 13;
                    }
                }
            }
            if (addTimeforintro > 1590 && addTimeforintro < 1690) {
                if (addTimeforintro > 1400) {
                    fill("black");
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    text("You want something done right,", width / 2, height / 5);
                    text("Do it yourself", width / 2, height / 5 + 50);
                    if (iteration == 13) {
                        v14.play();
                        iteration = 14;
                    }
                }
            }
            if (addTimeforintro > 1700) {
                fakebob.changeAnimation("runningright");
                fakebob.x += 15;
            }
        }
        if (addTimeforintro >= 1780 || (addTimeforintro >= 65 && keyDown("SPACE"))) {
            gamestate = "start";
            for (var i = 0; i < allSound.length; i++) {
                allSound[i].stop();
            }
            fakebob.remove();
        }
    }

    if (gamestate == "start") {
        push();
        pin.visible = true;
        image(world1, 0, 0, width, height + displayHeight / 2.25);

        x1 = ((displayWidth - 100) / 4.58);
        y1 = ((displayHeight - 100) / 1.4384);
        x2 = ((displayWidth - 100) / 3.9308);
        y2 = ((displayHeight - 100) / 1.2793) ;
        x3 = ((displayWidth - 100) / 3.2098);
        y3 = ((displayHeight - 100) / 1.1638) ;
        x4 = ((displayWidth - 100) / 2.6491);
        y4 = ((displayHeight - 100) / 1.1708) ;
        x5 = ((displayWidth - 100) / 2.4528);
        y5 = ((displayHeight - 100) / 1.1316) ;
        x6 = ((displayWidth - 100) / 2.0705);
        y6 = ((displayHeight - 100) / 1.1821) ;
        x7 = ((displayWidth - 100) / 1.8477);
        y7 = ((displayHeight - 100) / 1.3032);
        x8 = ((displayWidth - 100) / 1.5476);
        y8 = ((displayHeight - 100) / 1.4497) ;
        x9 = 1428 * (displayWidth / 1920);
        y9 = 633 * (displayHeight / 1080);
        x10 = 1589 * (displayWidth / 1920);
        y10 = 615 * (displayHeight / 1080);

        bonus1x = (displayWidth - 100) / 2.4897;
        bonus1y = (displayHeight - 100) / 1.3369;

        camx = pin.x;
        camy = pin.y;

        if (level > 0) {
            if (a < 255) {
                a += 5;
            }
            if (level <= 1) {
                fill(0, 0, 0, a);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 215, 0, a);
                stroke(255, 215, 0);
            }
            ellipse1 = ellipse(x1, y1, 10);
        }

        if (level > 1) {
            if (b < 255) {
                b += 5;
            }

            if (level <= 2) {
                fill(0, 0, 0, b);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 215, 0, b);
                stroke(255, 215, 0);
            }
            ellipse2 = ellipse(x2, y2, 10);
            line(x1, y1, x2, y2);
        }
        if (level > 2) {
            if (c < 255) {
                c += 5;
            }

            if (level <= 3) {
                fill(0, 0, 0, c);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 215, 0, c);
                stroke(255, 215, 0);
            }
            ellipse3 = ellipse(x3, y3, 10);
            line(x2, y2, x3, y3);
        }
        if (level > 3) {
            if (d < 255) {
                d += 5;
            }

            if (level <= 4) {
                fill(0, 0, 0, d);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 215, 0, d);
                stroke(255, 215, 0);
            }
            ellipse4 = ellipse(x4, y4, 10);
            line(x3, y3, x4, y4);
        }
        if (level > 4) {
            if (e < 255) {
                e += 1;
            }

            if (level <= 5) {
                fill(0, 0, 0, e);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 215, 0, e);
                stroke(255, 215, 0);
            }
            ellipse5 = ellipse(bonus1x, bonus1y, 10);
            line(x4, y4, bonus1x, bonus1y);
            ellipse6 = ellipse(x5, y5, 10);
            line(x4, y4, x5, y5);
        }
        if (level > 5) {
            if (f < 255) {
                f += 1;
            }

            if (level <= 6) {
                fill(0, 0, 0, f);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 215, 0, f);
                stroke(255, 215, 0);
            }
            ellipse7 = ellipse(x6, y6, 10);
            line(x5, y5, x6, y6);
        }
        if (level > 6) {
            if (g < 255) {
                g += 1;
            }

            if (level <= 7) {
                fill(0, 0, 0, g);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 215, 0, g);
                stroke(255, 215, 0);
            }
            ellipse8 = ellipse(x7, y7, 10);
            line(x6, y6, x7, y7);
        }
        if (level > 7) {
            if (h < 255) {
                h += 1;
            }

            if (level <= 8) {
                fill(0, 0, 0, h);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 215, 0, h);
                stroke(255, 215, 0);
            }
            ellipse8 = ellipse(x8, y8, 10);
            line(x7, y7, x8, y8);
        }
        if (level > 8) {
            if (i < 255) {
                i += 1;
            }

            if (level <= 9) {
                fill(0, 0, 0, i);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 215, 0, i);
                stroke(255, 215, 0);
            }
            ellipse9 = ellipse(x9, y9, 10);
            line(x8, y8, x9, y9);
        }
        if (level > 9) {
            if (j < 255) {
                j+= 1;
            }

            if (level <= 10) {
                fill(0, 0, 0, j);
                stroke(0, 0, 0);
            }
            else {
                fill(255, 215, 0);
                stroke(255, 215, 0);
            }
            ellipse10 = ellipse(x10, y10, 10);
            line(x9, y9, x10, y10);
        }

        /*if (pin.x == x2) {
            levelp = 2;
        }

        if (pin.x == x3) {
            levelp = 3;
        }

        if (pin.x == x1) {
            levelp = 1;
        }*/

        if (level == 5) {
            if (answered1 == false) {
                fill(255, 215, 0);
                rectMode(CENTER);
                rect(pin.x, pin.y - height / 5, width / 4, height / 8, 25);
                fill(0, 0, 0);
                textAlign(CENTER);
                text("Now it's time to decide which path to take", pin.x, pin.y - height / 5);
                text("Press 1 if you want to take a bonus path (RISKIER, but greater REWARD)", pin.x, pin.y - height / 6);
                text("Press 2 if you want to continue on the normal path", pin.x, pin.y - height / 7);
                if (keyDown('1')) {
                    answered1 = true;
                    bonus1 = true;
                    lerpr = true;
                }
                if (keyDown('2')) {
                    answered1 = true;
                    bonus1 = false;
                    lerpr = true;
                }
            }
        }
        if (level == 9) {
            if (answered2 == false) {
                fill(255, 215, 0);
                rectMode(CENTER);
                rect(pin.x, pin.y - height / 5, width / 4, height / 8, 25);
                fill(0, 0, 0);
                textAlign(CENTER, CENTER);
                text("Here is a choice, you must take", pin.x, pin.y - height / 5);
                text("Press 1 if you would use 100 wood to build a path across the channel", pin.x, pin.y - height / 6);
                text("Press 2 if you would pay 10 gold to get ferryied across", pin.x, pin.y - height / 7);
                if (keyDown('1')) {
                    answered2 = true;
                    if (woodS == false) {
                        addWood -= 100;
                    }
                    woodS = true;
                    lerpr = true;
                }
                if (keyDown('2')) {
                    answered2 = true;
                    if (woodS == false) {
                        addGold -= 10;
                    }
                    woodS = true;
                    lerpr = true;
                }
            }
        }

        if (lerpr == true) {
            if (level == 2) {
                pin.x = lerp(pin.x, x2, 0.05);
                pin.y = lerp(pin.y, y2, 0.05);
                levelp = 2;
            }
            if (level == 3) {
                pin.x = lerp(pin.x, x3, 0.05);
                pin.y = lerp(pin.y, y3, 0.05);
                levelp = 3;
            }
            if (level == 4) {
                pin.x = lerp(pin.x, x4, 0.05);
                pin.y = lerp(pin.y, y4, 0.05);
                levelp = 4;
            }
            if (level == 5) {
                if (answered1 == true) {
                    if (bonus1 == true) {
                        pin.x = lerp(pin.x, bonus1x, 0.05);
                        pin.y = lerp(pin.y, bonus1y, 0.05);
                        levelp = 5;
                    } 
                    else {
                        pin.x = lerp(pin.x, x5, 0.05);
                        pin.y = lerp(pin.y, y5, 0.05);
                        levelp = 5;
                    }
                }
            }
            if (level == 6) {
                pin.x = lerp(pin.x, x6, 0.05);
                pin.y = lerp(pin.y, y6, 0.05);
                levelp = 6;
            }
            if (level == 7) {
                pin.x = lerp(pin.x, x7, 0.05);
                pin.y = lerp(pin.y, y7, 0.05);
                levelp = 7;
            }
            if (level == 8) {
                pin.x = lerp(pin.x, x8, 0.05);
                pin.y = lerp(pin.y, y8, 0.05);
                levelp = 8;
            }
            if (level == 9) {
                if (answered2 == true) {
                    pin.x = lerp(pin.x, x9, 0.05);
                    pin.y = lerp(pin.y, y9, 0.05);
                    levelp = 9;
                }
            }
            if (level == 10) {
                pin.x = lerp(pin.x, x10, 0.05);
                pin.y = lerp(pin.y, y10, 0.05);
                levelp = 10;
            }
        }

        camera.position.x = camx;
        camera.position.y = camy;

        if (keyDown("ENTER")) {
            if (pin.x < x1 < pin.x + 10 || pin.x < x2 < pin.x + 10) {
                gamestate = "play";

                if (levelp == 1) {
                    createLevel(["............................................................1........................................................................................................................1",
                                 "2...........................................................2........................................................................................................................2",
                                 "2...........................................................2........................................................................................................................2",
                                 "2..............................................................................................1...2..................................................................484............2",
                                 "2..................................................................................................2....................................................................3............2",
                                 "2...........................................................2..............................1.......2....................................................................3............2",
                                 "2.................................E.......111111111111......2......................................2....................................................................3............2",
                                 "2...........................................................2...........................1..........2..........................................................11........3............2",
                                 "2...........................111111111111....................2......................................2....................................................................3............2",
                                 "2...........................................................2.........................1............2.....................................................111............3............2",
                                 "2.................1111111....................E..............2.........E............................2............E...................................111.................3............2",
                                 "2...........................................................2.................111111...............2....................................................................3............2",
                                 "2.....P.....................................................2......................................2...................................................................567.....W.....2",
                                 "2111111111111111111111111111111111111111111111111111111111112.....1111111111111111111111111111111112......1111111111111.......1111111111111111111111111111.........1111111111111111112"], "Beginner's Cliffs", false, 0, false, 0, bgMusic1);
                }
                if (levelp == 2) {
                    createLevel(["111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                                "2................................................................................................................................1.................................................2",
                                "2................................................................................................................................1.................................................2",
                                "2................................................................................................................................1...................................484...........2",
                                "2................................................??...............??.............E....E.............................??..............1.....................................3...........2",
                                "2........................11.........11......11111111111....1111111111111....1111111111111....1..............111111111111..E......1.....................................3...........2",
                                "2........................11.........11...........2........12................2................2.............12...........1111.....1...............E.....................3...........2",
                                "2................................................2.......1.2................2................2..............2...............1111.1.............11111...................3...........2",
                                "2.............................111................2......1..2................2................2...........1..2..E.................1............1.....1..................3...........2",
                                "2........................1...........1...........2.....1...2......111112....2......111112....2..............21111111.............1...........1.......1.................3...........2",
                                "2.........................1.........1............2....1....2...........2....2...........2....2.........1....2....................1..........1.........1......111.......3...........2",
                                "2..........................1.E...E.1..........E..2..E......2.....E.....2....2......E....2....2....E.........2...E................1.........1...........1...............3...........2",
                                "2......P....................1111111.........11111211111....2111111111112....2111111111112....21111111111....211111111111...E..............1.............1.............567....W.....2",
                                "211111111111111111111111111122222221111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112"], "LockTin's Laughing Mountains", false, 0, false, 0);
                }
                if (levelp == 3) {
                    createLevel(["..............................................E................??.....................E...............................................................................................",
                                 "11111111111111111111111111111..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..111111111111111111111111111111111111111111111111111111111111",
                                 "2...........................2...............................................................................2222222.................................................................2",
                                 "2...........................2...............................................................................2222222.................................................................2",
                                 "2...........................................................................................................2222222...................................................484...........2",
                                 "2.......................................................................................................................................................................3...........2",
                                 "2...........................1.............E.......E.........................................................2222222............................................F........3...........2",
                                 "2...........................2.........1111111111111111......................................................2222222.....................................................3...........2",
                                 "2...........................2...E..............1............................................................2222222.....................................................3...........2",
                                 "2...........................211111111111......1...................111.......1......1......1.......1.........2222222.....................................................3...........2",
                                 "2............................................1......................1.......................................2222222.....................................................3...........2",
                                 "2...........................................1.......................1.......................................2222222.....................................................3...........2",
                                 "2..........................................1........................1.......................................2222222.....................................................3...........2",
                                 "2......P..................................1......??..........??.......1................................................E.................................................567....W.....2",
                                 "211111111111111111111111111111111111111111111111111111111111111111111111111...............................111111111111111......111111111111111111111111111111111111111111111111111112"], "Perilous Pinnacle", false, 0, false, 0);
                }
                if (levelp == 4) {
                    createLevel(["1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                                 "2...................................................................................................................................................................................2",
                                 "2.................................................................................................1.................................................................................2",
                                 "2.........................................................................................1.......2...................................................................484...........2",
                                 "2.................................................................................1.......2.......2............E........................................................3...........2",
                                 "2.........................................................................1.......2.......2.......2.........2111111............................1........................3...........2",
                                 "2................................................................1........2.......2.......2.......2.........2222222............1........................................3...........2",
                                 "2.....................................................1..........2........2.......2.......2.......2.........2222222......V.....2........................................3...........2",
                                 "2............................................1........2..........2........2.......2.......2.......2.........2222222............2............................1...........3...........2",
                                 "2...................................1........2........2..........2........2.......2.......2.......2.........2222222............2........................................3...........2",
                                 "2...........................1.......2........2........2..........2........2.......2.......2.......2.........2222222.....................................................3...........2",
                                 "2....................1......2.......2........2........2..........2........2.......2.......2.......2.........2222222.....................................................3...........2",
                                 "2.....P........1.....2......2.......2........2........2..........2........2.......2.......2.......2....................................................................567....W.....2",
                                 "21111111111111121111121111112.......2........2........2..........2........2.......2.......2.......2.............................................................111111111111111111112"], "Super Summit", false, 0, false, 0);
                }
                if (levelp == 5) {
                    if (bonus1 == true) {
                        createLevel(["............................................................1.......................................................................................................................................................................................................................................................1",
                                     "2...........................................................2.........................................................................................................................................................................E................................................................484..........2",
                                     "2...........................................................2...........................................................................................................2................................................................................................................................3..........2",
                                     "2..............................................................................................1...2..................................................................1.2..........................................................111111................................................................3..........2",
                                     "2..................................................................................................2....................................................................2................................................................................................................................3..........2",
                                     "2...........................................................2..............................1.......2..............................................................1.....2....................................................111.........................................................................3..........2",
                                     "2.................................E.......111111111111......2......................................2....................................................................2...............................................................................................................HH...............3..........2",
                                     "2...........................................................2...........................1..........2..........................................................11........2.................................................1..............................................................................3..........2",
                                     "2...........................111111111111....................2......................................2....................................................................2................................................................................................................................3..........2",
                                     "2.................2.........................................2.........................1............2.....................................................111............2..............................................1..........................1......E.......................VV......................3..........2",
                                     "2.................2111111....................E..............2.......E..............................2.........E......................................111.................2..............................................................................................HH................................3..........2",
                                     "2.................2.........................................2.................111111...............2....................................................................2..............................................................................11111............................................567....G....2",
                                     "2.......P.........2.........................................2......................................2....................................................................2.......E....E.......E.......E........E......................................................................................1111111111111112",
                                     "21111111111111111121111111111111111111111111111111111111111121111111111111111111111111111111111111121111111111111111111.......1111111111111111111111111111.........1111111111111111111111111111111111111111111111111................................................................................................2"], "Greedy For Gold", false, 0, false, 0)
                    }
                    else {
                        createLevel(["21111111111111111111111111111111111111111111111111111111111111111111111111D.........................................................2",
                                     "2.....................................D...................................D...........................................484...........2",
                                     "2.....................................D...................................D.............................................3...........2",
                                     "2.....................................D...................................D.............................................3...........2",
                                     "2.....................................D...................................D.............................................3...........2",
                                     "2.....................................D...................................D.............................................3...........2",
                                     "2.....................................D...................................D.............................................3...........2",
                                     "2.....................................D...................................D.............................................3...........2",
                                     "2.....................................D..................???................D.............................................3...........2",
                                     "2.....................................D...................................D............................................567.....G....2",
                                     "2.....1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112",
                                     "21............................................22.........2",
                                     "2.1......................11...................22.........2",
                                     "2..1..............22..........111.............22.........2",
                                     "2...1.............22...................E......22.........2",
                                     "2....1............22................111111....22.........2",
                                     "2.....1...........22..........................22.........2",
                                     "2......1..........22......V.....H.............22.........2",
                                     "2.......1.........22..........................22.........2",
                                     "2........1........22..H.......................22.........2",
                                     "2.........1.......22......V...................22.........2",
                                     "2..........1111...22..........H...............22.........2",
                                     "2.................22..............V...........22.........2",
                                     "2.................22.................HHH......22.........2",
                                     "2.................22.....................1...............2",
                                     "2..........................................111111........2",
                                     "2...................................................1....2",
                                     "2......................................................112",
                                     "2..................E..........E.........E........E.......2",
                                     "2..........11111111111111111111111111111111111111111111112",
                                     "2.......1................................................2",
                                     "2.....1..................................................2",
                                     "2.......1................................................2",
                                     "2.........11..........................1111...............2",
                                     "2............1.......................1....1..............2",
                                     "2.............................E.....1......1.............2",
                                     "2................1...........1111...........1............2",
                                     "2.....................HH.................................2",
                                     "2.....................................2.........VV.......2",
                                     "2.....................................2..................2",
                                     "2.....................................2......1...........2",
                                     "2........................................................2",
                                     "2......................E..............1111...............2",
                                     "2......................22................................2",
                                     "2......................22......111.......................2",
                                     "2.....................1111...............................2",
                                     "2........................................................2",
                                     "2.................V......................................2",
                                     "2...........H............................................2",
                                     "2........................................................2",
                                     "2.......V................................................2",
                                     "2....................E...................................2",
                                     "2..........1.............................................2",
                                     "2..................11111.................................2",
                                     "2..........................11............................2",
                                     "2...............................1........................2",
                                     "2...................................1....................2",
                                     "2..........................22............................2",
                                     "2..........................22............................2",
                                     "2..........................22...........VVV..............2",
                                     "2..........................22.....HHH....................2",
                                     "2........................................................2",
                                     "2........................111111..........................2",
                                     "2........................................................2",
                                     "2...............111111...................................2",
                                     "2......P.................................................2",
                                     "2111111111111111111111111111111111111111111111111111111112"], "Corindor's Castle", false, 0, false, 0);
                    }
                }
                if (levelp == 6) {
                    createLevel(["111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                                 "1........22..........................22.........................................................22......................................................................................................................2",
                                 "1.P......22..........................22.........................................................22......................................................................................................................2",
                                 "111......22...........1122...........22.........................22..............................22...................1122...............................................................................................2",
                                 "1........22......1......22...........22......................E..22..............................22..................12222...............................................................................................2",
                                 "1........22.............22...........22...................11111122..............................22.................122222...............................................................................................2",
                                 "1......1122.............22...........22.........................22..............................22................1222222...............................................................................................2",
                                 "1........22...1.........22.......111122...........E.............22.......................F......22.............E.12222222..............................................................................484..............2",
                                 "1........22.............22...........22........1111111..........22..............................22..............122222222................................................................................3..............2",
                                 "1........22.............22...........22.........................22..............................22.............1222222222............E.........E.........................................................3..............2",
                                 "1........22......1......221111.......221111.....................22..............................22............12222222222........11111111111111111111....................................................3..............2",
                                 "1........22.............22...........22.........................22..............................22...........122222222222....................................................111111......................3..............2",
                                 "1........22.............22...........22.........E...............22..............................22........E.1222222222222...............................11...............................................3..............2",
                                 "1........22...1.........22.......111122......1111111............22..............................22.........12222222222222...........................................11....................E..............3..............2",
                                 "1........22.............22...........22.........................22..............................22........122222222222222....................................11.......................1111111111.........3..............2",
                                 "1........22.............22...........22..................E......22..............................22.......1222222222222222..........................................................................1.....3..............2",
                                 "1........22......1......221111.......22...............111111111122..............................22......12222222222222222................................................................................3..............2",
                                 "1........22.............22...........22.........................22..............................22.....122222222222222222................................................................................3..............2",
                                 "1.......................22......................................22...??................................1222222222222222222...............................................................................567.....S.......2",
                                 "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112211112222222222222222222............................................................................11111111111111111111"], "Flappy Bird Fever", true, 3, false, 0)
                }
                if (levelp == 7) {
                    createLevel(["1.......................................................................................................................................................................................................................1",
                                 "1.......................................................................................................................................................................................................................1",
                                 "1.......................................................................................................................................................................................................................1",
                                 "1........................................................................................................................................................................................................484............1",
                                 "1.....................................................................F....................................................................................................................................3............1",
                                 "1....................................F...................F...................F...................F...................F......................F.....................F..................F.....................3............1",
                                 "1..........................F...................F...................F...................F...................F........................F...................F...................F...................F..........3............1",
                                 "1...................................F...............................................F..............F.................................F........F.................F..........................................3............1",
                                 "1..........................F.....................F..........F..............F................F..............F....................F................F...........................F......F......................3............1",
                                 "1......................................................................................F...............................F..................F..........F.................F......................F............3............1",
                                 "1..............................................................................................................................................................F...........................................3............1",
                                 "1..............................................................................................2...........................................................................................................3............1",
                                 "1..............................................................................................2...........................................................................................................3............1",
                                 "1.....................................2........................................................2...........................................................................................................3............1",
                                 "1.......P...............2.............2..........................................................................................1........................................................................567.....S.....1",
                                 "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"], "FlyJay Terrors", false, 0, false, 0)
                }
                if (levelp == 8) {
                    createLevel(["1............................................................................................................................................................................................................................................................................................................................................................................................................................................................................1",
                                 "2............................................................................................................................................................................................................................................................................................................................................................................................................................................................................1",
                                 "2.........................................................................................................................................................................................................................................................................................................................................................................................................................................................484................1",
                                 "2...........................................................................................................................................................................................................................................................................................................................................................................................................................................................3................1",
                                 "211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..................3................1",
                                 "2....................................................................................................2...........................................................................................................2.....................................................2...........................................................................................................2.....................................................2..................3................1",
                                 "2....................................................................................................2...........................................................................................................2.....................................................2...........................................................................................................2.....................................................2..................3................1",
                                 "2.........................................................11111111111111111111111111111111111111111112..........11111111111111111111111111111111111111111112..........11111111111111111111111111111111111111111112..........11111111111111111111111111111111111111111112..........11111111111111111111111111111111111111111112..........11111111111111111111111111111111111111111112..........11111111111111111111111111111111111111111112..................3................1",
                                 "2.....11...11.1.1.111..111..1.1.11...11.111................................................................................................................2.....................................................2.....................................................2.....................................................2...........................................................................................................2..................3................1",
                                 "2.....1.1.1.1.1.1.1..1.1..1.1.1.1.1.1.1.1..1...............................................................................................................2.....................................................2.....................................................2.....................................................2...........................................................................................................2..................3................1",
                                 "2.....1..1..1.111.111..111..111.1..1..1.111............11111111111111111111111111111111111111111111111.......11111111111111111111111111111111111111111111112.......11111111111111111111111111111111111111111111112.......11111111111111111111111111111111111111111111112.......11111111111111111111111111111111111111111111112.......11111111111111111111111111111111111111111111112.......11111111111111111111111111111111111111111111112..................3................1",
                                 "2....................................................................................................2.....................................................2.................................................................................................................................................................2.....................................................2........................................................................3................1",
                                 "2..P.................................................................................................2.....................................................2.................................................................................................................................................................2.....................................................2.......................................................................567.......S.......1",
                                 "211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112111111111111111111111111211111111111111111111111111112111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112111111111111111111111111111111111111111111111111111112111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"], "Forestral Maze", true, 20, false, 0);
                }
                if (levelp == 9) {
                    createLevel(["1................................................................................................................................................................................................................................................................................................................................1",
                                 "2................................................................................................................................................................................................................................................................................................................................1",
                                 "2................................................................................................................................................................................................................................................................................................................................1",
                                 "2................................................................................................................................................................................................................................................................................................................................1",
                                 "2................................................................................................................................................................................................................................................................................................................................1",
                                 "2................................................................................................................................................................................................................................................................................................................................1",
                                 "2................................................................................................................................................................................................................................................................................................................................1",
                                 "2................................................................................................................................................................................................................................................................................................................................1",
                                 "2................................................................................................................................................................................................................................................................................................................................1",
                                 "2.......................................................................................................................................................................................................................................................F...........F.................F.....................484..................1",
                                 "2.............................................................................................................................................................................................................................................................F................F..............................3..................1",
                                 "2............................................................................EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE........................................................................................................................................................3..................1",
                                 "2.............................................................................................................................................................................................................................................................................................................3..................1",
                                 "2.................................................E...........................................................................................................................................................................................................................................................3..................1",
                                 "2.....................................E...........E...........................................................................................................................................................................................................................................................3..................1",
                                 "2.........................1...........E.....1.....E...........................................................................................................................................................................................................................................................3..................1",
                                 "2...............E.........E...........1...........E...........................................................................................................................................................................................................................................................3..................1",
                                 "2.P.....E.......1.........1...........E...........E............................................................................................................................??...........??...........??...........??...........??.............................................................................567........S........1",
                                 "2111111111111111211111111121111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"], "Danny's Outpost", false, 0, false, 0);
                }
                if (levelp == 10) {
                    createLevel(["111111111111111111.......................21111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                                 "2.......P........2......12..........2....2...................................................................................22.................................D.....................................2",
                                 "2................2.......2..........2....2...................................................................................22.................................D.....................................2",
                                 "2................21......2..........2....2...................................................................................22.................................D.....................................2",
                                 "2................2.......2..........2....2...................................................................................22.................................D..........................???..........2",
                                 "2........E.......2.......2..........2....2...................................................................................22.................................D.....................................2",
                                 "2........1.......2......12..........2....2..................??........??........??........??.....................................22.................................D.....................................2",
                                 "2................2.......2..........2....2......111111111111111111111111111111111111111111111111111111...........1...........22.................................D.....................................2",
                                 "2................2.......2..........2....2...........................................................2...........2...........22.................................D.....................................2",
                                 "2................21......2..........2....2...........................................................2.........1.2.1.........22.................................D.....................................2",
                                 "2................2.......2..........2....21111.......................................................2..........222..........22..................1.......1111111111111DDD111111111111111111111111111112",
                                 "2............E...2.......2..........2.........1111........E..........................................2...........2...........22...........1..............2...........2...2............................2111111111111111111111111111111111111111111111111111111111111",
                                 "2............1...2.......2..........211111........111111111111111111..............................F..2.......................22..........................2...........2...2........................................................................................2",
                                 "2................2......12..........2...............................1................................2.......................22..........................2...........2...2........................................................................................2",
                                 "2................2.......2..........2................................11..............................2.......................22....1.....................2...........2...2.......................................................................484..............2",
                                 "2...E............2.......2..........2........H.............E...........1.............................2.......................22..........................2...........2...2.........................................................................3..............2",
                                 "2...1............21......2..........2....................11111..........11...........................2.......................22..........................2...........2...2.........................................................................3..............2",
                                 "2................2.......2..........2................................................................2.......................22...........1..............2...........2...2.........................................................................3..............2",
                                 "2................2.......2..........2..............V.................................................2.......................22..........................2...........2...2.........................................................................3..............2",
                                 "2..........E.....2.......2..........2.......................................11111111111111111111111112.............1.........22.....................E....2...........2...2.........................................................................3..............2",
                                 "2..........1.....2......12..........2...............................1.......2................................................22....................111...2...........2...2........................E................................................3..............2",
                                 "2................2.......2..........2.......................................2................................................22..........................2...........2...2.....................1111111.............................................3..............2",
                                 "2................2.......2..........2.......................................2................................................22...............1..........2...........2...2....................1.......1............................................3..............2",
                                 "2................21......2..........2.......................................2............................1...................22..........................2...........2...2...................1.........1...................??......................567.......G.....2",
                                 "2................2.......2......E...2.......................................2................................................22.........HH...............2...........2...2..................1...........11111111111111111111111111111111111111111111111111111111112",
                                 "2...E............2.......211111111112.......................................2................................................22..........................2...........2...2.................1",
                                 "2...1............2..........................................................2................................................22.....E....................2...........2...2................1.",
                                 "2................2..........................................................2.........1......................................22...1111...................2...........2...2...............1..",
                                 "2........E.......21.........................................................2................................................22...........1..............2.....2.....2...2..............1...",
                                 "2........1.......2..........................................................2................................................22................1.........2......2....2...2.............1....",
                                 "2................2.......................................................E..2................................................22..........................2..222222...2...2............1.....",
                                 "2................2.......??................??............................111112................................................22....................1.....2......2....2...2...........1......",
                                 "2................21111111111111111111111111111111111111...............1.....2....1.......................................................................21....2.....2...2..........1.......",
                                 "2................2....................................2..............1......2............................................................................2.1.........2...2.........1........",
                                 "2...E............2..F..F..F..F..F..F..F..F..F..F..F...2.............1.......2................................................11..........................2..1........2...2........1.........",
                                 "2...1............2....................................2............1........2................................................22.................1........2...1.......2...2.......1..........",
                                 "2................2....................................2...........1.........2........1..............................1........22..........................2....1......2...2......1...........",
                                 "2................2....................................2..........1..........2................................................22..........................2.....1.....2...2.....1............",
                                 "2................2....................................2.........1...........2................................................22..............1...........2......1....2...2....1.............",
                                 "2..............................................................1............2..............1..................1..............22..........................2.......1...2...2...1..............",
                                 "2.............................................................1.............2................................................22...........1..............2........1.........1...............",
                                 "2............................................................1..............2.........................1......................22........1.................2...........2.1.2..................",
                                 "21111111111111111111111111111111111111111111111111111111111111111111111111111................................................22.....1....................2...........2...2..................",], "The Final Fight", false, 0, false, 0);
                }
                if (levelp == 11) {
                    gamestate = "castle";
                    draw_grid(80);
                    doneButton.show();
                }
            }
        }
        camera.zoom = 2;
        textSize(20);
        text("Wood: " + woodCount, 10 + (pin.x - width / 4), 20 + (pin.y - height / 4));
        text("Gold: " + goldCount, 150 + (pin.x - width / 4), 20 + (pin.y - height / 4));
        text("Stone: " + stoneCount, 290 + (pin.x - width / 4), 20 + (pin.y - height / 4));
        pop();
    }
    if (gamestate == "play") {
        pin.visible = false;
        map.update();
        if (map.timer < 60) {
            map.showTitle();
        }
        if (map.timer == 60) {
            ptimer = 0;
            camera.zoom = 1;
            camera.position.x = width / 2;
            camera.position.y = height / 2;

            groundGroup = new Group();
            flagpoleGroup = new Group();
            materialGroup = new Group();
            enemyGroup = new Group();
            doorGroup = new Group();
            groundcolGroup = new Group();

            TILESIZE = height / 10;

            map.loadMap();
            if (level != 10) {
                bgMusic1.loop();
            }
            else {
                bgMusic2.loop();
            }
        }
        if (map.timer > 60) {
            warpthingy = bob.x/10;
            warpthingyy = bob.y/5;
            bob.setCollider("rectangle", 0, 0, bob.width - 30, bob.height);
            camera.zoom = 1;
            if ((level != 5 && bonus1 == false)) {
                imageMode(CORNER);
                image(mountainImg, bob.x - 1000 - warpthingy, bob.y - (warpthingyy) - 900, 9600, 1600);
            }
            else {
                imageMode(CORNER);
                image(castleImg, bob.x - 800 - warpthingy, bob.y - warpthingyy - 900, 3160, 3840);
            }
            if (level == 10) {
                imageMode(CORNER);
                image(castleImg, bob.x - 800 - warpthingy, bob.y - warpthingy - 900, 3160, 3840);
            }

            push();
            imageMode(CENTER);
            //image(pauseImg, camera.position.x + width / 2 - 50, camera.position.y - height / 2 + 50)
            pop();

            if (pause == false) {

                ptimer -= 1;

                if ((keyIsPressed == true) && ((key == 'p') || (key == 'P')) && ptimer < 0) {
                    pause = true;
                    ptimer = 0;
                    ptimer += 1;
                }

                groundcheck += 1;
                
                if (groundcheck == 1) {
                    la = bob.y;
                }

                if (keyDown("RIGHT_ARROW")) {
                    if (keyDown("DOWN_ARROW")) {
                        bob.changeAnimation("crouching");
                        if (map.autoscrollerx == true) {
                            if ((bob.x - camera.position.x) > width / 2) {
                                bob.x = camera.position.x + width / 2 - 10;
                            }
                            else {
                                if (bob.x < map.farthest) {
                                    if (keyDown("SHIFT")) {
                                        bob.x += 20;
                                    }
                                    else {
                                        bob.x += 15;
                                    }
                                }
                            }
                        }
                        else {
                            if (bob.x < map.farthest) {
                                if (keyDown("SHIFT")) {
                                    bob.x += 20;
                                }
                                else {
                                    bob.x += 15;
                                }
                            }
                        }
                    }
                    else {
                        bob.changeAnimation("runningright");
                        if (map.autoscrollerx == true) {
                            if ((bob.x - camera.position.x) > width / 2) {
                                bob.x = camera.position.x + width / 2 - 10;
                            }
                            else {
                                if (bob.x < map.farthest) {
                                    if (keyDown("SHIFT")) {
                                        bob.x += 30;
                                    }
                                    else {
                                        bob.x += 20;
                                    }
                                }
                            }
                        }
                        else {
                            if (bob.x < map.farthest) {
                                if (keyDown("SHIFT")) {
                                    bob.x += 30;
                                }
                                else {
                                    bob.x += 20;
                                }
                            }
                        }
                    }
                }
                else if (keyDown("LEFT_ARROW")) {
                    if (keyDown("DOWN_ARROW")) {
                        bob.changeAnimation("crouching2");
                        if (keyDown("SHIFT")) {
                            bob.x -= 20;
                        }
                        else {
                            bob.x -= 15;
                        }
                    }
                    else {
                        bob.changeAnimation("runningleft");
                        if (keyDown("SHIFT")) {
                            bob.x -= 30;
                        }
                        else {
                            bob.x -= 20;
                        }
                    }
                }
                else {
                    bob.changeAnimation("standing");
                }
                /*if(keyWentDown("SPACE")) {
                    bob.velocityY -= 13;
                }*/

                if (map.autoscrollerx == true) {
                    if (bob.x > camera.position.x + width / 4) {
                        x = 10;
                    }
                    if (bob.x < camera.position.x - width / 4) {
                        x = 0;
                    }
                    else {
                        x = 5;
                    }
                    camera.position.x += map.axspeed + x;
                    if (bob.x + 30 + width / 2 < camera.position.x) {
                        gamestate = "start";
                        map.destroy();
                        for (var i = 0; i < allSound.length; i++) {
                            allSound[i].stop();
                        }
                        death.play();
                    }
                }
                else {
                    if (bob.x > width / 2) {
                        camera.position.x = bob.x;
                    }
                    else {
                        camera.position.x = width / 2;
                    }
                }
                
                if (map.autoscrollery == true) {
                    camera.position.y -= map.ayspeed;
                }
                else {
                    camera.position.y = bob.y - height/10;
                }
                //bob.velocityY += 0.8;

                if (bob.collide(groundcolGroup)) {
                    jumpcount = 0;
                    bob.velocityY = 0;
                }
                else if(keyWentDown("SPACE")) {
                    if (jumpcount < 2) {
                        bob.velocityY -= 13;
                        jumpcount += 1;
                    }
                }
                else {
                    bob.velocityY += 0.8;
                }

                bob.collide(groundGroup);


                for (var i = 0; i < map.doors.length; i++) {
                    if (map.doors[i].visible == true && musicloop == 0) {
                        musicloop = 1;
                        bgMusic1.stop();
                        bgMusic2.stop();
                        bossm = "on";
                        bossMusic.loop();
                    } 
                    else if (map.doors[i].visible == false && musicloop == 1) {
                        if (bossm == "on") {
                            bossMusic.stop();
                            if (level != 10) {
                                bgMusic1.loop();
                            }
                            else {
                                bgMusic2.loop();
                            }
                        }
                    }
                }


                if (bob.isTouching(flagpoleGroup)) {
                    bob.x += TILESIZE / 2;
                    for (var i = 0; i < map.poles.length; i++) {
                        var distancetopole = dist(bob.x, bob.y, map.poles[i].x, map.poles[i].y);
                        if (distancetopole < TILESIZE / 1.9) {
                            addscore = (height - map.poles[i].y) / TILESIZE;
                            addWood += addscore + 2;
                            scoreaddtimer = 255;
                            scoreaddx = bob.x;
                            scoreaddy = bob.y;
                        }
                    }
                    if (level == 10) {
                        addWood += 100;
                        addStone += 100;
                        addGold += 100;
                    }
                    gamestate = "end";
                    bgMusic1.stop();
                }

                if (bob.isTouching(enemyGroup)) {
                    tick = 0;
                    deadx = bob.y - (warpthingyy) - 900;
                    gamestate = "dead";
                    bgMusic1.stop();
                    bossMusic.stop();
                    bossm = "off";
                    musicloop = 0;
                    for (var i = 0; i < allSound.length; i++) {
                        allSound[i].stop();
                    }
                    death.play();
                }
                if (bob.y > (map.lowest + (TILESIZE * 10))) {
                    gamestate = "start";
                    for (var i = 0; i < allSound.length; i++) {
                        allSound[i].stop();
                    }
                    death.play();
                    if (level == 1) {
                        pin.x = x1;
                        pin.y = y1;
                    }
                    map.destroy();
                }
                for (var i = 0; i < map.doors.length; i++) {
                    if (map.doors[i].visible == true) {
                        if (level == 5) {
                            textSize(35);
                            fill('red');
                            textAlign(CENTER, CENTER);
                            text("Boss Life: " + map.boss[0].life, camera.position.x + width / 2 - 150, camera.position.y - height / 2 + 100);
                        }
                        if (level == 10) {
                            textSize(35);
                            fill('red');
                            textAlign(CENTER, CENTER);
                            text("Boss Life: " + map.boss2[0].life, camera.position.x + width / 2 - 150, camera.position.y - height / 2 + 100);

                            if (map.boss2[0].timer > 120 && map.boss2[0].timer < 180) {
                                textSize(35);
                                textAlign(CENTER, CENTER);
                            fill("red");
                            text("So you've made it all the way here", bob.x, bob.y - height / 4);
                            }
                            if (map.boss2[0].timer > 180 && map.boss2[0].timer < 240) {
                                textSize(35);
                            fill("red");
                            textAlign(CENTER, CENTER);
                            text("NOW DIE", bob.x, bob.y - height / 4);
                            }
                        }
                    }
                }
            }
            else {
                ptimer += 1;
                if ((keyIsPressed == true) && (key == 'p') && ptimer > 60) {
                    pause = false;
                    ptimer = 60;
                }
                drawSprites();
                rectMode(CENTER);
                bob.velocityY = 0;
                camera.zoom = 1;
                fill(0, 230);
                rect(camera.position.x, camera.position.y, width, height);
                fill(255, 255, 255);
                textAlign(CENTER, CENTER);
                textSize(40);
                text("PAUSE MENU", camera.position.x, camera.position.y - height / 4);
                textSize(35);
                //text("STATS", camera.position.x - width / 4, camera.position.y - height / 6);
                text("Wood: " + woodCount, camera.position.x, camera.position.y - height / 8);
                text("Stone: " + stoneCount, camera.position.x, camera.position.y);
                text("Gold: " + goldCount, camera.position.x, camera.position.y + (height / 8))
                text("Level: " + level, camera.position.x, camera.position.y + ((2 * height) / 8));
                text("Press p to unpause", camera.position.x, camera.position.y + ((3 * height) / 8))
            
            }
        }
    }

    if (gamestate == "dead") {
        tick += 1;
        bossMusic.stop();
        bossm = "off";
        musicloop = 0;
        if (level != 5 && bonus1 == false) {
            imageMode(CORNER);
            image(mountainImg, bob.x - 1000 - warpthingy, deadx, 9600, 1600);
        }
        else {
            imageMode(CORNER);
            image(castleImg, bob.x - 800 - warpthingy, warpthingyy - 900, 3160, 3840);
        }
        if (tick < 100) {
            if (tick == 1) {
                bob.velocityY = 10;
                bob.y -= 100;
            }
            bob.velocityY += 0.9;
            bob.changeAnimation("dead");
            bob.bounceOff(groundGroup);
        }
        else {
            tick = 0;
            gamestate = "start";
            if (level == 1) {
                pin.x = x1;
                pin.y = y1;
            }
            map.destroy();
        }
    }

    if (gamestate == "end") {
        camera.zoom = 1;
        camera.position.x = bob.x;
        camera.position.y = bob.y - height / 10;
        imageMode(CORNER);
        image(mountainImg, bob.x - 1000 - warpthingy, bob.y - (warpthingyy) - 900, 9600, 1600);

        map.update();

        bob.velocityX = 0;
        if (bob.isTouching(groundGroup)) {
            bob.changeAnimation("runningright");
            bob.velocityY = 0;
            bob.velocityX = 10;
        }
        else {
            bob.velocityY = 4;
        }
        if (bob.isTouching(flagpoleGroup)) {
            push();
            textAlign(CENTER, CENTER);
            textSize(40);
            if (scoreaddtimer > 0) {
                scoreaddtimer -= 2;
            }
            fill(255, 0, 0, scoreaddtimer);
            var tempaddscore = addscore + 2;
            text("+"+tempaddscore, scoreaddx - 100, scoreaddy - 100);
            pop();
            bob.changeAnimation("flagpole");
            bob.velocityY = 4;
        }
        else {
            bob.velocityX = 10;
        }

        if (bob.isTouching(materialGroup)) {
            if (map.score == 'W') {
                addWood += 25;
            }
            if (map.score == 'G') {
                addGold += 10;
            }
            if (map.score == 'S') {
                addStone += 25;
            }
            gamestate = "start";
            if (level == 1) {
                pin.x = x1;
                pin.y = y1;
            }
            if (bonus1 == true) {
                bonus1 = false;
            }
            else {
                level += 1;
            }

            if (level == 11) {
                levelp = 11;
            }
            map.destroy();
            if (level != 5) {
                if (level != 9) {
                    lerpr = true;
                    lerpl = false;
                }
            }
            textSize(10);
            fill("red");
            text(addscore, bob.x, bob.y - 100);
        }
    }
    if (gamestate == "castle") {
        background(0);
        if (startdraw == true) {
            imageMode(CENTER);
            if (theendishere == false) {
                image(mountainImg, width / 2, height / 2, displayWidth * 4, displayHeight * 4);
            }
            if (camera.zoom > 0) {
                camera.zoom -= 0.01;
            }
            if (camera.zoom == 0.1) {
            }
            if (camera.zoom < 0.1) {
                theendishere = true;
                starttheclock = false;
                starttheclock2 = false;
            }
        }
        if ((startdraw == false) || (theendishere == true)) {
            camera.zoom = 1;
        }
        shock = false;
        shock2 = false;
        shock3 = false;
        shock4 = false;
        shock5 = false;
        shock6 = false;
        pin.visible = false;
        camera.position.x = width / 2;
        camera.position.y = height / 2;

        doneButton.mousePressed(function () {
            startdraw = true;
            endMusic.loop();
            doneButton.hide();
        })

        for (let i = 0; i < round(cols); i++) {
            for (let j = 0; j < round(rows); j++) {
                x = i * tilesize;
                y = j * tilesize;
                imageMode(CENTER);

                if (theendishere == false) {

                    if (grid[i][j] == 0) {
                        fill(255);
                        if (startdraw == false) {
                            rectMode(CENTER);
                            rect(x, y, tilesize - 2, tilesize - 2);
                        }
                    }
                    if (grid[i][j] == 1) {
                        fill(0);
                        if (startdraw == false) {
                            rectMode(CENTER);
                            rect(x, y, tilesize - 2, tilesize - 2);
                        }
                        image(wbuildImg, x, y, tilesize, tilesize);
                    }
                    if (grid[i][j] == 2) {
                        fill(0);
                        if (startdraw == false) {
                            rectMode(CENTER);
                            rect(x, y, tilesize - 2, tilesize - 2);
                        }
                        image(sbuildImg, x, y, tilesize, tilesize);
                    }
                    if (grid[i][j] == 3) {
                        fill(0);
                        if (startdraw == false) {
                            rectMode(CENTER);
                            rect(x, y, tilesize - 2, tilesize - 2);
                        }
                        image(gbuildImg, x, y, tilesize, tilesize);
                    }
                    
                    textAlign(CENTER);
                    textSize(20);
                    fill("red");
                    text("Press 1 for wood", width / 2, 50);
                    text("Press 2 for stone", width / 2, 100);
                    text("Press 3 for gold", width / 2, 150);
                    text("Wood: " + woodCount, width / 2 - (displayWidth / 9.6), 50);
                    text("Stone: " + stoneCount, width / 2 - (displayWidth / 9.6), 100);
                    text("Gold: " + goldCount, width / 2 - (displayWidth / 9.6), 150);
                    text("Press 4 to remove wood", width / 2 + (displayWidth / 9.6), 50);
                    text("Press 5 to remove stone", width / 2 + (displayWidth / 9.6), 100);
                    text("Press 6 to remove gold", width / 2 + (displayWidth / 9.6), 150);

                    if (keyWentDown("1")) {
                        shock = true;
                    }
                    if (shock == true) {
                        if (woodCount >= 10) {
                            for (let i = 0; i < round(cols); i++) {
                                for (let j = 0; j < round(rows); j++) {
                                    let d = dist(i * tilesize, j * tilesize, mouseX, mouseY);
                                    if (d < (tilesize / 2)) {
                                        if (grid[i][j] == 0) {
                                            grid[i][j] = 1;
                                            addWood -= 10;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (keyWentDown("4")) {
                        shock4 = true;
                    }
                    if (shock4 == true) {
                        for (let i = 0; i < round(cols); i++) {
                            for (let j = 0; j < round(rows); j++) {
                                let d = dist(i * tilesize, j * tilesize, mouseX, mouseY);
                                if (d < (tilesize / 2)) {
                                    if (grid[i][j] == 1) {
                                        grid[i][j] = 0;
                                        addWood += 10;
                                    }
                                }
                            }
                        }
                    }

                    if (keyWentDown("2")) {
                        shock2 = true;
                    }
                    if (shock2 == true) {
                        if (stoneCount >= 10) {
                            for (let i = 0; i < round(cols); i++) {
                                for (let j = 0; j < round(rows); j++) {
                                    let d = dist(i * tilesize, j * tilesize, mouseX, mouseY);
                                    if (d < (tilesize / 2)) {
                                        if (grid[i][j] == 0) {
                                            grid[i][j] = 2;
                                            addStone -= 10;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (keyWentDown("5")) {
                        shock5 = true;
                    }
                    if (shock5 == true) {
                        for (let i = 0; i < round(cols); i++) {
                            for (let j = 0; j < round(rows); j++) {
                                let d = dist(i * tilesize, j * tilesize, mouseX, mouseY);
                                if (d < (tilesize / 2)) {
                                    if (grid[i][j] == 2) {
                                        grid[i][j] = 0;
                                        addStone += 10;
                                    }
                                }
                            }
                        }
                    }

                    if (keyWentDown("3")) {
                        shock3 = true;
                    }
                    if (shock3 == true) {
                        if (goldCount >= 10) {
                            for (let i = 0; i < round(cols); i++) {
                                for (let j = 0; j < round(rows); j++) {
                                    let d = dist(i * tilesize, j * tilesize, mouseX, mouseY);
                                    if (d < (tilesize / 2)) {
                                        if (grid[i][j] == 0) {
                                            grid[i][j] = 3;
                                            addGold -= 10;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (keyWentDown("6")) {
                        shock6 = true;
                    }
                    if (shock6 == true) {
                        for (let i = 0; i < round(cols); i++) {
                            for (let j = 0; j < round(rows); j++) {
                                let d = dist(i * tilesize, j * tilesize, mouseX, mouseY);
                                if (d < (tilesize / 2)) {
                                    if (grid[i][j] == 3) {
                                        grid[i][j] = 0;
                                        addGold += 10;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if (theendishere == true) {
            addendtime += 1;
            textSize(90);
            fill(255, 215, 0);
            textAlign(CENTER, CENTER);
            text("THE END", width / 2, height / 2);
            textSize(30);
            if (addendtime > 100) {
                starttheclock = true;
            }
            if (starttheclock == true) {
                camera.position.y += 1300;
            }
            if (addendtime > 200) {
                starttheclock2 = true;
            }
            if (starttheclock2 == true) {
                camera.position.y += 1300
            }
            text("Artists: Madhuram Sharma", width / 2, height / 2 + 1000);
            text("Programmer: Madhuram Sharma", width / 2, height / 2 + 1200);
            text("Voices: Madhuram Sharma", width / 2, height / 2 + 1400);
            text("Sound Effects: Madhuram Sharma", width / 2, height / 2 + 1600);
            textSize(90);
            text("THANKS FOR PLAYING!", width / 2, height / 2 + 2600);
        }

    }
    if (pause == false) {
        drawSprites();
        if (madvar == 1) {
            fill(192, 192, 192, 200);
            ellipse(bob.x, bob.y, TILESIZE * 2, TILESIZE * 2);
        }
    }
}
/*function mousePressed() {
    console.log("PRESSED");
    for (let i = 0; i < round(cols); i++) {
        for (let j = 0; j < round(rows); j++) {
            let d = dist(i * tilesize, j * tilesize, mouseX, mouseY);
            if (d < (tilesize)) {
                grid[i][j] = 1;
            }
        }
    }
}*/
function Make2dArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function draw_grid (size) {
    tilesize = size * (displayWidth / 1920) * (displayHeight / 1080);
    cols = round(width / tilesize);
    rows = round(height / tilesize);
    grid = Make2dArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
        }
    }
}

function createLevel (array, title, autox, autoxs, autoy, autoys) {
    map = new Map(array, title, autox, autoxs, autoy, autoys);
    if (level == 1) {
        pin.x = x1;
        pin.y = y1;
    }
    if (level == 2) {
        pin.x = x2;
        pin.y = y2;
    }
    if (level == 3) {
        pin.x = x3;
        pin.y = y3;
    }
    if (level == 4) {
        pin.x = x4;
        pin.y = y4;
    }
    if (level == 6) {
        pin.x = x6;
        pin.y = y6;
    }
    if (level == 7) {
        pin.x = x7;
        pin.y = y7;
    }
    if (level == 8) {
        pin.x = x8;
        pin.y = y8;
    }
    if (level == 9) {
        pin.x = x9;
        pin.y = y9;
    }
    if (level == 10) {
        pin.x = x10;
        pin.y = y10;
    }
}