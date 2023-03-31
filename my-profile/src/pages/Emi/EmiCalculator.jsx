import './EmiCalculator.css';
import { useState } from 'react';

export default function EmiCalculator(){
    const [amount,setAmount] = useState(0);
    const [interest,setInterest] = useState(0);
    const [tenure,setTenure] = useState(0);
    const [EMI,setEMI] = useState(0);
    const [totalEMI,setTotalEMI] = useState(0);
    function calculateEMI(){
        const tenureInMonths = +tenure * 12;
        const interestPerMonth = +interest/12/100;
        console.log("amount ",+amount, "tenure in months ",+tenureInMonths," interest rate per month", interestPerMonth);
        const emi = +amount * interestPerMonth * ( 1 + interestPerMonth)**tenureInMonths/(((1+ interestPerMonth)**tenureInMonths)-1);
        setEMI(emi);
        setTotalEMI(tenureInMonths * emi);

    }
    return <div className='container'> 
    <div className='header'>
       EMI calculator
    </div>
    <div className='content' style={{'textAlign':'center'}}>
        <table style={{'margin':'auto'}}>
            <tbody>
                <tr>
                    <td> Amount</td>
                    <td><input type='number' onChange={(event)=>setAmount(event.target.value)}/></td>
                </tr>
                <tr>
                            <td>Interest(annual)</td> 
                            <td> <input type='number' onChange={(event)=>setInterest(event.target.value)}/></td>
                </tr>
                <tr>
                            <td>Tenure(years)</td> 
                            <td> <input type="number" onChange={(event)=>setTenure(event.target.value)}/></td>
                </tr>
            </tbody>
           </table>
           <br/>
           <button onClick={() => calculateEMI()}>Calculate</button>
           <br/><br/>
           <span style={{'fontSize':'20px'}}>
             EMI : <span style={{'color':'green','fontWeight':'bold'}}>{EMI.toFixed(2)}</span><br/>
             Total EMI : <span style={{'color':'blue','fontWeight':'bold'}}>{ totalEMI.toFixed(2) }</span>
           </span><br/><br/>
    </div>
    
    </div>
} 