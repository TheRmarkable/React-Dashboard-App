import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import { projects } from '../../__mocks__/projects'
import projectStatuses from '../../constants/projectStatuses';

const nextProjects = projects.filter(item => item.status === projectStatuses.NEXT)
const completedProjects = projects.filter(item => item.status === projectStatuses.COMPLETED)
const ongoingProjects = projects.filter(item => item.status === projectStatuses.ONGOING)


export const ProjectStatusChart = (props) => {
  const [projectData, setProjectData] = useState({
    labels: [projectStatuses.COMPLETED,projectStatuses.ONGOING,projectStatuses.NEXT],
    datasets: [{
      label: 'Project Statuses',
      data: [completedProjects.length,ongoingProjects.length,nextProjects.length],
      backgroundColor: ['green', '#FB8C00','#e53935'],
      borderColor: '#FFFFFF',

    }]
  })

  return (
    <Card {...props}>
      <CardHeader title="Project Statuses" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={projectData}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
