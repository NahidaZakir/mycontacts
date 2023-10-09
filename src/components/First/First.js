import React from 'react';
import { Link } from 'react-router-dom';
const First = () => {
    return (
        <div className='bg-cyan-50 h-screen m-0'> 
<div><h1 className='text-6xl text-cyan-500 m-10'>Welcome to MyContacts</h1> </div>

        <div className='flex justify-center '>
        <div className='mt-2 mr-10'>
                                <Link to='/login'><button className='shadow bg-cyan-600 text-white font-semibold text-xl w-48 h-10 rounded-3xl'>LOGIN</button></Link>
                                
                            </div>

                            <div className='mt-2'>
                                <Link to='/signup'><button className='shadow bg-cyan-600 text-white font-semibold text-xl w-48 h-10 rounded-3xl'>SIGN UP</button></Link>
                                
                            </div>
        </div>
          
        </div>
    );
};

export default First;