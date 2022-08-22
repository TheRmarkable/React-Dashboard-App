import Head from 'next/head';
import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { ProjectListResults } from '../components/project/project-list-results';
import { ProjectListToolbar } from '../components/project/project-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { projects } from '../__mocks__/projects';
import AtomButton from 'src/components/atoms/AtomButton';
import AtomModal from 'src/components/atoms/AtomModal';
import ProjectTable from 'src/components/organizms/createProjectTable';



export default function Projects() {

  const [isCreateProjectModalVisible, setIsCreateProjectModalVisible] = useState(false);

  return (
  <>
    <Head>
      <title>
        Projects | Nspect
      </title>
    </Head>

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        display: 'flex', 
        justifyContent: 'flex-end'
      }}
    >
        <AtomButton
                        text={'Create Project'}
                        color={'primary'}
                        onClick={() => setIsCreateProjectModalVisible(true)}
                    />
    </Box>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ProjectListToolbar title={'Projects'}/>
        <Box sx={{ mt: 3 }}>
          <ProjectListResults projects={projects} />
        </Box>
      </Container>
    </Box>

    {
      isCreateProjectModalVisible &&
        <AtomModal
          openModal={isCreateProjectModalVisible}
          closeModal={() => setIsCreateProjectModalVisible(false)}
          title={`Create Project`}
          content={
            <ProjectTable handleClose={() => setIsCreateProjectModalVisible(!isCreateProjectModalVisible)}/>
          }
          />
      }

  </>
  )
};

Projects.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

