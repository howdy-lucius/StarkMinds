import TypeWriterEffect from 'react-typewriter-effect';
import React, { useRef } from 'react';

const TypeWrite = () => {
    const myRef = document.querySelector('#s-section-we-are-section')

    return (
        <div className="type-section">
            <TypeWriterEffect
                typeSpeed={100}
                scrollArea={myRef}
                multiText={[
                    'Writers. Artists. Musicians. Engineers. Scientists. Historians. Mathematicians. Economists. Investors. Inventors.',
                    'Innovators.'
                ]}
            />
        </div>
    )

}

export default TypeWrite;