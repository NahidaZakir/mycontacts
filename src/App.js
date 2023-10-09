
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';

function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'/home',
        element:<Home></Home>
      }
    ]
  }
 ])
  return (
    <div className="App">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
