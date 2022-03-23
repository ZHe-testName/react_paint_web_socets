import React from 'react';
import toolState from '../store/toolState';
import '../style/toolbar.scss';

const SettingsBar = () => {
    return (
        <div className='settings-bar'>
            <label htmlFor='line-width'>
                Толщина линии
            </label>

            <input 
                id='line-width'
                type="number"
                defaultValue={1}
                min={1}
                max={40}
                style={{margin: '0px 10px'}}
                onChange={e => toolState.setLineWidth(e.target.value)}
            />

            <label htmlFor="stroke-color">
                Цвет обводки
            </label>

            <input 
                id='stroke-color'
                type="color" 
                onChange={e => toolState.setStrokeColor(e.target.value)}
                style={{margin: '0px 10px'}}
            />
        </div>
    );
};

export default SettingsBar;