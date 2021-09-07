import React from 'react';
import "./SeetingsCard.css";
import Item from "../Sidebar/Item";

const SeetingsCard = () => {
    const handleItemClicked = ()=>{
        //LOGIC
    }
    return (
        <div className="confy_seeting">
        <Item handleItemClicked={handleItemClicked} name="Supprimer" icon="mic" link="#" />
        <Item handleItemClicked={handleItemClicked} name="Accepter" icon="mic" link="#" />
        <Item handleItemClicked={handleItemClicked} name="Message" icon="mic" link="#" />
        <Item handleItemClicked={handleItemClicked} name="Alert" icon="mic" link="#" />

        </div>
    )
}

export default SeetingsCard
