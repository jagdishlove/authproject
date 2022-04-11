import React, { useState } from 'react'
import './modal.css'
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const Modal = ({ isModal, handleModal, setIsModal }) => {

    const [studentName, setstudentName] = useState('')
    const [fathersName, setFathersName] = useState('')
    const [DOB, setDOB] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pin, setPin] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [marks, setMarks] = useState('')
    const [dateEnrolled, setDateEnrolled] = useState('')

    const postData = async () => {
        const payload = [
            studentName,
            fathersName,
            DOB,
            address,
            city,
            state,
            pin,
            phoneNo,
            email,
            marks,
            dateEnrolled
        ]
        await axios.post('http://localhost:5000/addMembers', {
            payload
        })
    }

    const handleSubmit = (e) => {
        if (studentName === '' || fathersName === '' || DOB === '' || address === '' || city === '' || state === '' || pin === '' || phoneNo === '' || email === ''
            || marks === '' || dateEnrolled === '') {
            alert('Please fill all the fields')
        }
        postData().then(() => {
            setIsModal(!isModal);
            setstudentName('');
            setFathersName('');
            DOB('');
            address('');
        }).catch(err => {
            console.log(err)
        });

    }
    const handleClose = (e) => {
        setIsModal(!isModal);
    }


    return (
        <>
            {
                isModal ?

                    <div
                        className="modalContainer"
                    >
                        <div div className="modal" >
                            <header className="modal_header">
                                <h2 className="modal_header-title"> Add Members</h2>
                            </header>
                            <main className="modal_content">
                                <label className="modal_content-label">Name</label>
                                <input value={studentName} onChange={(e) => setstudentName(e.target.value)} type="text" placeholder="Name" />
                                <label className="modal_content-label">Company</label>
                                <input value={fathersName} onChange={(e) => setFathersName(e.target.value)} type="text" placeholder="Company" />
                                <label className="modal_content-label">Status</label>
                                <input value={DOB} onChange={(e) => setDOB(e.target.value)} type="text" placeholder="Status" />
                                <label className="modal_content-label">Notes</label>
                                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Notes" />
                            </main>
                            <footer className="modal_footer">
                                <button onClick={() => handleClose()} className="modal-close" >
                                    Cancel
                                </button>
                                <button onClick={() => handleSubmit()} className="submit">Save</button>
                            </footer>
                        </div>
                    </div >
                    : null
            }
            
        </>
    );
};

export default Modal;