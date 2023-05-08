import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DecisionEngine from './DecisionEngine';

//have used a dummy api as api is not provided
//this is for a single user
export let accounts=[
    {"name": "January", "year": 2023, "month": 1, "profitLoss": 5000, "assetsValue": 100000},
    {"name": "February", "year": 2023, "month": 2, "profitLoss": -2500, "assetsValue": 97500},
    {"name": "March", "year": 2023, "month": 3, "profitLoss": 7500, "assetsValue": 105000},
    {"name": "April", "year": 2023, "month": 4, "profitLoss": -10000, "assetsValue": 95000},
    {"name": "May", "year": 2023, "month": 5, "profitLoss": 12500, "assetsValue": 107500},
    {"name": "June", "year": 2023, "month": 6, "profitLoss": -5000, "assetsValue": 102500},
    {"name": "July", "year": 2023, "month": 7, "profitLoss": 2000, "assetsValue": 104500},
    {"name": "August", "year": 2023, "month": 8, "profitLoss": -1000, "assetsValue": 103500},
    {"name": "September", "year": 2023, "month": 9, "profitLoss": 3000, "assetsValue": 106500},
    {"name": "October", "year": 2023, "month": 10, "profitLoss": -500, "assetsValue": 106000},
    {"name": "November", "year": 2023, "month": 11, "profitLoss": 8000, "assetsValue": 114000},
    {"name": "December", "year": 2023, "month": 12, "profitLoss": -6000, "assetsValue": 108000}
]
let setCalc=false;
let preAssessment=0

//displaying in a table format in the ui
function ApiResponse(props) {
    const ApiResponse = props.accounts.map((person, index) => (
      <div key={index} >
        <center >
        <table >
        <td>Name: {person.name}</td>
        <td>year: {person.year}</td>
        <td>month: {person.month}</td>
        <td>profitLoss: {person.profitLoss}</td>
        <td>assetsValue: {person.assetsValue}</td>
        </table>
        </center>
      </div>
    ));
  
    return <span>{ApiResponse}</span>;
}

//calculating preAssessment based on the conditions given
function CalcPreAssessment(name,date,loan){
    setCalc=true;
    let profitCount=0
    let sumAssetValue=0
    for(let i=0;i<12;i++){
        accounts.map(x=>{
            sumAssetValue=sumAssetValue+(x.assetsValue)
        })
    }
    sumAssetValue=(sumAssetValue/12)//average

    for(let i=0;i<12;i++){
        accounts.map(x=>{
            if(x.profitLoss>0)
                profitCount+=1;//profit count greater than 0 in last 12 months
        })
    }
    if (profitCount === 12)
        preAssessment = 60
    else if (sumAssetValue > parseInt(loan))
        preAssessment = 100
    else
        preAssessment = 20//defuault value
    console.log('preAssessment is ',preAssessment);
      
}

function CheckForm(props) {

    const { name } = useParams();
    const { loan } = useParams();
    const { date } = useParams();
    

    return(
        <div>
            <h3 className='header'>{`Welcome ${name} !, This is your balance sheet, please review your account details: `}</h3>
            <ApiResponse accounts={accounts} />
            <br/><button className='calcButton' onClick={CalcPreAssessment(name,date,loan)}>After review, click here to calculate preAssessment value</button><br/>
            <br/><Link className='Link4' to={`/finalPage/${name}/${date}/${loan}/${preAssessment}`}>Submit Application after review</Link>  
        </div>
    )
}

export default CheckForm;