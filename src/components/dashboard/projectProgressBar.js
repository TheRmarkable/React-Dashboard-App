import { Bar } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { projects } from '../../__mocks__/projects'
import { element } from 'prop-types';

export const ProjectProgressBar = (props) => {
  const theme = useTheme();

  const namesOfProjects = projects.map((item) => item.name)
  const progressesOfProjects = projects.map((item) => item.progress)

  const today = new Date(Date.now());

  let backroundColor = []

//Sets the background colors according to projects end days
  for ( let element in projects ){
      if(projects[element].endDate < today){
        backroundColor.push('red')
      }else{
        backroundColor.push('#FF5C00')
      }
      if(projects[element].progress === 100){
        backroundColor[element] = 'green'
      }
  }

  //BAR DATA
  const data = {
    datasets: [
      {
        backgroundColor: backroundColor,
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [...progressesOfProjects],
        label: 'On Time',
        maxBarThickness: 10
      },
      {
        backgroundColor: 'red',
        label: 'Late',
      },
      {
        backgroundColor: 'green',
        label: 'Completed',
      }
    ],
    labels: [...namesOfProjects]
  };

  //Bar Options
  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props}>
      <CardHeader
        title="Latest Sales"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};
