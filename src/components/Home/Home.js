import React, { useState,useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import User from '../User/User';
import axios from 'axios';

const Home = () => {
    const [count,setCount] = useState(0);
    const [posts, setPosts] = useState([]);

    
    
useEffect(()=>{

  axios.get('https://localhost:7106/api/users').then((res) => {
    setPosts(res.data);
});
}
  
  ,[]);


    return (
        <div className='bg-cyan-100 h-screen'>
              {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
            { count? <div></div> :
            <div className="alert place-content-center">
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