import ExpandableButton from './ExpandableButton';

function MissionSection() {
    return (
        <div className="mission-section section-spacer">
            <ExpandableButton title="MISSION">
            <p>
                Our mission is to discover, support, and develop the brightest minds on our planet into a network of wealth that’s sustainable and adaptable. We are actively building a community of talented, atypical minds working together across continents, disciplines and histories. 
            </p>
            <p>
                We’re forming new paradigms of success that value creativity over resources, and center on human flourishing over corporate interest. We’re developing disruptive economies that can both accelerate and self-sustain, acknowledging models like blockchain, neural nets, ants, and galaxies. Along the way, we’re going to have a whole lot of fun.
            </p>
            </ExpandableButton>
            <ExpandableButton title="VISION">
                <p>
                    We imagine a future built on the flourishing of all people, regardless of identity. 
                </p>
                <p>
                    We anticipate rapid change in all sectors of business, politics, science, health, and culture. Existing power structures will erode quickly as their value systems are undermined by honesty and authenticity. In their place, new paradigms of work can, and will, be centered on human joy, cooperation, and recognition of intersectionality.
                </p>
                <p>
                    We see there is a better way to success and innovation, built on trust and free thought. All are welcome; abandon preconception and walk with us into the collective mind.
                </p>
            </ExpandableButton>
        </div>
    )
}

export default MissionSection;