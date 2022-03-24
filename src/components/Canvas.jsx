import React, { useEffect, useRef } from 'react';
import canvasState from '../store/canvasState';
//фукция для наблюдения за канвасом в данном случае
import {observer} from 'mobx-react-lite';
import '../style/canvas.scss';
import toolState from '../store/toolState';
import Brush from '../tools/Brush';

const Canvas = observer(() => {
    const canvasRef = useRef();

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current);

        toolState.setTool(new Brush(canvasRef.current));
    }, []);

    //при нажатии мы делаем снимок текущего канваса
    //и добавляем его в состояние
    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL());
    };

    return (
        <div className='canvas'>
            <canvas 
                ref={canvasRef} 
                width={900} 
                height={550}
                onMouseDown={() => mouseDownHandler()}
            />
        </div>
    );
});

export default Canvas;