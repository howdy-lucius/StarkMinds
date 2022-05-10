import React, { useState } from 'react';
import Individual from './Individual';
import Startups from './Startups';
import Companies from './Companies';
import Industries from './Industries';

const ClientBlock = props => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    function RenderSVG(props) {
        switch(props.svg) {
            case 'Individuals':
                return <Individual/>
            case 'Start-ups & Collaborations':
                return <Startups />
            case 'Established Companies & Recognized Collectives':
                return <Companies />
            case 'Major Industries & NGOs':
                return <Industries />
            default:
                return;
        }
    }

    return (
        <div className="client-block-padding block-50" onClick={(e) => {e.stopPropagation(); setDrawerOpen(!drawerOpen)}}>
            <div className={`client-block ${drawerOpen ? 'open-drawer': null}`}>
                <div className="client-title">{props.title}</div>
                <div className="client-icon">
                    <RenderSVG svg={props.title} />
                </div>
                <div className="client-description" style={{display: `${drawerOpen ? 'block' : 'none'}`}}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ClientBlock;