import React from 'react'
import './modal.css'

const Modal = ({ isModal, handleModal }) => {
    return (
        <>
            {
                isModal ?

                    <div
                        className="modalContainer"
                    >
                        <div className="modal" >
                            <header className="modal_header">
                                <h2 className="modal_header-title"> Add Members</h2>
                            </header>
                            <main className="modal_content">
                                <label className="modal_content-label">Name</label>
                                <input type="text" placeholder="Name" />
                                <label className="modal_content-label">Company</label>
                                <input type="text" placeholder="Company" />
                                <label className="modal_content-label">Status</label>
                                <input type="text" placeholder="Status" />
                                <label className="modal_content-label">Notes</label>
                                <input type="text" placeholder="Notes" />
                            </main>
                            <footer className="modal_footer">
                                <button onClick={() => handleModal(!isModal)} className="modal-close" >
                                    Cancel
                                </button>
                                <button className="submit">Save</button>
                            </footer>
                        </div>
                    </div>
                    : null
            }
        </>
    );
};

export default Modal;