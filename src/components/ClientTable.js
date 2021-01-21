import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import ClientDialog from '../components/ClientDialog';

import theme from '../themes/theme';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

// Sets columns names for table
const columns = [
  { id: 'name', label: 'Name', minWidth: 50 },
  {
    id: 'headcount',
    label: 'Head Count',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'account',
    label: 'Public',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75vw',
    maxWidth: '700px'
  },
  container: {
    maxHeight: 440
  },
  head: {
    backgroundColor: theme.palette.main
  }
}));

function ClientTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [clientRows, setClientRows] = React.useState([]);
  const [clientDialogOpen, setClientDialogOpen] = React.useState(false);
  const [clientId, setClientId] = React.useState(null);

  const handleClientDialogClose = () => {
    setClientDialogOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (event, id) => {
    setClientId(id);
    setClientDialogOpen(true);
  };

  const createData = (id, name, headcount, is_public) => {
    return { id, name, headcount, is_public };
  };

  const createRows = (clients) => {
    let rows = clients.map((client) =>
      createData(client.id, client.name, client.headcount, client.is_public)
    );
    setClientRows([...rows]);
  };

  React.useEffect(() => {
    createRows(props.clients);
  }, [props.clients]);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {clientRows.length > 0
              ? clientRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        onClick={(event) => handleClick(event, row.id)}
                      >
                        <TableCell
                          component="th"
                          id={row.id}
                          scope="row"
                          align="left"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.headcount}</TableCell>
                        <TableCell align="center" padding="checkbox">
                          <Checkbox
                            checked={row.is_public}
                            inputProps={{ 'aria-labelledby': 'Public Account' }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={clientRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <ClientDialog
        open={clientDialogOpen}
        handleClose={handleClientDialogClose}
        clientId={clientId}
      />
    </Paper>
  );
}

export default ClientTable;
