
import React, { useState, useEffect } from 'react';

const Winky = props => {
    const [wink, setWink] = useState(false);

    const handleScroll = () => setWink(!wink);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <h2>Yeah, You're Ready {wink ? ':)' : '0'}</h2>
    )
}

export default Winky;