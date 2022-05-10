import React from 'react';
import variables from "../../../scss/_exports.module.scss";

const DrawingLogo = props => {
    const activeColor = props.activeClick > 7 ? variables['stark-red']: variables['stark-dark']; 

    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410.32 294.93" className="puzzle">
            <g id="a">
                <g>
                    <path id="b"  style={{ opacity: `${props.activeClick > 7 ? '100': '0'}`, display: `${props.blowUp ? 'none': 'block'}`}} fill={activeColor} stroke={activeColor}
                        d="M318.18,268.26c5.03,5.2,5.72,9.66,2.26,16.06-1.49,2.75-6.49,6.93-6.49,6.93,0,0-12,11-26-5,0,0-18.82-20.3-29-31,9.73-5.66,18.62-12.59,26.45-20.57l18,18.47c4.9,5.06,9.87,10.05,14.78,15.11Z" />
                    <path id="c" style={{ opacity: `${props.activeClick > 6 ? '100': '0'}`}} fill={activeColor} stroke={ props.activeClick > 7 ? variables['stark-red']: variables['stark-dark']}
                        d="M65.45,3.53l50.49,48.63c-.79,.66-1.57,1.33-2.34,2.02-8.67,7.71-16.26,16.61-22.51,26.45-3.5-3.79-9.03-9.81-12.58-13.54-9.24-9.7-18.52-19.37-27.82-29.01-3.25-3.37-6.43-6.83-9.95-9.89-3.94-3.43-4.83-7.47-3.44-12.22C39.65,7.91,49.33,.25,57.15,0c3.37-.11,5.97,1.07,8.3,3.52Z" />
                    <path id="d" style={{ opacity: `${props.activeClick > 5 ? '100': '0'}`}} fill={activeColor} stroke={activeColor}
                        d="M410.31,30.39c.16,4.15-1.39,7.53-4.88,9.8-8.38,5.46-16.73,10.97-25.24,16.21-11.71,7.21-55.62,33.3-69.35,41.51-5.09-11.73-11.91-22.52-20.17-32.05,11.02-6.62,18-10.82,18.97-11.41,9.89-5.99,19.79-11.97,29.73-17.89,13.73-8.2,27.46-16.38,41.27-24.45,2.75-1.61,5.74-2.89,8.75-3.96,3.42-1.22,6.76-.56,9.61,1.7,6.6,5.26,10.97,11.81,11.31,20.54Z" />
                    <path id="e" style={{ opacity: `${props.activeClick > 5 ? '100': '0'}`}} fill={activeColor} stroke={activeColor}
                        d="M256.48,86.42c8.99,8.83,16.08,19.7,20.49,32.02-38.19,23.18-101.49,61.63-143.44,87.11-8.71-9.39-15.39-20.81-19.2-33.65,39.76-23.91,99.26-59.69,142.15-85.48Z" />
                    <path id="f" style={{ opacity: `${props.activeClick > 4 ? '100': '0'}`}} fill={activeColor} stroke={activeColor}
                        d="M99.7,226.11c-5.33,3.23-8.42,5.1-8.56,5.19-13.3,8.07-26.59,16.19-39.91,24.23-7.97,4.8-16.02,9.45-24,14.22-5.33,3.2-10.51,2.94-15.27-.93C5.03,263.19,.14,256.28,0,246.93c-.06-4.32,1.87-7.66,5.66-9.91,13.76-8.16,27.48-16.39,41.24-24.55,8.35-4.96,16.63-10.09,25.01-15.02,.61-.37,3.5-2.12,8.22-4.96,4.75,12.27,11.4,23.59,19.57,33.62Z" />
                    <path id="g" style={{ opacity: `${props.activeClick > 3 ? '100': '0'}`}} fill={activeColor} stroke={activeColor}
                        d="M321.01,149.66c-.58,33.02-14,62.89-35.47,84.87-.05,.05-.1,.1-.14,.15-7.83,7.98-16.72,14.91-26.45,20.57-18.39,10.69-39.76,16.81-62.57,16.81-39,0-73.82-17.91-96.68-45.95-8.17-10.03-14.82-21.35-19.57-33.62-5.43-13.98-8.41-29.19-8.41-45.09,0-.6,0-1.19,.02-1.79,.2,4.02,2.07,21.14,19.71,21.14,16.1,0,18.87-15.67,19.33-21.79-.14,4.97,.16,10.02,.92,15.11,.61,4.06,1.49,8.01,2.63,11.83,3.81,12.84,10.49,24.26,19.2,33.65,18.59,20.06,46.44,30.88,75.52,26.53,42.05-6.3,72.35-42.16,72.95-83.33h.45c0,21,19,19.47,19,19.47,0,0,18.76-.97,19.56-18.56Z" />
                    <path id="h" style={{ opacity: `${props.activeClick > 2 ? '100': '0'}`}} fill={activeColor} stroke={activeColor}
                        d="M310.84,97.91c6.56,15.17,10.2,31.91,10.2,49.49,0,.76-.01,1.51-.03,2.26-.8,17.59-19.56,18.56-19.56,18.56,0,0-19,1.53-19-19.47h-.45c.07-4.62-.23-9.3-.94-14.02-.85-5.66-2.23-11.11-4.09-16.29-4.41-12.32-11.5-23.19-20.49-32.02-15.67-15.44-37.11-24.68-60.1-24.65,0,0,16.35-1.71,16.71-19.36,.36-17.66-16.71-19.67-16.71-19.67,37.67,0,71.44,16.71,94.29,43.12,8.26,9.53,15.08,20.32,20.17,32.05Z" />
                    <path id="i" id="phase_6" style={{ opacity: `${props.activeClick > 1 ? '100': '0'}`}} stroke={activeColor} fill={activeColor}
                        d="M91.09,80.63c6.25-9.84,13.84-18.74,22.51-26.45,.77-.69,1.55-1.36,2.34-2.02,21.72-18.36,49.78-29.42,80.44-29.42,0,0,17.07,2.01,16.71,19.67-.36,17.65-16.71,19.36-16.71,19.36-4.18,0-8.42,.32-12.67,.95-40.9,6.13-70.69,40.23-72.83,79.98-.01,.02-.01,.04,0,.06-.05,.73-.08,1.46-.1,2.2-.46,6.12-3.23,21.79-19.33,21.79-17.64,0-19.51-17.12-19.71-21.14-.01-.03-.01-.05,0-.08,.34-23.86,7.39-46.09,19.35-64.9Z" />
                </g>
            </g>
            <g id="indication" style={{ opacity: `${(props.activeClick < 1 && !props.blowUp) ? '100': '0'}`,  transform: `translate(${props.blowUp ? '-200%, 0' : '0,0'})`}}>
                <circle cx="91.87" cy="147.03" r="13.95" fill={(props.activeClick > 7 && props.activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => props.determineClick(1)} onMouseOver={() => props.determineClick(1)} />
            </g>
            <g id="j" style={{ transform: `translate(${props.blowUp ? '-200%, 0' : '0,0'})`}}>
                <circle cx="91.87" cy="147.03" r="13.95"fill={(props.activeClick > 7 && props.activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => props.determineClick(1)} onMouseOver={() => props.determineClick(1)} />
            </g>
            <g id="k" style={{ transform: `translate(${props.blowUp ? '0, -200%' : '0,0'})`}}>
                <circle cx="195.58" cy="41.61" r="13.95"fill={(props.activeClick > 7 && props.activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => props.determineClick(2)} onMouseOver={() => props.determineClick(2)} />
            </g>
            <g id="l" style={{ transform: `translate(${props.blowUp ? '200%, 0' : '0,0'})`}}>
                <circle cx="300.58" cy="148.61" r="13.95"fill={(props.activeClick > 7 && props.activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => props.determineClick(3)} onMouseOver={() => props.determineClick(3)} />
            </g>
            <g id="m" style={{ transform: `translate(${props.blowUp ? '0, 200%' : '0,0'})`}}>
                <circle cx="195.58" cy="252.1" r="13.95"fill={(props.activeClick > 7 && props.activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => props.determineClick(4)} onMouseOver={() => props.determineClick(4)} />
            </g>
            <g id="n" style={{ opacity: `${props.activeClick > 3 ? '100': '0'}`,  transform: `translate(${props.blowUp ? '-200%, -200%' : '0,0'})`}}>
                <circle cx="21.58" cy="249.1" r="13.95"fill={(props.activeClick > 7 && props.activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => props.determineClick(5)} onMouseOver={() => props.determineClick(5)} />
            </g>
            <g id="o" style={{ opacity: `${props.activeClick > 3 ? '100': '0'}`, transform: `translate(${props.blowUp ? '200%, 200%' : '0,0'})`}}>
                <circle cx="390.58" cy="27.57" r="13.95"fill={(props.activeClick > 7 && props.activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => props.determineClick(6)} onMouseOver={() => props.determineClick(6)} />
            </g>
            <g id="p" style={{ opacity: `${props.activeClick > 5 ? '100': '0'}`, transform: `translate(${props.blowUp ? '-200%, 200%' : '0,0'})`}}>
                <circle cx="57.58" cy="20.03" r="13.95"fill={(props.activeClick > 7 && props.activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => props.determineClick(7)} onMouseOver={() => props.determineClick(7)} />
            </g>
            <g id="q" style={{ opacity: `${props.activeClick > 5 ? '100': '0'}`, transform: `translate(${props.blowUp ? '200%, -200%' : '0,0'})`}}>>
                <circle cx="302.58" cy="276.03" r="13.95"fill={(props.activeClick > 7 && props.activeClick !== 8) ? variables['stark-dark'] : variables['stark-red']} onClick={() => props.determineClick(8)} onMouseOver={() => props.determineClick(8)} />
            </g>
        </svg>
    )
}

export default DrawingLogo;