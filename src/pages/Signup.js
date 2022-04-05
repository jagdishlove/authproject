import React from 'react'
import Form from '../components/form/Signup'
import './signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    return (
        <div className='signupForm'>
            <Form navigate={navigate}/>
        </div>
    )
}

export default Signup