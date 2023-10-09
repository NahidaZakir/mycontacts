import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../User/User';

const Home = () => {
    const [count,setCount] = useState(0);
    return (
        <div className='bg-cyan-100 h-screen'>
            { count? <div></div> :
            <div className="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span >upload contacts from your phone</span>
                <div>
                    <button className="btn btn-sm">Deny</button>

                    <button onClick={()=>setCount(count+1)} className="btn btn-sm btn-primary">Accept</button>
                </div>
            </div>
            }

            {
                count ? <User></User>:<div></div>
            }
        </div>
    );
};

export default Home;