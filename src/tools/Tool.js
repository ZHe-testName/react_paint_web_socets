export default class Tool {
    constructor(canvas) {
        this.canvas = canvas;
        //объект канваса который позволяет взаимодействовать
        //с ним и рисовать, работать с синиями и тп...
        //нужно указать 2d так как он может работать с 3d объектами
        this.ctx = canvas.getContext('2d');
        this.destroyEvents()
    }

    set fillStyle(color) {
        this.ctx.fillStyle = color;
    }

    set strokeStyle(color) {
        this.ctx.strokeStyle = color;
    }

    set lineWidth(width) {
        this.ctx.lineWidth = width;
    }

    //метод нужен для того чтобы удалять слушатели с обного инструмента
    //при выборе другого иначе они будут там висеть постоянно
    destroyEvents() {
        this.canvas.onmouseup = null;
        this.canvas.onmousedown = null;
        this.canvas.onmousemove = null;
    }
};