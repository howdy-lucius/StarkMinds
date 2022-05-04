import React from 'react';

class Palette extends React.Component {
    componentWillMount() {
        const top = Math.floor(Math.random() * 75) + 1;
        const left = Math.floor(Math.random() * 75) + 1;
        this.location = {top: top + '%', left: left + '%'};
    }

    handleHover() {
        console.log("handleHover");
        this.hoverstate = {display: "block"};
    }

    render() {
        return (
            <div class="s-svg-palette" style={this.location}>
                <div class="s-svg-client-name" style={this.hoverstate}>Client Name</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 150.48" onDragOver={this.handleHover()}>
                    <g id="a">
                        <circle cx="60.5" cy="9.5" r="1"  />
                        <circle cx="82.5" cy="3.5" r="1" />
                        <circle cx="105.5" cy="1.5" r="1"  />
                        <circle cx="105.5" cy="1.5" r="1"  />
                        <circle cx="41.5" cy="22.5" r="1"  />
                        <circle cx="43.5" cy="43.5" r="1"  />
                        <circle cx="40.5" cy="64.5" r="1"  />
                        <circle cx="133.5" cy="138.5" r="1"  />
                        <circle cx="19.5" cy="74.5" r="1"  />
                        <circle cx="1.5" cy="87.5" r="1"  />
                        <circle cx="3.5" cy="109.5" r="1"  />
                        <circle cx="20.5" cy="124.5" r="1"  />
                        <circle cx="42.5" cy="132.5" r="1"  />
                        <circle cx="64.5" cy="137.5" r="1"  />
                        <circle cx="87.5" cy="140.5" r="1"  />
                        <circle cx="110.5" cy="140.5" r="1"  />
                        <circle cx="161.5" cy="132.5" r="1"  />
                        <circle cx="185.5" cy="123.5" r="1"  />
                        <circle cx="203.5" cy="108.5" r="1"  />
                        <circle cx="212.5" cy="88.5" r="1"  />
                        <circle cx="213.5" cy="66.5" r="1"  />
                        <circle cx="206.5" cy="44.5" r="1"  />
                        <circle cx="191.5" cy="27.5" r="1"  />
                        <circle cx="172.5" cy="14.5" r="1"  />
                        <circle cx="150.5" cy="7.5" r="1"  />
                        <circle cx="128.5" cy="3.5" r="1"  />
                    </g>
                    <g id="b">
                        <g>
                            <path d="M1.97,111.82s21,40,97,37,103-24,113-56" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="3"/>
                            <path d="M17.97,88.82c.92,5.69,7.29,7.85,12.25,8.57,5.84,.84,11.99-.31,17.03-3.41,1.45-.89,2.83-1.95,3.78-3.36s1.4-3.22,.9-4.84c-.86-2.79-4.05-4.06-6.89-4.74-8.59-2.06-25.29-2.92-27.07,8.93" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M19.38,92.12s.6-6.3,16.6-6.3,14.99,4.76,14.99,4.76" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M96.97,34.82s-15,3-21-11,16-17,23-3-2,14-2,14Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M119.17,23.39s-2.97,10.96,6.92,11.69,11.89,2.73,15.89-2.27-1.22-20.01-11.61-17.51-11.19,8.08-11.19,8.08Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M4.97,94.82s10,22,25,25" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><line x1="35.98" y1="122.82" x2="71.97" y2="129.82" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M182.79,50.6c-.05,.05-.1,.09-.16,.14-1.15,.99-2.58,1.56-4,2.08-5.23,1.92-14.01,4.47-17.21-2-4.45-9-.45-19,10.55-18,6.54,.59,13.86,5.27,13.24,12.62-.16,1.94-.99,3.85-2.42,5.16Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M90.97,127.82s-12-16,8-18,13,17,13,17c0,0-8,11-21,1Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M141.99,120.84s-14.02-7.03-5.02-15.03,23.33-1.83,22.67,6.08-2.63,15.97-17.65,8.94Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M175.68,91.92c-2.87-1.8-5.39-4.72-5.82-8.16-.46-3.61,2.22-6.25,5.11-7.94,7.22-4.21,21.16-2.46,21.98,7.73,.28,3.51-.7,9.64-4.24,11.44-.91,.46-1.95,.6-2.97,.63-4.46,.14-9.56-1.14-13.45-3.34-.2-.11-.4-.23-.6-.36Z" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="3"/>
                        </g>
                    </g>
                </svg>
            </div>
        )
    }
}

export default Palette;