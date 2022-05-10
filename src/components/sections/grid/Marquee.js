function Marquee() {
    return (
        <div>
            <marquee className="marq-top">This text will scroll from right to left</marquee>
            <marquee className="marq-left">This text will scroll from right to left</marquee>
            <marquee className="marq-right">This text will scroll from right to left</marquee>
            <marquee className="marq-bottom">This text will scroll from right to left</marquee>    
        </div>    
    );
};

export default Marquee;