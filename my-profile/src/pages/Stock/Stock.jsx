import * as classes from './Stock.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Stock(){
        const [price,setPrice] = useState(0);
         function getPrice(){
            const options = {
                method: 'GET',
                url: 'https://nasdaq-stock-pricing.p.rapidapi.com/Stock/GetPrice/AAPL',
                params: {symbol: 'AAPL'},
                headers: {
                    'X-RapidAPI-Key': '5918b57b41mshf00d6f14035d00cp1e056djsnadea5db82e1c',
                    'X-RapidAPI-Host': 'nasdaq-stock-pricing.p.rapidapi.com'
                }
            };

            try {
                axios.request(options).then(function(data){
                    console.log(data);
                    setPrice(data);
                })
                
            } catch (error) {
                console.error(error);
            }
        }
        useEffect(()=>{
            console.log("starting request..");
            getPrice();
        },[])
        
        console.log("component rendering..");
    return <div className='container'> 
                <div className='header'>
                    My Stocks AAPL : {price}
                </div>
                <div className='content'>
                        
                </div>
            </div>
} 