import React, { useState } from 'react'
import Modal from '../modal/Modal'
import './table.css'

function Table() {
    const [isModal, setIsModal] = useState(false)

    const handleModal = () => {
        setIsModal(!isModal)
    }
    return (
        <div className="table">
            <table>
                <caption>Team Members <button onClick={() => handleModal()}>Add Members</button></caption>
                <tr>
                    <th>
                        <input type="checkbox" />
                    </th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Notes</th>
                    <th>
                    </th>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>
                        <button className="dltBtn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>
                        <button className="dltBtn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>
                        <button className="dltBtn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>
                        <button className="dltBtn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>
                        <button className="dltBtn">Delete</button>
                    </td>
                </tr>
            </table>
            <Modal isModal={isModal} handleModal={handleModal} />
        </div>
    )
}

export default Table