//данная функция сделает данные наблюдаемыми и заставит реакт 
//перерендывать компоненты когда данные изменятся
import {makeAutoObservable} from 'mobx';

class ToolState {
    tool = null

    constructor() {
        makeAutoObservable(this);
    }

    //экшн нужен для вызова изменения состояния
    setTool(tool) {
        this.tool = tool;
    }
};

export default new ToolState();