import React from 'react';
import "./Header.css";

import Picture from "../../assets/icons/man.jpg";

const Header = (props) => {
    const { title } = props;
    return (
        <div className="confy_header">
            <div className="row">
                <h1>
                {title}
                </h1>
                <div className="profile">
                    <div className="picture" style={{  
                        backgroundImage: "url(" + Picture + ")",
                        }} >
                    </div>
                    <p>
                        Jhon Doe
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header
