import logo from './logo.svg';
import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import  IncomeTaxCalculator  from './pages/IncomeTax/IncomeTaxCalculator';
import Profile from './pages/Profile/Profile';
const router = createBrowserRouter([{
  path:'/',
  element:<Profile></Profile>
},{
  path:'/incometax',
  element:<IncomeTaxCalculator></IncomeTaxCalculator>

}]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
