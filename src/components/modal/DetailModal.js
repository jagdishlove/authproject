import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";

import Modal from "react-modal";


const DetailModal = ({ isDetailModal, setIsDetailModal, detailsData }) => {

    const { studentName,
        fathersName,
        DOB,
        address,
        city,
        state,
        pin,
        phoneNo,
        email,
        classOpted,
        marks,
        DateEnrolled } = detailsData
    function toggleModal() {
        setIsDetailModal(!isDetailModal);
    }

    return (
        <div>
            <Modal
                isOpen={isDetailModal}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
            >
                <Box p={2} textAlign="center" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>

                        <Typography variant="h2">Student Information</Typography>
                    </div>

                    <Typography style={{ marginTop: '2em' }} variant="h5">Father's name</Typography>
                    <Typography variant="subtitle">{fathersName}</Typography >

                    <Typography variant="h5">Date of birth</Typography>
                    <Typography variant="subtitle">{DOB}</Typography>

                    <Typography variant="h5">Address</Typography>
                    <Typography variant="subtitle">{address}</Typography >

                    <Typography variant="h5">City</Typography>
                    <Typography variant="subtitle">{city}</Typography>

                    <Typography variant="h5">State</Typography>
                    <Typography variant="subtitle">{state}</Typography >

                    <Typography variant="h5">pin</Typography>
                    <Typography variant="subtitle">{pin}</Typography >

                    <Typography variant="h5">Phone no</Typography>
                    <Typography variant="subtitle">{phoneNo}</Typography >

                    <Typography variant="h5">Email</Typography>
                    <Typography variant="subtitle">{email}</Typography >

                    <Typography variant="h5">class opted</Typography>
                    <Typography variant="subtitle">{classOpted}</Typography>

                    <Typography variant="h5">marks</Typography>
                    <Typography variant="subtitle">{marks}</Typography >

                    <Typography variant="h5">Date enrolled</Typography>
                    <Typography variant="subtitle">{DateEnrolled}</Typography>
                    <Button style={{ width: '10em', margin: 'auto', marginTop: '1em' }} variant="contained" color='primary' onClick={toggleModal}>Close modal</Button>
                </Box>
            </Modal>
        </div >
    );
}

export default DetailModal;
