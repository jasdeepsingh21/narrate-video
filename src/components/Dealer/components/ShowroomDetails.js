import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import InputText from '../../../Uikit/InputText';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const top100Films = [
  { title: 'Acura' },
  { title: 'Aston-Martin' },
  { title: 'Audi' },
  { title: 'Bentley' },
  { title: 'BMW' },
  { title: 'Bugatti' },
  { title: 'Buick' },
  { title: 'Cadillac' },
  { title: 'Chevrolet' },
  { title: 'Chrysler' },
  { title: 'Citroen' },
  { title: 'Dodge' },
  { title: 'Ferrari' },
  { title: 'Fiat' },
  { title: 'Ford' },
  { title: 'Geely' },
  { title: 'Genesis' },
  { title: 'GMC' },
  { title: 'Honda' },
  { title: 'Hyundai' },
  { title: 'Infiniti' },
  { title: 'Jaguar' },
  { title: 'Jeep' },
  { title: 'Kia' },
  { title: 'Koenigsegg' },
  { title: 'Lamborghini' },
  { title: 'Lancia' },
  { title: 'Land Rover' },
  { title: 'Lexus' },
  { title: 'Lincoln' },
  { title: 'Lotus' },
  { title: 'Maserati' },
  { title: 'Maybach' },
  { title: 'Mazda' },
  { title: 'McLaren' },
  { title: 'Mercedes' },
  { title: 'Mini' },
  { title: 'Mitsubishi' },
  { title: 'Nissan' },
  { title: 'Opel' },
  { title: 'Pagani' },
  { title: 'Peugeot' },
  { title: 'Pontiac' },
  { title: 'Porsche' },
  { title: 'Ram' },
  { title: 'Renault' },
  { title: 'Rolls-Royce' },
  { title: 'Skoda' },
  { title: 'Smart' },
  { title: 'Subaru' },
  { title: 'Suzuki' },
  { title: 'Tesla' },
  { title: 'Toyota' },
  { title: 'Volkswagen' },
  { title: 'Volvo' },
];
function ShowroomDetails() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" className="title">
                Showroom Details
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <Field
                className="field-textbox"
                name="name"
                component={InputText}
                type="text"
                label="Showroom Name"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                className="field-textbox"
                name="name"
                component={InputText}
                type="text"
                label="GST Number"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={3}>
              <Field
                className="field-textbox"
                name="name"
                component={InputText}
                type="text"
                label="Address"
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                className="field-textbox"
                name="name"
                component={InputText}
                type="text"
                label="City"
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                className="field-textbox"
                name="name"
                component={InputText}
                type="text"
                label="State"
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                className="field-textbox"
                name="name"
                component={InputText}
                type="text"
                label="Zip code"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(option, { selected }) => (
                  <>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </>
                )}
                renderInput={(params) => (
                  <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    variant="outlined"
                    className="field-textbox"
                    label="Select brands you deals in"
                  />
                )}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ShowroomDetails;
