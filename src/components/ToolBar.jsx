import React from 'react';
import '../style/toolbar.scss';

const ToolBar = () => {
    return (
        <div className='toolbar'>
            <button className="toolbar__btn brush"></button>

            <button className="toolbar__btn rect"></button>

            <button className="toolbar__btn circle"></button>

            <button className="toolbar__btn eraser"></button>

            <button className="toolbar__btn line"></button>

            <label className="toolbar__btn palette">
                <input type='color'/>
            </label>

            <button className="toolbar__btn undo"></button>

            <button className="toolbar__btn rendo"></button>

            <button className="toolbar__btn save"></button>
        </div>
    );
};

export default ToolBar ;