import React, { useEffect, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import axios from 'axios';
const User = () => {
const [post, setPosts]=useState([]);
  useEffect(()=>{

    axios.get('https://localhost:7106/api/users').then((res) => {
      setPosts(res.data);
  });
  }
    
    ,[]);
  

    return (
        <div>
            <div className="overflow-x-auto">


                <div className='flex flex-row-reverse'>
                <div className='m-10'>

                    <Link to='/connections'><button className='shadow   bg-cyan-600 text-white font-semibold text-xl w-48 h-10 '>Connections</button></Link>                  
</div>

<div className='m-10'>
                    <Link to='/requests'><button className='shadow  bg-cyan-600 text-white font-semibold text-xl w-48 h-10 '>Requests</button></Link>                  
</div> 

                </div>

                <div>

                </div>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        
        </th>
        <th>Name</th>
        <th>Profession</th>
        <th>Phone Number</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>01823567264</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
           
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>823649273694</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
           
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>456983692</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
           
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>6327469283</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    
  </table>

  <div className='flex justify-center'>


  <div className='m-5'>
                    <Link to='/add'><button className='shadow border border-white border-2 bg-cyan-600 text-white font-semibold text-xl w-48 h-10 rounded-3xl'>Add People</button></Link>                  
</div>

             <div className='m-5'>
                    <Link to='/add'><button className='shadow border border-white border-2 bg-cyan-600 text-white font-semibold text-xl w-48 h-10 rounded-3xl'>Remove People</button></Link>                  
</div>
<div className='m-5'>
                    <Link to='/add'><button className='shadow border border-white border-2 bg-cyan-600 text-white font-semibold text-xl w-48 h-10 rounded-3xl'>Share Contact</button></Link>                  
</div>        
  </div>
</div>
        </div>
    );
};

export default User;