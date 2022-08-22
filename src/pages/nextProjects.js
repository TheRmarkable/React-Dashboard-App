import React from 'react';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { ProjectListResultsFiltered } from 'src/components/project/project-filtered-list-result';
import { projects } from '../__mocks__/projects';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { ProjectListToolbar } from '../components/project/project-list-toolbar';
import projectStatuses from 'src/constants/projectStatuses';

const nextProjects = projects.filter(item => item.status === projectStatuses.NEXT)

export default function OngoingProjects() {


    return (
        <>
            <Head>
                <title>
                    OnGoingProjects | Nspect
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
                    <ProjectListToolbar title={'Next Projects'}/>
                    <Box sx={{ mt: 3 }}>
                    <ProjectListResultsFiltered projects={nextProjects} />
                    </Box>
                </Container>
            </Box>
        </>
        
        
    )
}

OngoingProjects.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
);

