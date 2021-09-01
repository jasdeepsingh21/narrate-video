import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Paper } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import VideocamIcon from '@material-ui/icons/Videocam';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './dashInfo.scss';
import ReferForm from '../ReferForm';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '0.5em',
  },
});

export default function DashInfoCard() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push('/app/createVideo');
  };
  return (
    <Grid container>
      <Grid md={12} container className={classes.root}>
        <Grid md={7}>
          <Paper className="dash-msg-box">
            <Grid md={12} container>
              <Grid md={8}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Welcome Back,
                </Typography>
                <Typography
                  variant="body2"
                  component="h6"
                  gutterBottom
                >
                  Creat your creative videos If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there
                  isn`t anything
                </Typography>
                <Button
                  color="secondary"
                  variant="contained"
                  gutterBottom
                >
                  Start Now
                </Button>
              </Grid>

              <Grid md={4}>
                <img
                  src="../public/images/start.jpg"
                  alt="start now"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid md={5}>
          <Paper className="dash-carousal-box">
            <Typography variant="h5" component="h3" gutterBottom>
              Key Points For Referals
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Refer 1 and get 1 credit free.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              There is no limit to Referals.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Referal should be unique and known to you.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Credit will be given upon successful signup by referred
              person.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid md={6} container>
        <Grid md={6}>
          <Card className={classes.root}>
            <CardContent className="card-content">
              <Typography variant="h6" component="h2" gutterBottom>
                Credit Used
              </Typography>
              <Grid
                container
                justifyContent="space-evenly"
                alignItems="flex-start"
              >
                <Avatar
                  variant="rounded"
                  style={{
                    background:
                      'rgb(85, 105, 255) none repeat scroll 0% 0%',
                  }}
                >
                  <MovieCreationIcon />
                </Avatar>
                <Typography
                  variant="h4"
                  component="h2"
                  color="textSecondary"
                >
                  10
                </Typography>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                onClick={handleClick}
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid md={6}>
          <Card className={classes.root}>
            <CardContent className="card-content">
              <Typography variant="h6" component="h2" gutterBottom>
                Credit Balance
              </Typography>
              <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Avatar
                  variant="rounded"
                  style={{
                    background:
                      'rgb(85, 105, 255) none repeat scroll 0% 0%',
                  }}
                >
                  <AccountBalanceIcon />
                </Avatar>
                <Typography
                  variant="h4"
                  component="h2"
                  color="textSecondary"
                >
                  90
                </Typography>
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary">
                Request additional credits
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid md={6}>
          <Card className={classes.root}>
            <CardContent className="card-content">
              <Typography variant="h6" component="h2" gutterBottom>
                Create New Video
              </Typography>
              <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Avatar
                  variant="rounded"
                  style={{
                    background:
                      'rgb(85, 105, 255) none repeat scroll 0% 0%',
                  }}
                >
                  <VideocamIcon />
                </Avatar>
                <Typography
                  variant="h4"
                  component="h2"
                  color="textSecondary"
                >
                  0
                </Typography>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                onClick={handleClick}
              >
                Proceed
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid md={6}>
          <Card className={classes.root}>
            <CardContent className="card-content">
              <Typography variant="h6" component="h2" gutterBottom>
                View Video List
              </Typography>
              <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Avatar
                  variant="rounded"
                  style={{
                    background:
                      'rgb(85, 105, 255) none repeat scroll 0% 0%',
                  }}
                >
                  <FormatListBulletedIcon />
                </Avatar>
                <Typography
                  variant="h4"
                  component="h2"
                  color="textSecondary"
                >
                  5
                </Typography>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                onClick={handleClick}
              >
                View Listing
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid md={6} container>
        <Grid md={12} className={classes.root}>
          <Paper className="dash-refer-form">
            <Grid md={12} container>
              <Grid md={6}>
                <Typography variant="h6" component="h4">
                  Refer &amp; Earn
                </Typography>
              </Grid>
              <Grid md={6}>
                Unique Code : 123456
                <IconButton aria-label="delete">
                  <FileCopyIcon />
                </IconButton>
              </Grid>
            </Grid>
            <ReferForm />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
