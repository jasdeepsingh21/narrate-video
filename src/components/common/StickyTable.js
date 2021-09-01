import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
    // marginTop: '1em',
  },
  container: {
    maxHeight: 530,
  },
});

export default function StickyTable({
  tableHead,
  tableContent,
  showPagination,
}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHead.map((column, index) => (
                <TableCell
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  align={column.align}
                  className="primary-table-header"
                  style={{
                    minWidth: column.minWidth
                      ? column.minWidth
                      : '25%',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{tableContent()}</TableBody>
        </Table>
      </TableContainer>
      {showPagination === 'true' ? (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={tableContent.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      ) : (
        ''
      )}
    </Paper>
  );
}
