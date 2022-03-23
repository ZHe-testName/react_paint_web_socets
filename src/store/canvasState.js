import {makeAutoObservable} from 'mobx';

class CanvasState {
    canvas = null

    constructor() {
        makeAutoObservable(this);
    }

    //экшн нужен для вызова изменения состояния
    setCanvas(canvas) {
        this.canvas = canvas;
    }
};

export default new CanvasState();