import React from 'react'
import Form from '../components/form/Login'
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    return (
        <div>
            <Form navigate={navigate} />
        </div>
    )
}

export default Login