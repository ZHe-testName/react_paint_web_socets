import Brush from "./Brush";

export default class Eriser extends Brush {
    // eslint-disable-next-line no-useless-constructor
    constructor(canvas) {
        super(canvas);
    }

    draw(x, y) {
        this.ctx.lineTo(x, y);
        this.ctx.strokeStyle = '#FFFFFF';
        this.ctx.stroke();
    }
};