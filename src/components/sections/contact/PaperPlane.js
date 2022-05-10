import React from 'react';
import variables from "../../../scss/_exports.module.scss";

const PaperPlane = props => {
    // The purpose of this component is to display a paper plane svg that is a mailto link
    // the mailto link's body is populated by the Contact textarea
    // regex is used to preserve line breaks

    return(
        <a className="paper-plane" href={"mailto:jlnelsonart@gmail.com?body=" + props.body.replace(/\r\n|\r|\n/g, "%0D%0A")}>
            <svg id="a" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36.75 33">
                <defs>
                    <clipPath id="b">
                        <rect width="36.75" height="33" fill="none" />
                    </clipPath>
                </defs>
                <g clipPath="#b">
                    <path
                        d="M29.76,30.37c-.04,.31-.26,.53-.52,.66s-.57,.09-.83-.09l-10.92-7.21L34.83,3.24l-5.07,27.13Zm-15.51,.66l2.36-5.8,2.88,1.89-5.24,3.91ZM1.84,13.31c.04-.35,.26-.62,.57-.7L31.94,2.58,10.88,19.73,2.23,14.15c-.31-.18-.44-.48-.39-.84Zm13.68,10.02s-.04,.04,0,0c-.04,.04-.04,.09-.04,.09v.04s-.04,.04-.04,.09v.04l-2.62,6.42-.92-8.79L29.5,6.85,15.51,23.34ZM35.74,.83s0-.04,0,0c-.13-.13-.26-.22-.39-.31h-.09c-.66-.35-1.4-.44-2.14-.22L1.88,10.89c-.96,.31-1.66,1.14-1.75,2.15C0,14.06,.48,15.03,1.31,15.6l8.83,5.72,.96,9.28c.09,.92,.66,1.71,1.49,2.11h.04c.35,.18,.7,.22,1.09,.22,.57,0,1.09-.18,1.53-.53l5.81-4.31,6.47,4.26c.44,.31,.92,.44,1.44,.44,.35,0,.7-.09,1.05-.22,.83-.35,1.4-1.06,1.53-1.93L36.62,3.2c.13-.84-.17-1.76-.87-2.37Z"
                        fill={variables['stark-red']} />
                </g>
            </svg>
        </a>
    )
}

export default PaperPlane;