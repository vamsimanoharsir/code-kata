import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.css'

function DecisionEngine(props) {
    const name=useParams()
    
    return (
        // final page displayed
        <div>
            <h2 className='headingend'>Final details that are sent to the decision engine after applyimg rules to summarize application</h2><br/><br/><br/><br/><br/><br/><br/>
            <h3>Final result including preAssessment values as specified : </h3><br/>{JSON.stringify(name)}<br/><br/>
            <Link className='Link5' to='/'>Home Page</Link>
        </div>
    );
}

export default DecisionEngine;