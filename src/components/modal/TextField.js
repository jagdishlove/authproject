import React from 'react'
import { ErrorMessage, useField } from 'formik'
import './modal.css'

export const TextField = ({ label, type, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="textfieldContainer">
            <label className="modal_content-label" htmlFor={field.name}>{label}</label>
            <input {...field} {...props} type={type} />
            <div style={{ color: 'red' }}>
                <ErrorMessage name={field.name} />
            </div>
        </div >
    )
}

export default TextField