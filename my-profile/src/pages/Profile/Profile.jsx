import * as classes from './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function Profile(){
    const navigateTo = useNavigate();
    let path = localStorage.getItem('path');
    useEffect(()=>{
        if(path) {
            localStorage.removeItem('path');
            navigateTo(path);
          }
    },[path]);
    
 
    return <div className='container'> 
    <div className='header'>
        My Profile
    </div>
    <div className='content'>
            
    </div>
    
    </div>
} 