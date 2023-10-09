import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </div>
    );
};

export default Header;