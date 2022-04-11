import { Box, Button, Paper } from '@material-ui/core'
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialTable from "material-table";
import axios from 'axios'
import { AddBox, ArrowDownward } from "@material-ui/icons";
import Modal from '../components/modal/Modal';
import DetailModal from '../components/modal/DetailModal';


function Home() {

  const [data, setData] = React.useState([])
  const [isModal, setIsModal] = React.useState(false)
  const [isDetailModal, setIsDetailModal] = React.useState(false)
  const [detailsData, setDetailsData] = React.useState([])
  const [updateData, setUpdateData] = React.useState([])



  const getStudents = async () => {
    await axios('http://localhost:5000/students').then(response => {
      setData(response.data)
    })
  }

  useEffect(() => {
    getStudents()
  }, []);

  console.log(data)


  const columns = [
    { title: 'Student Name', field: 'studentName' },
    { title: 'Email', field: 'email' },
    { title: 'Phone#', field: 'phoneNo', },
    { title: 'Class', field: 'classOpted' },
    { title: 'Marks %', field: 'marks' },
  ]


  // const handleRowUpdate = async (newData, oldData, resolve) => {
  //   console.log("new data", newData)
  //   axios.put(`http://localhost:5000/addStudents/${newData._id}`, newData)
  //     .then(res => {
  //       const dataUpdate = [...data];
  //       const index = oldData.tableData.id;
  //       dataUpdate[index] = newData;
  //       setData([...dataUpdate]);
  //       resolve()

  //     })
  //     .catch(error => {
  //       resolve()
  //     })
  // }







  return (
    <>
      <Box p={2} textAlign="right">
        <Button onClick={() => setIsModal(!isModal)} variant='contained'>Add Student</Button>
      </Box>
      <MaterialTable
        style={{ padding: '0 8px' }}
        title="Student List"
        columns={columns}
        data={data}
        actions={[
          {
            icon: 'edit',
            onClick: rowData => {
              setIsModal(!isModal)
              setUpdateData(rowData)
            }
          }]}
        options={{
          actionsColumnIndex: -1,
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF',
            fontWeight: 'bold',
            zIndex: '0'
          }
        }}
        onRowClick={(event, rowData) => {
          setIsDetailModal(!isDetailModal)
          setDetailsData(rowData)

        }}

        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} of {count}'
          },
          toolbar: {
            nRowsSelected: '{0} row(s) selected'
          },
          header: {
            actions: 'Edit'
          },
          body: {
            emptyDataSourceMessage: 'No records to display',
            filterRow: {
              filterTooltip: 'Filter'
            }
          }
        }}

      />
      =
      <Box>
        {isModal && <Modal isModal={isModal} setIsModal={setIsModal} updateData={updateData} />}
      </Box>
      <Box>
        {<DetailModal isDetailModal={isDetailModal} detailsData={detailsData} setIsDetailModal={setIsDetailModal} />}
      </Box>

    </>
  )
}

export default Home