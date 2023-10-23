import { Add, EmailSharp } from '@mui/icons-material';
import axios from 'axios';
import React, { useState }  from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
const Signup = () => {






    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [count,setCount]=useState(0);
    const [error,setError]=useState('');
  


    const handleSubmit = (event) => {
      
      event.preventDefault();
      setCount(0);
      const Firstname = event.target.FirstName.value;
      const Lastname = event.target.LastName.value;
      const Password  = event.target.Password.value;
      const Retypepassword  = event.target.Retypepassword.value;
      const  Primaryphonenumber = event.target.PrimaryphoneNumber.value;
      const  Secondaryphonenumber = event.target.SecondaryphoneNumber.value;
      const Email  = event.target.Email.value;
      const Address  = event.target.Address.value;
      const Profession  = event.target.Profession.value;
      const Tagword  = event.target.TagWord.value;
      
      if(Firstname.length <1){
        setError('Enter your First Name');
        setCount(count+1);
        return
      }
      else if(Lastname.length <1){
        setError('Enter your Last Name');
        setCount(count+1);
        return
      }
      else if(Primaryphonenumber.length <1){
        setError('Enter your Phonenumber');
        setCount(count+1);
        return
      }
      else if(!/\S+@\S+\.\S+/.test(Email)){
        setError('Enter valid Email');
        setCount(count+1);
        return
      }
      else if(Profession.length <1){
        setError('Enter your Profession');
        setCount(count+1);
        return
      }
      else if(Tagword.length <1) {
        setError('Enter your Tagword');
        setCount(count+1);
        return
      }
      else if(Password.length <1){
        setError('Enter your Password');
        setCount(count+1);
        return
      }
      else if(!(Retypepassword === Password)){
        setError('Passwords dont match');
        setCount(count+1);
        return
      }

      else{

      }
      axios.post('https://localhost:7106/api/users', {
        Firstname: Firstname,
        Lastname: Lastname,
        Primaryphonenumber: Primaryphonenumber,
        Secondaryphonenumber: Secondaryphonenumber,
        Email:Email,
        Address:Address,
        Profession:Profession,
        Tagword:Tagword
      })
      .then(function (response) {
        console.log(response);
      })

    

      
      event.target.reset();
      navigate('/home');
    };
    return (
        <div>
                   <div className='bg-cyan-100 h-screen p-9'>
            <div className=' place-content-center max-w-[600px] mx-auto ' >


                <div className='bg-white h-full rounded-r-lg'> 
                    <h1 className='text-4xl font-bold text-cyan-500 mt-8 mb-2 pt-5'>Create Account</h1>
                      
                    {
        count === 0 ? <p></p> :   
        
        <div className="alert alert-error w-full max-w-xs mx-auto"><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>{error}</span></div>
      }
                    <div className='mt-8'>
                    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="FirstName"
        name="FirstName"
        placeholder="First Name"
        className="input  mt-1 input-bordered input-info w-full max-w-xs"

      />
      <input
        type="text"
        id="LastName"
        name="LastName"
        placeholder="Last Name"
        className="input mt-1 input-bordered input-info w-full max-w-xs"

      />
         <input
        type="text"
        id="PrimaryphoneNumber"
        name="PrimaryphoneNumber"
        placeholder="Primary Phone Number"
        className="input  mt-1 input-bordered input-info w-full max-w-xs"

      />
      <input
        type="text"
        id="SecondaryphoneNumber"
        name="SecondaryphoneNumber"
        placeholder="Secondary Phone Number"
        className="input  mt-1 input-bordered input-info w-full max-w-xs"

      />
         <input
        type="text"
        id="Email"
        name="Email"
        placeholder="Email"
        className="input  mt-1 input-bordered input-info w-full max-w-xs"

      />
         <input
        type="text"
        id="Address"
        name="Address"
        placeholder="Address"
        className="input  mt-1 input-bordered input-info w-full max-w-xs"

      />
         <input
        type="text"
        id="Profession"
        name="Profession"
        placeholder="Profession"
        className="input  mt-1 input-bordered input-info w-full max-w-xs"

      />
         <input
        type="text"
        id="TagWord"
        name="TagWord"
        placeholder="Tag Word"
        className="input  mt-1 input-bordered input-info w-full max-w-xs"

      />
               <input
        type="password"
        id="Password"
        name="Password"
        placeholder="Password"
        className="input  mt-1 input-bordered input-info w-full max-w-xs"
/>
        <input
        type="password"
        id="Retypepassword"
        name="Retypepassword"
        placeholder="Retype Password"
        className="input  mt-1 input-bordered input-info w-full max-w-xs"

      />
      


      <br />
      <br />
<button  className="btn btn-neutral " type="submit">Submit</button>
     

      <br />
      <br />

    </form>   


                    </div>
                </div>



            </div>
            
        </div>
        </div>
    );
};

export default Signup;