import React, { ReactNode, CSSProperties } from 'react';
import './assetcard.css'
import Circle from './Circle';

interface CardProps{
    image?: string;
    style?:React.CSSProperties;
}
const AssetCard = ({style,image}:CardProps) => {

    return (
            <div className="card" style={style}>
                <Circle image={image}></Circle>            
            </div>
    )

}

export default AssetCard;