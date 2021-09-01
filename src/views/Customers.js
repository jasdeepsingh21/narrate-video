import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
// import Avatar from '@material-ui/core/Avatar';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#109de7',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
function Customers() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const rows = [
    createData(
      'Amit Kumar',
      'amit@gmail.com',
      8866225533,
      '9 Nov 2021',
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />,
    ),
    createData(
      'Amit Kumar',
      'amit@gmail.com',
      8866225533,
      '9 Nov 2021',
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />,
    ),
    createData(
      'Amit Kumar',
      'amit@gmail.com',
      8866225533,
      '9 Nov 2021',
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />,
    ),
    createData(
      'Amit Kumar',
      'amit@gmail.com',
      8866225533,
      '9 Nov 2021',
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />,
    ),
    createData(
      'Amit Kumar',
      'amit@gmail.com',
      8866225533,
      '9 Nov 2021',
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />,
    ),
    createData(
      'Amit Kumar',
      'amit@gmail.com',
      8866225533,
      '9 Nov 2021',
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />,
    ),
    createData(
      'Amit Kumar',
      'amit@gmail.com',
      8866225533,
      '9 Nov 2021',
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />,
    ),
    createData(
      'Amit Kumar',
      'amit@gmail.com',
      8866225533,
      '9 Nov 2021',
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />,
    ),
  ];
  const classes = useStyles();
  return (
    <div className="page-wrapper">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Customers</Typography>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
              <StyledTableCell align="right">
                Member since
              </StyledTableCell>
              <StyledTableCell align="right">
                Account Status
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.calories}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.fat}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.carbs}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.protein}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Customers;
