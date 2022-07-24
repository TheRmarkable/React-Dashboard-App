import projectStatuses from "src/constants/projectStatuses"

export const projects = [
  {
      id: 1,
      name: 'Spiderman',
      testType: 'Black box',
      checklistType: 'OWASP Top 10',
      totalIssues: 12,
      status: projectStatuses.ONGOING,
      progress: 50,
      startDate: new Date('2022-07-01T07:25:31.820Z'),
      endDate: new Date('2022-07-31T04:55:31.820Z')

  },
  {
      id: 2,
      name: 'Iron Man2',
      testType: 'White box',
      checklistType: 'PCI DSS',
      totalIssues: 8,
      status: projectStatuses.ONGOING,
      progress: 30,
      startDate: new Date('2022-07-01T07:25:31.820Z'),
      endDate: new Date('2022-07-31T04:55:31.820Z')


  },
  {
      id: 3,
      name: 'Lion King',
      testType: 'Gray box',
      checklistType: 'PCI DSS',
      totalIssues: 4,
      status: projectStatuses.NEXT,
      progress: 0,
      startDate: new Date('2022-07-26T07:25:31.820Z'),
      endDate: new Date('2022-07-31T04:55:31.820Z')
      
  },
  {
      id: 4,
      name: 'Ant Man',
      testType: 'Black box',
      checklistType: 'Network',
      totalIssues: 25,
      status: projectStatuses.ONGOING,
      progress: 90,
      startDate: new Date('2022-07-01T07:25:31.820Z'),
      endDate: new Date('2022-07-31T04:55:31.820Z')
  },
  {
      id: 5,
      name: 'Black Widow',
      testType: 'White box',
      checklistType: 'OWASP Full',
      totalIssues: 2,
      status: projectStatuses.NEXT,
      progress: 0,
      startDate: new Date('2022-07-30T07:25:31.820Z'),
      endDate: new Date('2022-08-31T04:55:31.820Z')
  },
  {
      id: 6,
      name: 'Avengers',
      testType: 'Black box',
      checklistType: 'OWASP Top 10',
      totalIssues: 32,
      status: projectStatuses.ONGOING,
      progress: 50,
      startDate: new Date('2022-07-01T07:25:31.820Z'),
      endDate: new Date('2022-07-31T04:55:31.820Z')
  },
  {
      id: 7,
      name: 'Doctor Strange',
      testType: 'White box',
      checklistType: 'PCI DSS',
      totalIssues: 15,
      status: projectStatuses.ONGOING,
      progress: 30,
      startDate: new Date('2022-07-01T07:25:31.820Z'),
      endDate: new Date('2022-07-20T04:55:31.820Z')
  },
  {
      id: 8,
      name: 'Hulk',
      testType: 'Gray box',
      checklistType: 'PCI DSS',
      totalIssues: 9,
      status: projectStatuses.NEXT,
      progress: 0,
      startDate: new Date('2022-07-01T07:25:31.820Z'),
      endDate: new Date('2022-07-31T04:55:31.820Z')
  },
  {
      id: 9,
      name: 'Thor',
      testType: 'Black box',
      checklistType: 'Network',
      totalIssues: 5,
      status: projectStatuses.COMPLETED,
      progress: 100,
      startDate: new Date('2022-07-01T07:25:31.820Z'),
      endDate: new Date('2022-07-31T04:55:31.820Z')
  },
]
