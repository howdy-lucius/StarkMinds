
import React, { useRef } from 'react';
import useIntersection from '../useIntersection';
import TypeWriter from './TypeWriter';

const WeAre = () => {
    const ref = useRef();
    const inViewPort = useIntersection(ref, '-50px');

    if (inViewPort) {
        console.log('sup')
    }

    return(
        <div className="s-section-we-are section" id="s-section-we-are-section">
            <div className="s-section-we-are-header" ref={ref}>
                WE ARE
            </div>
            <TypeWriter />
            <div className="s-section-we-are-titles-imporant">Innovators.</div>
        </div>
        
    )
}

export default WeAre;