import React, { useRef } from 'react';
import useIntersection from '../useIntersection';

const TypeWriter = () => {
    const ref = useRef();
    const inViewPort = useIntersection(ref, '-50px');

    var i = 0;
    var txt = "Writers. Artists. Musicians. Engineers. Scientists. Historians. Mathematicians. Economists. Investors. Inventors.";
    var speed = 50;
    function typeWriter() {
    if ( i < txt.length ) {
        document.getElementById('type-section').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }

    
    if (inViewPort) {
        typeWriter();
    }

    return(
        <div ref={ref} id="type-section"></div>
    )
}

export default TypeWriter;