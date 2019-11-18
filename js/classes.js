class Elemento{
    constructor(id, offY){
        this.id = id;
        this.offsetY = offY;
    }

    getId(){
        return this.id;
    }

    getOffY(){
        return this.offsetY;
    }
}

export { Elemento }
