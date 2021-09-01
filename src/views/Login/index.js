import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';
import LoginForm from '../../components/LoginForm';
import { userLogin } from '../../store/actions';
import './login.scss';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const handleLogin = (values) => {
    console.log('suubmit called ! from VIEW :', values);
    dispatch(userLogin(values));
  };
  return (
    <Grid container className="container-login100">
      <Paper elevation={6} className="wrap-login100">
        <Grid container>
          <Grid
            item
            md={5}
            display={{ sm: 'none', md: 'block' }}
            className="login-left-side"
          >
            <Grid item md={12} className="graphic-typo">
              <img
                src="../../public/images/logo.png"
                className="login-logo"
                alt=""
              />
            </Grid>
            <Grid item md={12} className="graphic-grid">
              <img
                src="../../public/images/bg.jpg"
                className="login-graphic"
                alt=""
              />
            </Grid>
          </Grid>
          <Grid item md={6} sm={12}>
            <Grid className="loginform-grid">
              <LoginForm
                history={history}
                handleLogin={(values) => handleLogin(values)}
              />
              <Typography
                variant="span"
                gutterBottom
                className="signup-link"
              >
                Doesnt have an account ?
                <span>
                  <Link to="/signup"> Get Started</Link>
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
