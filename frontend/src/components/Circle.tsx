import React from "react";
import './circle.css'

interface CircleProps{
    image?: string;
}
const Circle = ({image}:CircleProps) => {
    return (
        <div className="circle-container">
            <div className="circle-outer">
                <div className="circle-inner" style={{backgroundImage:`url(${image})`, backgroundSize: 'cover'}}></div>
            </div>
        </div>

    );
}
export default Circle;