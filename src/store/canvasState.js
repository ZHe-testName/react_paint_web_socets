import {makeAutoObservable} from 'mobx';

class CanvasState {
    canvas = null

    //массивы для хранения отмененых и возвращенных действий
    undoList = []
    rendoList = []

    constructor() {
        makeAutoObservable(this);
    }

    //экшн нужен для вызова изменения состояния
    setCanvas(canvas) {
        this.canvas = canvas;
    }

    pushToUndo(data) {
        this.undoList.push(data);
    }

    pushToRendo(data) {
        this.rendoList.push(data);
    }

    undo() {
        let ctx = this.canvas.getContext('2d');

        //еслти чтото есть...
        if(this.undoList.length > 0) {
            //забираем снимок
            let dataUrl = this.undoList.pop();

            //после отмены нам нужно сохранить это действие
            //для того чтобы вернуть его в случае чего
            this.rendoList.push(this.canvas.toDataURL());

            let image = new Image();
            image.src = dataUrl;
            image.onload = () => {
                //вытираем канвас и отрисовываем снимок на канвас
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
            };

            return;
        };

        //если пусто то просто удаляем все с канваса 
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    rendo() {
        let ctx = this.canvas.getContext('2d');
        
        if(this.rendoList.length > 0) {
            //забираем снимок
            let dataUrl = this.rendoList.pop();

            //после отмены нам нужно сохранить текущее сосотяние канваса
            this.undoList.push(this.canvas.toDataURL());

            let image = new Image();
            image.src = dataUrl;
            image.onload = () => {
                //вытираем канвас и отрисовываем снимок на канвас
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
            };
        };
    }
};

export default new CanvasState();