import React from 'react';

import { Outlet } from 'react-router-dom';
import First from '../components/First/First';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;