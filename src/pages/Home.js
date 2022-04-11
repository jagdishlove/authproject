import { Box } from '@material-ui/core'
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialTable from "material-table";
import axios from 'axios'
import { AddBox, ArrowDownward } from "@material-ui/icons";


function Home() {

  const [data, setData] = React.useState([])



  const getStudents = async () => {
    await axios('http://localhost:5000/students').then(response => {
      setData(response.data)
    })
  }

  useEffect(() => {
    getStudents()
  }, []);


  const columns = [
    { title: 'Student Name', field: 'studentName' },
    { title: 'Email', field: 'email' },
    { title: 'Phone#', field: 'phone', },
    { title: 'Class', field: 'classOpted' },
    { title: 'Marks %', field: 'marks' },
    { title: 'Edit', field: 'Edit' },
  ]



  return (
    <>
      <MaterialTable
        title="Student List"
        columns={columns}
        data={data}
      />
    </>
  )
}

export default Home