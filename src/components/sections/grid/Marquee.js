import MarqueeScroller from './MarqueeScroller';

function Marquee() {
    return (
        <div>
            <MarqueeScroller side="top" />
            <MarqueeScroller side="left" />
            <MarqueeScroller side="right" />
            <MarqueeScroller side="bottom" />  
        </div>    
    );
};

export default Marquee;