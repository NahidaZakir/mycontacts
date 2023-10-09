import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-cyan-100 h-screen p-9'>
            <div className='grid grid-cols-2 place-content-center '>
                <div className='bg-white h-full rounded-l-lg'> 
                    <h1 className='text-4xl font-bold text-cyan-500 mt-8 mb-2'>Sign in to Mycontacts</h1>
                    <div className='flex justify-center'>
                        <div className='border-2 border-cyan-500 rounded-full h-12 w-12 m-2'></div>
                        <div className='border-2 border-cyan-500 rounded-full h-12 w-12 m-2'></div>
                        <div className='border-2 border-cyan-500 rounded-full h-12 w-12 m-2'></div>
                    </div>
                    <p className='text-slate-400'>or use your email account</p>

                    <div className='mt-8'>
                        <div>
                            <label for='email'></label>
                            <input className='shadow  bg-cyan-50 w-80  h-10' placeholder='Email' type='email' name='email'></input>
                            <label for='password'></label>
                            <br></br>
                            <input className='shadow  bg-cyan-50 w-80 mt-4 h-10 ' placeholder='Password' type='password' name='password'></input>
                        </div>
                        <div className='mt-4 mb-4 underline text-xl'>
                            <div>
                                <a><h1>Forgot your password?</h1></a>
                            </div>
                            <div className='mt-4'>
                                <Link to='/home'> <button className='shadow bg-cyan-600 text-white font-semibold text-xl w-48 h-10 rounded-3xl'>SIGN IN</button></Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-cyan-500 h-full rounded-r-lg'>
                    <h1 className='text-6xl text-white font-bold mt-8'>Hello, Friend!</h1>
                    <h2 className='text-white mt-3'>Enter your personal details<br></br> and start journey with us</h2>
                    <div className='mt-5'>
                    <Link to='/signup'><button className='shadow border border-white border-2 text-white font-semibold text-xl w-48 h-10 rounded-3xl'>SIGN UP</button></Link>
                        
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default Login;