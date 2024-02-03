import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment.js";

export default function UserInput(){
    const [userData, setUserData] = useState({
        initialInvestment: 10000,
        annualInvestment: 1000,
        expectedReturn: 6,
        duration: 5,
        
    });

    const [result, setResult] = useState(calculateInvestmentResults(userData))


    function handleChange(name, value) {
        const updatedUserData = {
            ...userData,
            [name]: parseFloat(value)
        };
        setUserData(updatedUserData);
        setResult(calculateInvestmentResults(updatedUserData))
        console.log(result)
    }
    
    
    return (
    <>
        <section id='user-input'>
            <div className='input-group'>
                <p>
                <label>Initial Amount</label>
                <input type='Number' value = {userData.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)} required/>
                </p>
                <p>
                <label>Anual Amount</label>
                <input type='Number' value ={userData.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)} required/>
                </p>
            </div>
            <div className='input-group'>
                <p>
                <label>Expected Return</label>
                <input type='Number' value = {userData.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)} required/>
                </p>
                <p>
                <label>Duration</label>
                <input type='number' value = {userData.duration} onChange={(event) => handleChange('duration', event.target.value)} required/>
                </p>
            </div>
        </section>
        
        <table id="result">
        <thead>
            <tr>
            <th>Year</th>
            <th>interest</th>
            <th>valueEndOfYear</th>
            <th>annualInvestment</th>
            </tr>
        </thead>
        <tbody>
            {result.map((item, index) => (
            <tr key={index}>
                <td>{item.year}</td>
                <td>{parseFloat(item.interest).toFixed(2)}</td>
                <td>{parseFloat(item.valueEndOfYear).toFixed(2)}</td>
                <td>{parseFloat(item.annualInvestment).toFixed(2)}</td>

            </tr>
            ))}
        </tbody>
        </table>
    </>
    )
}