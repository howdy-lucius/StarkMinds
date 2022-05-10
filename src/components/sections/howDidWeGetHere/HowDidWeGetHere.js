import TypeWriterEffect from 'react-typewriter-effect';
import React from 'react';

const HowDidWeGetHere = () => {
    const myRef = document.querySelector('how-did-we-get-here section-spacer');

    return (
        <div className="how-did-we-get-here section-spacer">
            <TypeWriterEffect
                typeSpeed={100}
                scrollArea={myRef}
                text={'...So how did we get here?'}
            />
        </div>
    )

}

export default HowDidWeGetHere;