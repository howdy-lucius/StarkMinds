import ExpandableButton from './ExpandableButton';

function MissionSection() {
    return (
        <div className="client-section section-spacer">
            <ExpandableButton title="MISSION">
                Our mission is to kick ass and take back the power.
            </ExpandableButton>
            <ExpandableButton title="VISION">
                Our vision is 20/20 baby.
            </ExpandableButton>
        </div>
    )
}

export default MissionSection;