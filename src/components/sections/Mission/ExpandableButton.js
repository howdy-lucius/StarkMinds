import React, { useState } from 'react';

const ExpandableButton = (props) => {
    const [buttonOpen, setButtonOpen] = useState(false);

    return (
        <div class={`mission-container ${buttonOpen && 'container-open'}`} onClick={(e) => {e.preventDefault(); setButtonOpen(!buttonOpen)}}>
            <button>
                {props.title}
            </button>
            <div class="mission-desciption">{props.children}</div>
        </div>

    )
}

export default ExpandableButton;