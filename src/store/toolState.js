//данная функция сделает данные наблюдаемыми и заставит реакт 
//перерендывать компоненты когда данные изменятся
import {makeAutoObservable} from 'mobx';

class ToolState {
    tool = null

    constructor() {
        makeAutoObservable(this);
    }

    //экшны нужены для вызова изменения состояния
    setTool(tool) {
        this.tool = tool;
    }

    setFillColor(color) {
        this.tool.fillStyle = color;
    }

    setStrokeColor(color) {
        this.tool.strokeStyle = color;
    }

    setLineWidth(width) {
        this.tool.lineWidth = width;
    }
};

export default new ToolState();