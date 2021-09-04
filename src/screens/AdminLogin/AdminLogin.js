import React, { useState, useEffect } from 'react';
import { Container,Form,Button,Message } from "semantic-ui-react";
import { useHistory } from "react-router";
import axios from "axios";

import "./AdminLogin.css";
import Logo from "../../assets/icons/logo.png"

const AdminLogin = ()=>{
    const history = useHistory();
    const [error, seterror] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setISLoading] = useState(false);

    useEffect(()=>{

    },[]);

    const handleChangeInput = (e)=>{
        if (error) seterror(false);
        let id = e.currentTarget.id;
        switch (id) {
            case "email":
              setEmail(e.currentTarget.value);
              break;
            case "password":
              setPassword(e.currentTarget.value);
              break;
            default:
              break;
          }
    }

    //? LOGIC OF LOGIN FUNC
    const Login = () => {

    };

    return (
        <div className="admin_login">
            <Container> 
            <img src={Logo} width="120" height="60" alt="logo" />
            <Form error={error} className="_margin_vertical_md">
            <div className="centered title">
                <p>Panneau De Contrôle Administrateur</p>
                </div>
                <Form.Input
                error={error}
                id="email"
                onChange={handleChangeInput}
                placeholder="Email"
                icon="user"
                iconPosition="left"
                type="text"
                size="large"
                className="_margin_vertical_sm small"
                value={email}
                />
                <Form.Input
                error={error}
                id="password"
                onChange={handleChangeInput}
                placeholder="Mot de passe"
                icon="lock"
                iconPosition="left"
                type="password"
                size="large"
                className="_margin_vertical_sm small"
                value={password}
                />
                <div className="righted">
                    <span>Mot de passe oublier ? <a href="/forget_password">Cliquez-ici</a></span>
                </div>
                <div className="centered">
                <Button
                loading={isLoading}
                onClick={Login}
                className="button_primary _margin_vertical_md"
                type="submit"
                >
                S'identifier
                </Button>
                </div>
            </Form>
            </Container>
        </div>
    )
}

export default AdminLogin;
