import React,{useState,useEffect} from 'react';
import "./Item.css";
import { Icon } from "semantic-ui-react";


const Item = (props) => {
    const { name,icon,link,active ,handleItemClicked,line } = props;
    const [iconSrc,setIconSrc] = useState(null);

    useEffect(() => {
        switch (icon) {
            case "stats-chart":
                setIconSrc("chart bar");
                break;
            case "people":
                setIconSrc("users");
                break;
            case "mic":
                setIconSrc("microphone");
                break;
            case "document":
                setIconSrc("file");
                break;
            case "archeive":
                setIconSrc("archive");
                break;
            case "notif":
                setIconSrc("alarm");
                break;
            case "signal":
                setIconSrc("crosshairs");
                break;
            case "logout":
                setIconSrc("sign-out");
                break;
            default:
                break;
        }
    }, []);

    return (
        <div className={active?"confy_item active":"confy_item"} onClick={()=>handleItemClicked(name)} >
            { line && active && <div className="active_sign"></div>}
            <Icon name={iconSrc} size='large' />
            <a href={link}>{name}</a>
        </div>
    )
}

export default Item
