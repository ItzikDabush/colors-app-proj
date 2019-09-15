import React from 'react'
import {SortableContainer} from 'react-sortable-hoc';
import DragableColorBox from './DragableColorBox';



const DragableColorList = SortableContainer(({ colors, removeColor }) => {
    return (
        <div style={{ height: "100%" }}>
            
            {colors.map((color, i) => (
                <DragableColorBox
                    index={i}
                    key={color.name}
                    color={color.color}
                    name={color.name}
                    handleClick={() => removeColor(color.name)}
                ></DragableColorBox>
            ))}
        </div>
    );
})

export default DragableColorList;