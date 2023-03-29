import * as classes from "./IncomeTaxCalculator.css";
import { useState } from "react";

const STANDARD_DEDUCTION = 50000;
const EDUCATIONAL_CESS = 4;
function OldRegime(props) {
    const income = props.income;
    const deductions = props.deductions;

    const totalIncome = +income.fromSalary + +income.fromDigitalAssets + +income.fromInterest + +income.fromInterestPaidOnHomeLoan + +income.fromInterestPaidOnLoan + +income.fromRental + +income.fromOtherIncome;
    const totalDeductions = +deductions.basic + +deductions.medicalInsurance + +deductions.interestOnEducationalLoan + +deductions.empNPSContribution + +deductions.interestFromDeposits + +deductions.donationsToCharity + +deductions.interestonHousingLoan;
    let taxableIncome = totalIncome  - totalDeductions - +income.fromExemptAllowances ;
    taxableIncome = taxableIncome < 0? 0 : taxableIncome;
    let tax = 0;
    const cess = EDUCATIONAL_CESS; //4 percent cess
    if (taxableIncome > 300000 && taxableIncome <= 600000) {
        tax = (taxableIncome * 5) / 100;
    } else if (taxableIncome > 600000 && taxableIncome <= 900000) {
        tax = (taxableIncome * 10) / 100;
    } else if (taxableIncome > 900000 && taxableIncome <= 1200000) {
        tax = (taxableIncome * 15) / 100;
    } else if (taxableIncome > 1200000 && taxableIncome <= 1500000) {
        tax = (taxableIncome * 20) / 100;
    } else if (taxableIncome > 1500000) {
        tax = (taxableIncome * 30) / 100;
    }
    if(taxableIncome > 300000){
        tax = tax + (tax * cess) / 100;
        tax = tax - STANDARD_DEDUCTION;
    }
    tax = tax.toFixed(2);
    
    return <div className="fragment" style={{ 'fontSize': '20px' }}>
        Taxable Income <br/>{taxableIncome.toFixed(2)} Rs.<br />
        Tax as per Old Regime <br/><span style={{ 'color': 'green', 'fontSize': '25px', 'fontWeight': 'bold' }}>{tax} Rs.</span>
    </div>;
}
function NewRegime(props) {
    const income = props.income;
    const deductions = props.deductions;

    const totalIncome = +income.fromSalary + +income.fromDigitalAssets + +income.fromInterest + +income.fromInterestPaidOnHomeLoan + +income.fromInterestPaidOnLoan + +income.fromRental + +income.fromOtherIncome;
    const totalDeductions = 0;//+deductions.basic + +deductions.medicalInsurance + +deductions.interestOnEducationalLoan + +deductions.empNPSContribution + +deductions.interestFromDeposits + +deductions.donationsToCharity + +deductions.interestonHousingLoan;
    let taxableIncome = totalIncome  - totalDeductions - +income.fromExemptAllowances  ;
    taxableIncome = taxableIncome < 0? 0 : taxableIncome;
    let tax = 0;
    const cess = EDUCATIONAL_CESS; //4 percent cess
    if (taxableIncome > 300000 && taxableIncome <= 600000) {
        tax = (taxableIncome * 5) / 100;
    } else if (taxableIncome > 600000 && taxableIncome <= 900000) {
        tax = (taxableIncome * 10) / 100;
    } else if (taxableIncome > 900000 && taxableIncome <= 1200000) {
        tax = (taxableIncome * 15) / 100;
    } else if (taxableIncome > 1200000 && taxableIncome <= 1500000) {
        tax = (taxableIncome * 20) / 100;
    } else if (taxableIncome > 1500000) {
        tax = (taxableIncome * 30) / 100;
    }
    if(taxableIncome > 300000){
        tax = tax + (tax * cess) / 100;
        tax = tax - STANDARD_DEDUCTION;
    }
    tax = tax.toFixed(2);
    return <div className="fragment" style={{ 'fontSize': '20px' }}>
        Taxable Income <br/>{taxableIncome.toFixed(2)} Rs.<br />
        Tax as per New Regime <br/><span style={{ 'color': 'blue', 'fontSize': '25px', 'fontWeight': 'bold' }}>{tax} Rs.</span>
    </div>;
}
export default function IncomeTaxCalculator() {
    const [regime, setRegime] = useState("old");
    const [age, setAge] = useState(30);
    const [income, setIncome] = useState({
        fromSalary: 0,
        fromInterest: 0,
        fromRental: 0,
        fromDigitalAssets: 0,
        fromInterestPaidOnLoan: 0,
        fromInterestPaidOnHomeLoan: 0,
        fromExemptAllowances: 0,
        fromOtherIncome: 0
    });
    const [deductions, setDeduction] = useState({
        basic: 0,
        medicalInsurance: 0,
        interestOnEducationalLoan: 0,
        empNPSContribution: 0,
        interestFromDeposits: 0,
        donationsToCharity: 0,
        interestonHousingLoan: 0
    })

    const setTaxRegime = (selectedRegime) => {
        setRegime(selectedRegime);
    };
    return (
        <div className="container">
            <div className="header">
                Income tax calculator for&nbsp;
                <span className={`regime ${regime}`}>{regime}</span> regime
                <sub style={{ 'fontSize': '10px', 'color': 'grey' }}>experimental</sub>
            </div>
            <input
                type="radio"
                id="new-regime"
                name="regime"
                onClick={() => setTaxRegime("new")}
                value={regime}
                defaultChecked={regime == "new"}
            />
            <label htmlFor='new-regime'>New Regime</label>
            <input
                type="radio"
                id="old-regime"
                name="regime"
                onClick={() => setTaxRegime("old")}
                value={regime}
                defaultChecked={regime == "old"}
            />
            <label htmlFor='old-regime'>Old Regime</label>
            <div className="content">
                <div className="form">
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{ 'fontSize': '14px', 'textAlign': 'left','width':'232px' }}>Age</td>
                                    <td style={{ 'textAlign': 'right', 'paddingRight': '3px' }}><input type="number" onChange={(event) => setAge(event.target.value)} value={age} /></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr style={{ "paddingTop": '10px' }}>
                                    <td style={{ 'verticalAlign': 'top', 'fontSize': '14px', 'textAlign': 'left' }}>Income</td>
                                    <td></td>
                                </tr></tbody></table>
                        <table>
                            <tbody>
                                <tr style={{ "paddingTop": '10px' }}>
                                    <td style={{ 'textAlign': 'right' }}><table width='100%'>
                                        <tbody>
                                            <tr>
                                                <td className="pd-r" style={{'width':'212px'}}>From Salary</td>
                                                <td><input type="number" onChange={(event) => setIncome({ ...income, fromSalary: event.target.value })} value={income.fromSalary} /></td>
                                            </tr>
                                            <tr>
                                                <td className="pd-r">From Interest</td>
                                                <td><input type="number" onChange={(event) => setIncome({ ...income, fromInterest: event.target.value })} value={income.fromInterest} /></td>
                                            </tr>
                                            <tr>
                                                <td className="pd-r">From Rental</td>
                                                <td><input type="number" onChange={(event) => setIncome({ ...income, fromRental: event.target.value })} value={income.fromRental} /></td>
                                            </tr>
                                            <tr>
                                                <td className="pd-r">From Digital Assets</td>
                                                <td><input type="number" onChange={(event) => setIncome({ ...income, fromDigitalAssets: event.target.value })} value={income.fromDigitalAssets} /></td>
                                            </tr>
                                            <tr>
                                                <td className="pd-r">Interest Paid on Loan</td>
                                                <td><input type="number" onChange={(event) => setIncome({ ...income, fromInterestPaidOnLoan: event.target.value })} value={income.fromInterestPaidOnLoan} /></td>
                                            </tr>
                                            <tr>
                                                <td className="pd-r">From Interest Paid on Home Loan</td>
                                                <td><input type="number" onChange={(event) => setIncome({ ...income, fromInterestPaidOnHomeLoan: event.target.value })} value={income.fromInterestPaidOnHomeLoan} /></td>
                                            </tr>
                                            <tr>
                                                <td className="pd-r">Exempt Allowances</td>
                                                <td><input type="number" onChange={(event) => setIncome({ ...income, fromExemptAllowances: event.target.value })} value={income.fromExemptAllowances} /></td>
                                            </tr>

                                            <tr>
                                                <td className="pd-r">Other Income</td>
                                                <td><input type="number" onChange={(event) => setIncome({ ...income, fromOtherIncome: event.target.value })} value={income.fromOtherIncome} /></td>
                                            </tr>
                                        </tbody>
                                    </table></td>
                                </tr>
                                <tr>
                                    <td style={{ 'verticalAlign': 'top', 'fontSize': '14px', 'textAlign': 'left' }}>Deductions</td>
                                </tr> </tbody></table>
                        <table>
                            <tbody>
                                <tr style={{ "paddingTop": '10px' }}>
                                    <td style={{ 'textAlign': 'right' }}>
                                        <table width='100%'>
                                            <tbody>
                                                <tr>
                                                    <td className="pd-r">Basic (80C)</td>
                                                    <td><input type="number" onChange={(event) => setDeduction({ ...deductions, basic: event.target.value })} value={deductions.basic} /></td>
                                                </tr>
                                                <tr>
                                                    <td className="pd-r">Medical Insurance (80D)</td>
                                                    <td><input type="number" onChange={(event) => setDeduction({ ...deductions, medicalInsurance: event.target.value })} value={deductions.medicalInsurance} /></td>
                                                </tr>
                                                <tr>
                                                    <td className="pd-r">Interest on educational loan (80E)</td>
                                                    <td><input type="number" onChange={(event) => setDeduction({ ...deductions, interestOnEducationalLoan: event.target.value })} value={deductions.interestOnEducationalLoan} /></td>
                                                </tr>
                                                <tr>
                                                    <td className="pd-r">Employee's contribution to NPS (80CCD)</td>
                                                    <td><input type="number" onChange={(event) => setDeduction({ ...deductions, empNPSContribution: event.target.value })} value={deductions.empNPSContribution} /></td>
                                                </tr>
                                                <tr>
                                                    <td className="pd-r">Interest from deposits (80TTA)</td>
                                                    <td><input type="number" onChange={(event) => setDeduction({ ...deductions, interestFromDeposits: event.target.value })} value={deductions.interestFromDeposits} /></td>
                                                </tr>
                                                <tr>
                                                    <td className="pd-r">Donations to charity (80G)</td>
                                                    <td><input type="number" onChange={(event) => setDeduction({ ...deductions, donationsToCharity: event.target.value })} value={deductions.donationsToCharity} /></td>
                                                </tr>
                                                <tr>
                                                    <td className="pd-r">Interest on housing loan (80EEA)</td>
                                                    <td><input type="number" onChange={(event) => setDeduction({ ...deductions, interestonHousingLoan: event.target.value })} value={deductions.interestonHousingLoan} /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
            {regime == "new" ? <NewRegime income={income} deductions={deductions} age={age} /> : <OldRegime income={income} deductions={deductions} age={age} />}
        </div>
    );
}
