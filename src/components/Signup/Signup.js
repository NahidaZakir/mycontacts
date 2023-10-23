import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const Firstname = event.target.FirstName.value;
      const Lastname = event.target.LastName.value;
      const Password  = event.target.Password.value;
      const  Phonenumber = event.target.PhoneNumber.value;
      const Email  = event.target.Email.value;
      const Address  = event.target.Address.value;
      const Profession  = event.target.Profession.value;
      const Tagword  = event.target.TagWord.value;
      
      setMessage(`Hello ${Firstname} ${Lastname} ${Password} ${Phonenumber} ${Email} ${Address} ${Profession} ${Tagword}!`);
        event.target.reset();
    };
    return (
        <div>
                   <div className='bg-cyan-100 h-screen p-9'>
            <div className=' place-content-center max-w-[600px] mx-auto ' >


                <div className='bg-white h-full rounded-r-lg'> 
                    <h1 className='text-4xl font-bold text-cyan-500 mt-8 mb-2 pt-5'>Create Account</h1>
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
        id="PhoneNumber"
        name="PhoneNumber"
        placeholder="Phone Number"
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
        type="text"
        id="Password"
        name="Password"
        placeholder="Password"
        className="input  mt-1 input-bordered input-info w-full max-w-xs"

      />


      <br />
      <br />
<Link to='/home'>  <button  className="btn btn-neutral " type="submit">Submit</button></Link>
     

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