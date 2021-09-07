import React from 'react';
import "./FilterItem.css";


const FilterItem = (props) => {
    const { title,active,onClick,key } = props;
    return (
        <div key={key} onClick={onClick} className={active?"confy_filteritem active":"confy_filteritem"}>
            <p>
                {title}
            </p>
        </div>
    )
}

export default FilterItem
