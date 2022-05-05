import React, { useState } from 'react';
import variables from "../scss/_exports.module.scss";

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