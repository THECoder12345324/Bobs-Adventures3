class Door {
    constructor (x, y, img, scl) {
        this.x = x;
        this.y = y;
        this.visible = false;
        this.sprite = createSprite(this.x, this.y);
        this.sprite.scale = scl;
        this.sprite.addImage(img);
        doorGroup.add(this.sprite);
    }
    display () {
        if (this.visible == false) {
            this.sprite.visible = false;
        }
        else {
            this.sprite.visible = true;
            bob.collide(this.sprite);
        }
    }
}