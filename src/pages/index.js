import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { AllProjects } from '../components/dashboard/allprojects';
import { ProjectProgressBar } from '../components/dashboard/projectProgressBar';
import { NextProjects } from '../components/dashboard/nextProjects';
import { OngoingProjects } from '../components/dashboard/ongoingProjects';
import { CompletedProjects } from '../components/dashboard/completedProjects';
import { ProjectStatusChart } from '../components/dashboard/projectStatusChart';
import { DashboardLayout } from '../components/dashboard-layout';
import { projects } from '../__mocks__/projects'
import projectStatuses from 'src/constants/projectStatuses';





export default function Dashboard() {
  const [myProject, setMyProject] = useState(projects)

  const ongoingProjects = myProject.filter(item => item.status === projectStatuses.ONGOING)
  const nextProjects = myProject.filter(item => item.status === projectStatuses.NEXT)
  const completedProjects = myProject.filter(item => item.status === projectStatuses.COMPLETED)
  
  useEffect(() => {
    setMyProject(projects)
  }
  , [projects])

  return (
  <>
    <Head>
      <title>
      DASHBOARD - Mini Variant Drawer Application
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <AllProjects count={myProject.length}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <OngoingProjects count={ongoingProjects.length} />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <NextProjects count={nextProjects.length}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <CompletedProjects sx={{ height: '100%' }} count={completedProjects.length} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <ProjectProgressBar />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <ProjectStatusChart sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)};

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

