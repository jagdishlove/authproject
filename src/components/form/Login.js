import React, { useEffect, useState } from 'react'
import './form.css';
import image from './../../assets/images/login.svg';





export default function Form({ navigate }) {



    // States for registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = localStorage.getItem('user');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    const navigationRoute = () => {
        navigate('/home');
    }




    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
        }
        else {
            // setSubmitted(true);
            // setError(false);
            if (JSON.parse(user).email === email && JSON.parse(user).password === password) {
                navigationRoute();
            }
            else {
                setError(true);
            }

        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User{email} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="form">
            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>


            <form>
                <div className="loginImage">
                    <h1>Log In</h1>
                    <img src={image} alt="React Logo" />
                </div>
                {/* Labels and inputs for form data */}

                <label className="label">Email</label>
                <input placeholder='Enter Email' onChange={handleEmail} className="input"
                    value={email} type="email" />

                <label className="label">Password</label>
                <input placeholder='Enter Password' onChange={handlePassword} className="input"
                    value={password} type="password" />

                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
                <h4>Don't have account <span onClick={() => navigate('/signup')} className="link" >Register</span></h4>
            </form>
        </div>
    );
}