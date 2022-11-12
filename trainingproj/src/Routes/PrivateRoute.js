import React from "react";
import Cookies from "js-cookie";
import { Route,Redirect } from "react-router-dom";
const PrivateRoute=(props)=>{
    const access_token= Cookies.get("token")

    const isAuthenticated = !!access_token

    if (isAuthenticated){

        return <Route {...props}/>
    }else {
        return <Redirect to="/" />
    }
}
export default PrivateRoute