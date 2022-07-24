import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import AtomButton from './AtomButton';
import { useState } from 'react';
import ProjectService from 'src/services/ProjectService';






export default function AtomTable( {handleClose} ) {

    const projectService = new ProjectService(); 

    const [id , setId] = useState("");
    const [name , setName] = useState("");
    const [testType , setTestType] = useState("");
    const [checklistType , setChecklistType] = useState("");
    const [startDate , setStartDate] = useState("");
    const [endDate , setEndDate] = useState("");

    const handleChangeId = (event) => {
        setId( () =>  event.target.value )
    }

    const handleChangeName = (event) => {
        setName( () =>  event.target.value )
    }

    const handleChangeTestType = (event) => {
        setTestType( () =>  event.target.value )
    }

    const handleChangeChecklistType = (event) => {
        setChecklistType( () =>  event.target.value )
    }

    const handleChangeStartDate = (event) => {
        setStartDate( () =>  event.target.value )
    }

    const handleChangeEndDate = (event) => {
        setEndDate( () =>  event.target.value )
    }

    const createProjectFunc = async(event) => {
        
        event.preventDefault();

        let newProject ={
            id : id,
            name : name,
            testType : testType,
            checklistType : checklistType,
            startDate : startDate,
            endDate : endDate
          }
        
       try{
            await projectService.createProject(newProject); 
            handleClose();
       }
       catch(error){
            alert("Please enter values to field CORRECTLY!");
       }
       
       
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <Card style={{maxWidth: 450, margin:'0 auto', padding:'20 px 5px'}}>
            <CardContent>
            <form>

                <Grid container spacing={1}>
                    <Grid xs={12} sm={8} item>
                        <TextField variant='outlined' label='ID' placeholder='Please Enter ID' value={id} onChange={handleChangeId} fullWidth required></TextField>
                    </Grid>
                    <Grid xs={12} sm={8} item>
                        <TextField variant='outlined' label='NAME' placeholder='Please Enter Name' value={name} onChange={handleChangeName} fullWidth required></TextField>
                    </Grid>
                    <Grid xs={12} sm={8} item>
                        <TextField variant='outlined' label='TEST TYPE' placeholder='Please Enter Test Type' value={testType} onChange={handleChangeTestType} fullWidth required></TextField>
                    </Grid>
                    <Grid xs={12} sm={8} item>
                        <TextField variant='outlined' label='CHECKLIST TYPE' placeholder='Please Enter Checklist Type' value={checklistType} onChange={handleChangeChecklistType} fullWidth required></TextField>
                    </Grid>
                    <Grid xs={12} sm={8} item>
                        <TextField type='date' variant='outlined'  placeholder='Please Enter Start Date' value={startDate} onChange={handleChangeStartDate} fullWidth required></TextField>
                    </Grid>
                    <Grid xs={12} sm={8} item>
                        <TextField type='date' variant='outlined'  placeholder='Please Enter End Date' value={endDate} onChange={handleChangeEndDate} fullWidth required></TextField>
                    </Grid>
                    <Grid xs={12} sm={8} item display='flex' justifyContent='center'>
                    <AtomButton text={'Create Project'} type='submit' onClick={createProjectFunc}/>

                    </Grid>
                </Grid>
            </form>

            </CardContent>
        </Card>
      </Table>
    </TableContainer>
  );
}
