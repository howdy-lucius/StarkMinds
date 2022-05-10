import React, { useState } from 'react';

function InnerBar() {
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    }

    return(
        <div className={`bar ${isActive ? 'active' : null}`} onClick={ToggleClass}>
            <div className="inner-bar"></div>
        </div>
    )
}

export default InnerBar;