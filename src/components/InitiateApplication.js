import React from 'react';
import styled from 'styled-components';
import './styles.css'
import { Link } from 'react-router-dom';

function InitiateApplication(props) {
    //used styled components package in React for styling the front end
    const TextCenter = styled.div`
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    `;

    return (
        <div>
            <TextCenter>
            <h3><marquee>Your application is initiated!!!</marquee></h3><br/><br/>
            <Link className='Link2' to='form-filling'>Click here to proceed further and fill the application form</Link>
            </TextCenter>
        </div>
    );
}

export default InitiateApplication;