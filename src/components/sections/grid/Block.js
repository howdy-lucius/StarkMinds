import React from 'react';
import KnowledgeIcon from './KnowledgeIcon';
import TalentIcon from './TalentIcon';
import FutureIcon from './FutureIcon';

const Block = props => {
    function RenderSVG(props) {
        switch(props.svg) {
            case 'knowledge':
                return <KnowledgeIcon />
            case 'talent':
                return <TalentIcon />
            case 'future':
                return <FutureIcon />
            default:
                return;
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
                <p style={{ color: props.color }}>{props.children}</p>
            </div>
        </div>
    )
}

export default Block;