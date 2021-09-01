import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Radio,
  Paper,
  Button,
  TextField,
  FormLabel,
} from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { createVideo } from '../../store/actions';

// import { green } from '@material-ui/core/colors';

function VideoCreationDetail() {
  const [selectedValue, setSelectedValue] = React.useState('1');
  const [showModel, setShowModel] = React.useState('actor');
  // const [model, setModel] = React.useState('');
  const [activeModel, setActiveModel] = React.useState(
    'https://colossyan-cdn.s3.eu-west-2.amazonaws.com/actors/male1/original.mp4',
  );

  const [steps, setSetps] = useState(['Scene']);

  const [activeStep, setActiveStep] = React.useState(0);
  const [modelPosition, setModelPosition] = React.useState('');
  const [modelSize, setModelSize] = React.useState('');

  const [text, setText] = React.useState('');
  const [videoName, setVideoName] = React.useState('');
  const [sceneState, setSceneState] = React.useState([
    { name: `track 1`, tracks: [] },
  ]);
  // const [trackState, setTrackState] = React.useState([]);
  const dispatch = useDispatch();
  const handleGenderChange = (event) => {
    const { name, value } = event.target;
    setSelectedValue(value);
    if (event.target.value === '1') {
      setSceneState((prev) => [...prev, { [name]: value }]);
    }
  };

  const handleModelPosition = (e) => {
    setModelPosition(e.target.value);
  };

  const handleModelSize = (e) => {
    setModelSize(e.target.value);
  };

  const modelVideoArr = [
    {
      speakerId: 'Suponji Bobu San',
      videoUrl:
        'https://colossyan-cdn.s3.eu-west-2.amazonaws.com/actors/male1/original.mp4',
    },
    {
      speakerId: 'Kyle Snow',
      videoUrl:
        'https://colossyan-cdn.s3.eu-west-2.amazonaws.com/actors/male2/original.mp4',
    },
    {
      speakerId: 'Susan Cole',
      videoUrl:
        'https://colossyan-cdn.s3.eu-west-2.amazonaws.com/actors/female1/original.mp4',
    },
    {
      speakerId: 'Jemima Taylor HD',
      videoUrl:
        'https://colossyan-cdn.s3.eu-west-2.amazonaws.com/actors/female2/original.mp4',
    },
    {
      speakerId: 'Laura Agarwal',
      videoUrl:
        'https://colossyan-cdn.s3.eu-west-2.amazonaws.com/actors/female5/original.mp4',
    },
  ];
  const handleModel = (val) => {
    setActiveModel(val);

    // setTrackState((prev) => [...prev, obj]);
  };
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
      const newStep = `Track `;
      setSetps([...steps, newStep]);
      const obj = { name: `track ${steps.length + 1}`, tracks: [] };
      setSceneState((prev) => [...prev, obj]);
    } else {
      console.log(' limit exceeds ');
    }
  };
  const handleVideoName = (e) => {
    setVideoName(e.target.value);
  };

  const handleTextChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setTrackState[activeStep][name] = value;
  // };
  const handleTypeChange = (e) => {
    const { name, value } = e.target;
    setShowModel(value);
    sceneState[activeStep][name] = value;
  };

  const handledelete = () => {
    if (steps.length + 1 > 1) {
      console.log(' step to del :', activeStep + 1);
      const newSceneList = steps.filter((scene, index) => {
        console.log(' index to return :', index);
        let text1 = '';
        if (activeStep !== index) {
          text1 = `scene${index + 1}`;
        }
        return text1;
      });
      console.log(newSceneList);
      setSetps(newSceneList);
    } else {
      console.log('can not del 1 scene');
    }
  };
  const handleGenerateVideo = () => {
    const videoObj = {};
    const pos = { x: 200, y: 200 };
    if (modelPosition === 'center') {
      pos.x = 500;
      pos.y = 500;
    }
    if (modelPosition === 'right') {
      pos.x = 800;
      pos.y = 800;
    }
    const size = { x: 100, y: 100 };
    if (modelSize === 'medium') {
      size.x = 200;
      size.y = 200;
    }
    if (modelSize === 'large') {
      size.x = 500;
      size.y = 500;
    }
    console.log(activeModel);
    const mod = modelVideoArr.find(
      (mode) => mode.speakerId === activeModel,
    );
    const trackState = {};
    trackState.speakerId = mod.speakerId;
    trackState.type = 'actor';
    trackState.videoUrl = mod.videoUrl;
    trackState.position = pos;
    trackState.size = size;
    trackState.text = text;
    videoObj.videoCreative = {
      settings: {
        name: 'Testing video',
        videoSize: { height: 1080, width: 1920 },
      },
      scenes: { name: 'scene 1', tracks: [trackState] },
    };
    // console.log(' track obj :', trackState);
    dispatch(createVideo(videoObj));
    console.log('sceneState : ', videoObj);
  };
  return (
    <Grid container spacing={1}>
      <Grid container style={{ marginBottom: '0.8em' }}>
        <Grid md={3}>
          <Typography variant="h5">Create Video</Typography>
        </Grid>
        <Grid md={9} style={{ textAlign: 'right' }}>
          {activeStep === steps.length ? (
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleGenerateVideo}
                style={{ marginLeft: '0.5em' }}
              >
                Generate video
              </Button>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  // className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1
                    ? 'Finish'
                    : 'Next'}
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
        </Grid>
      </Grid>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ width: '100%', margin: '0.5em' }}
      >
        {steps.map((label, index) => (
          <Step key={`${label}${Math.random()}`}>
            <StepLabel>
              {label} {index + 1}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid md={12}>
        <Paper style={{ padding: '1em' }}>
          <Grid container>
            {activeStep === 0 ? (
              <Grid md={4}>
                <TextField
                  name="videoName"
                  id="outlined-basic"
                  label="Video Name"
                  variant="outlined"
                  value={videoName}
                  onChange={handleVideoName}
                />
              </Grid>
            ) : (
              ''
            )}
            <Grid md={3} item>
              <FormLabel component="legend">
                Select Track Type
              </FormLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="type"
                variant="outlined"
                onChange={handleTypeChange}
                label="Language"
              >
                <MenuItem value="video">Video</MenuItem>
                <MenuItem value="actor" selected>
                  Actor
                </MenuItem>
                <MenuItem value="image">image</MenuItem>
              </Select>
            </Grid>
            {showModel === 'actor' && (
              <Grid md={4}>
                <FormLabel component="legend">
                  Select Model Gender
                </FormLabel>

                <FormControlLabel
                  value="1"
                  control={
                    <Radio
                      color="secondary"
                      value="1"
                      checked={selectedValue === '1'}
                    />
                  }
                  label="Male"
                  onChange={handleGenderChange}
                  labelPlacement="left"
                  name="gender"
                />
                <FormControlLabel
                  value="0"
                  name="gender"
                  control={
                    <Radio
                      color="secondary"
                      value="0"
                      checked={selectedValue === '0'}
                    />
                  }
                  label="Female"
                  onChange={handleGenderChange}
                  labelPlacement="left"
                />
              </Grid>
            )}
          </Grid>
        </Paper>
      </Grid>

      {showModel === 'actor' && (
        <Grid md={12}>
          <Paper style={{ marginTop: '0.5em', padding: '1em' }}>
            <Grid md={12}>
              <Typography variant="h8" component="h8">
                Select Model
              </Typography>
            </Grid>
            <Grid container justifyContent="space-evenly">
              {selectedValue === '1' ? (
                <>
                  <Grid item xs={6}>
                    <Avatar
                      alt="M1"
                      value=""
                      src="../public/images/m1.jpg"
                      className={
                        activeModel === 'Suponji Bobu San'
                          ? 'active-model'
                          : ''
                      }
                      style={{ width: '92px', height: '92px' }}
                      onClick={() => handleModel('Suponji Bobu San')}
                    />
                    <Typography variant="caption">
                      can speak :American(English) ,British, Spanish,
                      Russian,Polish,Hindi
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Avatar
                      alt="M2"
                      onClick={() => handleModel('Kyle Snow')}
                      value="Kyle Snow"
                      className={
                        activeModel === 'Kyle Snow'
                          ? 'active-model'
                          : ''
                      }
                      src="../public/images/m2.jpg"
                      style={{ width: '92px', height: '92px' }}
                    />
                    <Typography variant="caption">
                      can speak :American(English) ,British, Spanish,
                      Russian,Japanese, korean
                    </Typography>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={4}>
                    <Avatar
                      alt="M1"
                      onClick={() => handleModel('Susan Cole')}
                      className={
                        activeModel === 'Susan Cole'
                          ? 'active-model'
                          : ''
                      }
                      src="../public/images/f1.jpg"
                      style={{ width: '92px', height: '92px' }}
                    />
                    <Typography variant="caption">
                      can speak :American(English) ,British, Spanish,
                      Russian
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Avatar
                      alt="M2"
                      onClick={() => handleModel('Jemima Taylor HD')}
                      className={
                        activeModel === 'Jemima Taylor HD'
                          ? 'active-model'
                          : ''
                      }
                      src="../public/images/f2.jpg"
                      style={{ width: '92px', height: '92px' }}
                    />
                    <Typography variant="caption">
                      can speak :American(English) ,British, Spanish,
                      Russian,Polish,Hindi
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Avatar
                      alt="M1"
                      onClick={() => handleModel('Laura Agarwal')}
                      className={
                        activeModel === 'Laura Agarwal'
                          ? 'active-model'
                          : ''
                      }
                      src="../public/images/f3.jpg"
                      style={{ width: '92px', height: '92px' }}
                    />
                    <Typography variant="caption">
                      can speak :American(English) ,British, Spanish,
                      Russian,Polish,Hindi
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </Paper>
        </Grid>
      )}

      <Grid md={12} container>
        <Grid md={4} item>
          <Paper style={{ margin: '0.5em', padding: '0.5em' }}>
            <Grid md={12}>
              <Typography variant="h8" component="h8">
                Select Model Position
              </Typography>
            </Grid>
            <Grid>
              <FormControl
                variant="outlined"
                style={{ width: '90%', margin: '1em' }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Position
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="modelPosition"
                  value={modelPosition}
                  onChange={handleModelPosition}
                  label="Position"
                >
                  <MenuItem value="left">Bottom Left</MenuItem>
                  <MenuItem value="right">Bottom Right</MenuItem>
                  <MenuItem value="center">Bottom Center</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Paper>
        </Grid>
        <Grid md={4} item>
          <Paper style={{ margin: '0.5em', padding: '0.5em' }}>
            <Grid md={12}>
              <Typography variant="h8" component="h8">
                Select Model Screen Size
              </Typography>
            </Grid>
            <Grid>
              <FormControl
                variant="outlined"
                style={{ width: '90%', margin: '1em' }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Screen Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="modelSize"
                  value={modelSize}
                  onChange={handleModelSize}
                  label="Position"
                >
                  <MenuItem selected value="small">
                    Small
                  </MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid md={12}>
          <Paper style={{ margin: '0.5em', padding: '1em' }}>
            <Grid md={12}>
              <Typography variant="h8" component="h8">
                Scene Text
              </Typography>
            </Grid>
            <TextField
              id="outlined-multiline-static"
              fullWidth
              // style={{ width: '100%' }}
              // multiline
              // rows={5}
              value={text}
              name="sceneText"
              placeholder="track text"
              onChange={handleTextChange}
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Grid container>
          <Grid md={12}>
            <Paper style={{ margin: '0.5em', padding: '0.5em' }}>
              <Grid md={12}>
                <Typography variant="h8" component="h8">
                  Select Scene Type
                </Typography>
              </Grid>
              <Grid md={12} container>
                {showModel === 'image' && (
                  <Grid md={4}>
                    <Typography variant="caption" component="p">
                      Image
                    </Typography>
                    {/* <input type="file" /> */}
                    <TextField
                      name="imageUrl"
                      placeholder="image url"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                )}
                {showModel === 'video' && (
                  <Grid md={4}>
                    <Typography variant="caption" component="p">
                      Video
                    </Typography>
                    {/* <input type="file" />
                     */}
                    <TextField
                      name="videoUrl"
                      placeholder="video url"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        {showModel === 'image' && (
          <Grid md={12}>
            <Paper style={{ margin: '0.5em', padding: '1em' }}>
              <Grid md={12}>
                <Typography variant="h8" component="h8">
                  Display Timing Of Image
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
                  type="number"
                  name="startTimeGap"
                  // value={trackState.startTimeGap}
                  // onChange={handleChange}
                  placeholder="start time (milliseconds)"
                  variant="outlined"
                />

                <TextField
                  id="outlined-basic"
                  label="End Time"
                  type="number"
                  name="endTimeGap"
                  // value={trackState.endTimeGap}
                  // onChange={handleChange}
                  placeholder="end time (milliseconds)"
                  variant="outlined"
                />
              </Grid>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default VideoCreationDetail;
