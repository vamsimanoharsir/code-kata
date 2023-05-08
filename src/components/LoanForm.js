import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CheckForm from './CheckForm';
import { Link } from 'react-router-dom';

function LoanForm(props) {
    
    const [name, setName] = useState('');
    const [date, setDate] = useState(0);
    const [loan,setLoan]=useState(0)
    const [option, setOption] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
  
    const CenterDiv = styled.div`
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    `
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmittedData({ name, date, loan, option });
    };
  
    return (
        //form to fill the loan details
        <div className='form'>
            <center>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <br /><p className='title'>Please fill the details</p><br />
                <div className='container'>
                <label>
                    Name:
                    <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </label>
                <br /><br />
                <label>
                    Year:
                    <input className='input' type="number" value={date} onChange={(e) => setDate(e.target.value)} required/>
                </label>
                <br /><br />
                <label>
                    Loan amount:
                    <input className='input' type="number" value={loan} onChange={(e) => setLoan(e.target.value)} required/>
                </label>
                <br /><br />
                <label>
                    Accounting provider:<br/>
                    <select className='input' value={option} onChange={(e) => setOption(e.target.value)}>
                        <option value="">Select an option</option>
                        <option value="option1">Xero</option>
                        <option value="option2">MYOB </option>
                        <option value="option3" disabled>we only have two providers</option>
                    </select>
                </label>
                <br /><br />
                <button className='input' type="submit">click here to save details</button><br /><br />
                </div>
            </form>
            <br/><Link className='Link3' to={`/checkform/${name}/${date}/${loan}`}>Request Balance Sheet</Link>
            </center>
        </div>
    )
}

export default LoanForm;