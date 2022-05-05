
import React, { useRef } from 'react';
import TypeWriterEffect from './TypeWriterEffect';
import Logo from './Logo';

const WeAre = () => {
    return(
        <div className="s-section-we-are section" id="s-section-we-are-section" >
            <Logo rate="1" top="0" left="10%" scale=".5" blur="10px" opacity=".03"/>
            <Logo rate="1.5" top="-40%" left="30%" scale=".5" blur="15px" opacity=".05"/>
            <Logo rate=".1" top="-20%" left="80%" scale="2" blur="5px" opacity=".07"/>
            <Logo rate=".05" right="-20%" scale="4" blur="2px" opacity=".07"/>
            <Logo rate=".01" top="-20%" scale="10" right="0" opaciy=".1"/>
            <div className="s-section-we-are-header">
                WE ARE
            </div>
            <TypeWriterEffect />
        </div>
        
    )
}

export default WeAre;