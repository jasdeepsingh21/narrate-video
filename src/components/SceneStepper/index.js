import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function SceneStepper() {
  const [steps, setSetps] = useState(['Scene']);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  // const steps = getSteps();
  const [sceneState, setSceneState] = React.useState([
    { name: 'scene one', value: ' some value', text: 'some text' },
  ]);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleAdd = () => {
    if (steps.length + 1 <= 10) {
      const newStep = `scene `;
      setSetps([...steps, newStep]);
      const obj = { name: '', text: '', value: '' };
      setSceneState((prev) => [...prev, obj]);
    } else {
      console.log(' limit exceeds ');
    }
  };
  console.log('setSceneState : :', sceneState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    sceneState[activeStep][name] = value;

    setSceneState((prevState) => [
      ...prevState,
      { ...prevState[activeStep][name], value },
    ]);
  };
  const handledelete = () => {
    if (steps.length + 1 > 1) {
      console.log(' step to del :', activeStep + 1);
      const newSceneList = steps.filter((index) => {
        console.log(' index to return :', index);
        let text = '';
        if (activeStep !== index) {
          text = `scene${index + 1}`;
        }
        return text;
      });
      console.log(newSceneList);
      setSetps(newSceneList);
    } else {
      console.log('can not del 1 scene');
    }
  };
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              {label} {index + 1}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <TextField
            variant="outlined"
            onChange={handleChange}
            name="name"
            value={sceneState[`${activeStep}`].name}
          />
        </Grid>
        <Grid item>
          <TextField
            onChange={handleChange}
            variant="outlined"
            name="text"
            value={sceneState[`${activeStep}`].text}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            onChange={handleChange}
            name="value"
            value={sceneState[`${activeStep}`].value}
          />
        </Grid>
      </Grid>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAdd}
              >
                Add More
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handledelete}
              >
                delete
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
