import React from 'react';
import { Formik, Form, useField, Field } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
import './modal.css'
import axios from 'axios';


const Modal = ({ isModal, setIsModal, updateData }) => {
    const validate = Yup.object({
        studentName: Yup.string()
            .max(15, 'must be 15').required("Field required"),
        fathersName: Yup.string()
            .max(15, 'must be 15').required("Field required"),
        DOB: Yup.date()
            .min(10, 'must be at greater than 10').required("Field is required"),
        address: Yup.string()
            .min(6, 'must be at least 6').required("Address is required"),
        city: Yup.string()
            .min(6, 'must be at least 6').required("Field is required"),
        state: Yup.string()
            .min(6, 'must be at least 6').required("Field is required"),
        pin: Yup.string()
            .length(6, "Must be only 6 digits").required("Pin is required"),
        phoneNo: Yup.string()
            .max(10, 'max 10 digit').required("Phone No is required"),
        email: Yup.string()
            .email("email id invalid").required("Email is required"),
        // classOpted: Yup.string()
        //     .min(6, 'must be at least 6').required("field is required"),
        // marks: Yup.string()
        //     .min(6, 'must be at least 6').required("Marks is required"),


    })



    const handleSubmit = (e) => {

    }
    const handleClose = (e) => {
        setIsModal(!isModal)


    }

    var curr = new Date();
    curr.setDate(curr.getDate() + curr.getHours());
    var date = curr.toISOString().substr(0, 10);




    return (
        <Formik


            enableReinitialize
            onSubmit={async (values, { setSumitting }) => {
                const res = await axios.post('http://localhost:5000/addStudents', values).then(response => {
                    console.log(response)
                    setIsModal(!isModal)
                })
                console.log(res)
            }
            }

            initialValues={{
                studentName: '',
                fathersName: '',
                DOB: '',
                address: '',
                city: '',
                state: '',
                pin: '',
                phoneNo: '',
                email: '',
                classOpted: '',
                marks: '',
                DateEnrolled: '',
            }}
            validationSchema={validate}>
            {({ values, handleChange }) => (


                <div>
                    <h1>Add Student</h1>
                    <Form>
                        <div
                            className="modalContainer">
                            <div div className="modal" >
                                <header className="modal_header">
                                    <h2 className="modal_header-title"> Student Details</h2>
                                </header>
                                <main className="modal_content">
                                    <TextField label="student Name" name="studentName" type="text" />
                                    <TextField label="Father's Name" name="fathersName" type="text" />
                                    <TextField className="date" label="Date Of Birth" name="DOB" type="Date" />
                                    <TextField label="Address" name="address" type="text" />
                                    <TextField label="City" name="city" type="text" />
                                    <TextField label="State" name="state" type="text" />
                                    <TextField label="Pin" name="pin" type="number" />
                                    <TextField label="Phone No" name="phoneNo" type="text" />
                                    <TextField label="Email" name="email" type="text" />
                                    {/* <TextField label="classOpted" name="classOpted" type="number" /> */}
                                    <Field style={{ width: '40%' }} label="classOpted" name="classOpted" as="select">
                                        <option>Select Class</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </Field>
                                    {/* <TextField type="select">
                                </TextField> */}
                                    <TextField label="marks" name="marks" type="number" />
                                    <TextField className="date" label="DateEnrolled" value={date} onChange={e => console.log(e.target.value)} name="DateEnrolled" type="Date" />
                                </main>
                                <footer className="modal_footer">
                                    <button onClick={() => handleClose()} className="modal-close" >
                                        Cancel
                                    </button>
                                    <button onClick={() => handleSubmit()} className="submit">Save</button>
                                </footer>
                            </div>
                        </div >
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Modal;