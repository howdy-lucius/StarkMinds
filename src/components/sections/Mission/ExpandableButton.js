import React from 'react';

const ExpandableButton = (props) => {
    return (
        <div class="mission-container">
            <button>
                {props.title}
            </button>
            <div class="mission-desciption">{props.children}</div>
        </div>

    )
}

export default ExpandableButton;