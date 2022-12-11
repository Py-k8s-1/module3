import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.PNG'
import "./Header.scss"
const Header = () => {
    return (
        <div className='header'>
            <Link to="/">

                <div className='logo'>movies app</div>
            </Link>
            <div className='user-image'>
                <img src={user} alt='user' />
            </div>
            
        </div>
    );
};

export default Header;