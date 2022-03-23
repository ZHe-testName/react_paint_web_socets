import Tool from "./Tool"

export default class Brush extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen();
    }

    listen() {
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    }

    mouseUpHandler(e) {
        this.mouseDown = false;
    }

    mouseDownHandler(e) {
        this.mouseDown = true;
        this.ctx.beginPath();

        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;

        //для сохранения картинок канваса
        //так как мы их будем постоянно перерисовывать при рисовании квадрата
        //чтобы не получалось чорт и что
        this.saved = this.canvas.toDataURL();
    }

    mouseMoveHandler(e) {
        if(this.mouseDown) {
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            let width = currentX - this.startX;
            let height = currentY - this.startY;

            this.draw(this.startX, this.startY, width, height);
        };
    }

    draw(x, y, w, h) {
        const img = new Image();
        //сохраняем изображение с канваса
        img.src = this.saved;
        //когда сохраненная картинка загрузится...
        img.onload = () => {
            //удаляем все с холста...
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //и сразу рисуем все что было до появления
            //собития рисования квадрата
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);

            //отрисовываем квадрат заново

            //таким образом мы преррисовываем все при каждом движении мишки
            //для того чтобы наш квадрат всегда был актуальным квадратом
            //а не получалась куча наложеных друг на друга квадратов
            
            this.ctx.beginPath();
            this.ctx.rect(x, y, w, h);

            //заполнение фигуры
            this.ctx.fill();
    
            //обводка фигуры
            this.ctx.stroke();
        };
    }
};