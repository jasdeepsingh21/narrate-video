import React from 'react';
import { Grid, Typography } from '@material-ui/core/';

import DashInfoCard from '../components/DashInfoCard/DashInfoCard';

function Dashboard() {
  return (
    <Grid>
      <Typography variant="h5">Dashboard</Typography>
      <DashInfoCard />
    </Grid>
  );
}

export default Dashboard;
