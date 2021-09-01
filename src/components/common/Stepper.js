/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Stepper,
  Paper,
  TextField,
  Typography,
  Grid,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  Radio,
  InputLabel,
} from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Scene One', 'Scene 2', 'Scene 3'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper() {
  const [bgValue, setBgValue] = React.useState('white');
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const handleBg = (e) => {
    setBgValue(e.target.value);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Grid md={12} container>
        <Grid md={6}>
          <Typography variant="h5">Create Video Scenes</Typography>
        </Grid>
        <Grid md={6} container justifyContent="flex-end">
          <Button variant="contained" color="secondary">
            Add More Scene
          </Button>
        </Grid>
      </Grid>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Grid container>
        <Grid md={12}>
          <Paper style={{ margin: '0.5em', padding: '1em' }}>
            <Grid md={12}>
              <Typography variant="h5" component="h2">
                Scene Text
              </Typography>
            </Grid>
            <TextField
              id="outlined-multiline-static"
              style={{ width: '100%' }}
              multiline
              rows={5}
              defaultValue="Enter Scene text"
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Grid container>
          <Grid md={12}>
            <Paper style={{ margin: '0.5em', padding: '0.5em' }}>
              <Grid md={12}>
                <Typography variant="h5" component="h2">
                  Select Background
                </Typography>
              </Grid>
              <Grid md={12} container>
                <Grid md={4}>
                  <FormControlLabel
                    value="pic"
                    control={
                      <Radio
                        color="secondary"
                        value="pic"
                        checked={bgValue === 'pic'}
                      />
                    }
                    label="Picture"
                    onChange={handleBg}
                    labelPlacement="left"
                  />
                  <input type="file" />
                </Grid>
                <Grid md={4}>
                  <FormControlLabel
                    value="vid"
                    control={
                      <Radio
                        color="secondary"
                        value="vid"
                        checked={bgValue === 'vid'}
                      />
                    }
                    label="Video"
                    onChange={handleBg}
                    labelPlacement="left"
                  />
                  <input type="file" />
                </Grid>
                <Grid md={4}>
                  <FormControlLabel
                    value="vid"
                    control={
                      <Radio
                        color="secondary"
                        value="vid"
                        checked={bgValue === 'white'}
                      />
                    }
                    label="White Screen"
                    onChange={handleBg}
                    labelPlacement="left"
                  />
                  <input type="file" />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid md={12}>
          <Paper style={{ margin: '0.5em', padding: '1em' }}>
            <Grid md={12}>
              <Typography variant="h5" component="h2">
                Visual Content
              </Typography>
            </Grid>
            <Grid md={12} container>
              <Grid md={4}>
                <FormControlLabel
                  value="vid"
                  control={
                    <Radio
                      color="secondary"
                      value="vid"
                      checked={bgValue === 'vid'}
                    />
                  }
                  label="Image upload"
                  onChange={handleBg}
                  labelPlacement="left"
                />
                <input type="file" />
              </Grid>
              <Grid md={4}>
                <FormControlLabel
                  value="vid"
                  control={
                    <Radio
                      color="secondary"
                      value="vid"
                      checked={bgValue === 'white'}
                    />
                  }
                  label="Video Upload"
                  onChange={handleBg}
                  labelPlacement="left"
                />
                <input type="file" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid md={12}>
          <Paper style={{ margin: '0.5em', padding: '1em' }}>
            <Grid md={12}>
              <Typography variant="h5" component="h2">
                Timing Of content
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
            >
              <TextField
                id="outlined-basic"
                label="Start Time"
                variant="outlined"
              />

              <TextField
                id="outlined-basic"
                label="End Time"
                variant="outlined"
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid md={12}>
        <Paper style={{ margin: '0.5em', padding: '1em' }}>
          <Grid md={12}>
            <Typography variant="h5" component="h2">
              Position &amp; size
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
          >
            <FormControl variant="outlined" style={{ width: '20%' }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Position
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="Language"
              >
                <MenuItem value="0">Select</MenuItem>
                <MenuItem value={10}>Top Left</MenuItem>
                <MenuItem value={20}>Middle Left</MenuItem>
                <MenuItem value={30}>Bottom Left</MenuItem>
                <MenuItem value={30}>Top Center</MenuItem>
                <MenuItem value={30}>Middle Center</MenuItem>
                <MenuItem value={30}>Bottom Center</MenuItem>
                <MenuItem value={30}>Right Top</MenuItem>
                <MenuItem value={30}>Right Middle</MenuItem>
                <MenuItem value={30}>Right End</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" style={{ width: '20%' }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Size
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="Size"
              >
                <MenuItem value="0">Select</MenuItem>
                <MenuItem value={10}>Small</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>Large</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Paper>
      </Grid>
      <Grid md={12} justifyContent="flex-end">
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </Grid>
    </div>
  );
}
