import logo from './logo.svg';
import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import  IncomeTaxCalculator  from './pages/IncomeTax/IncomeTaxCalculator';
import EmiCalculator from './pages/Emi/EmiCalculator';
import Profile from './pages/Profile/Profile';
import Stock from './pages/Stock/Stock';

const router = createBrowserRouter([{
  path:'/',
  element:<Profile></Profile>
},{
  path:'/stock',
  element:<Stock></Stock>
},{
  path:'/incometax',
  element:<IncomeTaxCalculator></IncomeTaxCalculator>
},{
  path:'/emi',
  element:<EmiCalculator></EmiCalculator>
}]);
export default function App() {
  
 console.log("app called for ",global.location.pathname);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

