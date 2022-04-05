import React, { useState } from 'react'
import './form.css';
import image from './../../assets/images/login.svg';




export default function Form({ navigate }) {

    const navigationPage = () => {
        navigate('/login');
    }

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

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
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            // setSubmitted(true);
            // setError(false);
            localStorage.setItem("user", JSON.stringify({ email, password }));
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
                <h1>User {name} successfully registered!!</h1>
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
                    <h1>Register</h1>
                    <img src={image} alt="React Logo" />
                </div>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input placeholder='Enter Name' onChange={handleName} className="input"
                    value={name} type="text" />

                <label className="label">Email</label>
                <input placeholder='Enter Email' onChange={handleEmail} className="input"
                    value={email} type="email" />

                <label className="label">Password</label>
                <input placeholder='Enter Password' onChange={handlePassword} className="input"
                    value={password} type="password" />

                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
                <h4>Already have account <span className='link' onClick={() => navigationPage()}>Login</span></h4>
            </form>
        </div>
    );
}