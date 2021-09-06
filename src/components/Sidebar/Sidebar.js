import React,{useState,useEffect} from 'react';
import "./Sidebar.css";
import { Divider } from "semantic-ui-react";

import Logo from "../../assets/icons/logo.png";
import Item from "./Item.js";

const Sidebar = (props) => {
    const [activeItem,setActiveItem] = useState(props.active);
    useEffect(() => {
        setActiveItem(props.active);
    }, [])
    const handleItemClicked = (name)=>{
        setActiveItem(name);
    }
    return (
        <div className="confy_sidebar">
            <div className="row">
            <img src={Logo} width="85" height="40" alt="logo" />
                <div className="items top">
                    <Item handleItemClicked={handleItemClicked} active={activeItem==="Statistique"} name="Statistique" icon="stats-chart" link="/admin/dashboard" />
                    <Item handleItemClicked={handleItemClicked} active={activeItem==="Conferences"}   name="Conferences" icon="mic" link="/admin/conference" />
                    <Item handleItemClicked={handleItemClicked} active={activeItem==="Articles"}  name="Articles" icon="document" link="#" />
                    <Item handleItemClicked={handleItemClicked} active={activeItem==="Utilisateurs"}  name="Utilisateurs" icon="people" link="#" />
                    <Item handleItemClicked={handleItemClicked} active={activeItem==="Archive"}  name="Archive" icon="archeive" link="/admin/archeive" />

                </div>
                <div className="items bottom">
                    <Divider clearing />
                    <Item handleItemClicked={handleItemClicked} active={activeItem==="Notification"}  name="Notification" icon="notif" link="#" />
                    <Item handleItemClicked={handleItemClicked} active={activeItem==="Signaler"}  name="Signaler" icon="signal" link="#" />
                    <Item handleItemClicked={handleItemClicked} active={activeItem==="Déconnecté"} name="Déconnecté" icon="logout" link="#" />

                </div>  
            </div>
        </div>
    )
}

export default Sidebar;
