import React, { ReactNode, CSSProperties } from 'react';
import './assetcard.css'
import Circle from './Circle';

interface CardProps{
    percentageClass:string;
    percentage:string;
    name:string;
    price:string;
    image?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    style?:React.CSSProperties;
}
const AssetCard = ({style,image,name,price,percentageClass,percentage,image1,image2,image3}:CardProps) => {

    return (
            <div className="card" style={style}>
                <Circle image={image}></Circle>
                <div className="card-name">{name}</div>     
                <div className='rectangle'>
                    <div className='price-text'>{price}</div>
                    <div className={percentageClass}>{percentage}</div>
                </div>     
                <div className="text" >Price</div>      
                <div className='rectangle' style={{top:'55%'}}>
                    <div className='tvl-text'>$60,000</div>
                </div>    
                <div className="text" style={{top:'67%', fontSize:'12px'}}>TVL</div>  
                <div className='sm-rectangle' style={{display:'flex', justifyContent:'center'}}>
                    <div className='sm-circle' style={{margin:'5px', backgroundImage:`url(${image1})`}}></div>
                    <div className='sm-circle' style={{margin:'5px', backgroundImage:`url(${image2})`}}></div>
                    <div className='sm-circle' style={{margin:'5px', backgroundImage:`url(${image3})`}}></div>
                </div>

                
                <div className="text" style={{top:'89%'}}>Popular pairs</div> 
            </div>
    )

}

export default AssetCard;