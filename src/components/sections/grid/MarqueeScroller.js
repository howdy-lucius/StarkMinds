import React, { useState, useEffect } from 'react';
import Sayings from './Sayings';

const MarqueeScroller = props => {
    const getSaying = () => Sayings[Math.floor(Math.random()*Sayings.length)];
    const [text, setText] = useState(getSaying());

    useEffect(() => {
        const interval = setInterval(() => {
            setText(getSaying());
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <marquee className={`marq-${props.side}`}>{text}</marquee>
    )
}

export default MarqueeScroller;