import React from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';
import Circle from '../tools/Circle'
import '../style/toolbar.scss';
import Eriser from '../tools/Eriser';
import Line from '../tools/Line';

const ToolBar = () => {
    const changeColor = e => {
        toolState.setFillColor(e.target.value);
        toolState.setStrokeColor(e.target.value);
    };

    return (
        <div className='toolbar'>
            <button 
                className="toolbar__btn brush"
                onClick={() => toolState.setTool(new Brush(canvasState.canvas))}></button>

            <button 
                className="toolbar__btn rect"
                onClick={() => toolState.setTool(new Rect(canvasState.canvas))}></button>

            <button 
                className="toolbar__btn circle"
                onClick={() => toolState.setTool(new Circle(canvasState.canvas))}></button>

            <button 
                className="toolbar__btn eraser"
                onClick={() => toolState.setTool(new Eriser(canvasState.canvas))}></button>

            <button 
                className="toolbar__btn line"
                onClick={() => toolState.setTool(new Line(canvasState.canvas))}></button>

            <label className="toolbar__btn palette">
                <input 
                    onChange={e => changeColor(e)}
                    type='color'
                />
            </label>

            <button className="toolbar__btn undo"></button>

            <button className="toolbar__btn rendo"></button>

            <button className="toolbar__btn save"></button>
        </div>
    );
};

export default ToolBar ;