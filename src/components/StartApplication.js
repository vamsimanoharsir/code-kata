import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './styles.css'

function StartApplication(props) {
    const [initiate, setInitiate]=useState(false)

    const CenterDiv = styled.div`
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    `
    function handleClick(){
        setInitiate(!initiate)
    }
    return (
        <div>
            <CenterDiv>
            <h1>Welcome to our Loan management application</h1>
            Hello User! This is the most credible loan application provider!!!<br/><br/>
            <button className='buttonclass' onClick={handleClick}>Click for initiating the application</button><br/><br/>
            {initiate && <Link className='Link' to='/initiation'>Confirm again</Link>}
            </CenterDiv>
        </div>
        
    );
}

export default StartApplication;