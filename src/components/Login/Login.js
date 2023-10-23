import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [count,setCount]=useState(0);
  const [error,setError]=useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      
      setCount(0);
      const email = event.target.Email.value;
      const password = event.target.Password.value;
    
        if(!/\S+@\S+\.\S+/.test(email)){
          setError('Enter valid Email');
          setCount(count+1);
          return
        }
        if(password.length <1){
          setError('Enter your Password');
          setCount(count+1);
          return
        }


        
        event.target.reset();
        navigate('/home');
    };
    return (
        <div className='bg-cyan-100 h-screen p-9'>

            <div className=' place-content-center  max-w-[600px] mx-auto '>
                <div className='bg-white h-full rounded-l-lg'> 
                    <h1 className='text-4xl font-bold text-cyan-500 mt-8 pt-10 mb-2'>Log in to Mycontacts</h1>
                    
                    
                    {
        count === 0 ? <p></p> :   
        
        <div className="alert alert-error w-full max-w-xs mx-auto"><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>{error}</span></div>
      }
                    <div className='mt-5'>
                    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        id="Email"
        name="Email"
        placeholder="Email"
        className="input input-bordered input-info w-full max-w-xs"

      />

      <br />
      <br />

      <input
        type="password"
        id="Password"
        name="Password"
        placeholder="Password"
        className="input input-bordered input-info w-full max-w-xs"

      />

      <br />
      <br />

<button   className="btn btn-neutral " type="submit">Submit</button>

    

      <br />
      <br />
   
    
    </form>   

                </div>

            </div>
            </div>
        </div>
    );
};

export default Login;