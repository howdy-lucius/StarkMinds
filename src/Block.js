import React from 'react';
import Spark from './components/Spark';
import Cave from './components/Cave';
import Asterick from './components/Asterick';

const Block = props => {
    function RenderSVG(props) {
        switch(props.svg) {
            case 'spark':
                return <Spark />
            case 'cave':
                return <Cave />
            case 'asterick':
                return <Asterick />
            default:
                return <div>hey</div>
        }
    }
    return (
        <div className="block-100 block-dotted">
            <div className="block block-title block-25">
                {props.num ? <div className="block-number">{props.num}</div> : ''}
                <RenderSVG svg={props.svg} />
                <div className="block-title">{props.title}</div>
            </div>
            <div className="block block-content block-75">
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default Block;