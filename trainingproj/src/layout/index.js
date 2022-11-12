import React from "react";
import { Link } from "react-router-dom";
const Layout=(props)=>{
    console.log(props)
    return (
        <div>
            <header>
                <Link to="/dashboard">DashBoard</Link>
                <Link to="/profile">Profile</Link>

            </header>
            <section>{props.children}</section>
            <footer>@2022</footer>
        </div>
    )

}

export default Layout