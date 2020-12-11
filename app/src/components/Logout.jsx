import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import UserController from "../controller/UserController";
import { withCookies } from 'react-cookie';
import Context from "../context/Context";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Col, Container } from "reactstrap";
const Logout = (props) => {
    const { cookies } = props;
    const context = useContext(Context);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        let isSubscribed = true
        UserController.logout(cookies.get('token'))
        .then(data => {         
            cookies.remove('token');
            context.setToken('');
        })
        .then(() => {if(isSubscribed) setLoading(false)})
        .catch(error => {
            setLoading(false);       
            console.log(error);     
        })
        return () => isSubscribed = false;
    },[]);
    
    if(loading){
        return(
            <Container fluid className="mt-5 justify-content-center d-flex pt-5">
                <Col sm={9}>
                <PacmanLoader
                        size={75}
                        color={"#ff0080"}
                        />
                </Col>
            </Container>        
        );
    }
    
    return <Redirect to="/"/>;
}

export default withCookies(Logout);