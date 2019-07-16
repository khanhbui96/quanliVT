import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {Clear, Add} from '@material-ui/icons'
import {Link} from 'react-router-dom'; 
import { Typography, IconButton, Fab} from '@material-ui/core';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    }
  },
}))(TableRow);

function createData(name, rank, position, unit, infor) {
  return { name, rank, position, unit, infor};
}

const rows = [
  createData('bui trong khanh', '1/', 'bt', 'bVT', <a to='/test'>xem thêm</a>),
  
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    marginTop: 10
  },
}));

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
    <Typography style={{textAlign: 'center'}}variant='h4'>Danh sách quân nhân</Typography>
      <div>
        <TextField
          style={{ margin: 8 }}
          placeholder='Tìm kiếm'
        />
        <IconButton ><Clear/></IconButton>
        <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin} style={{float: 'right'}}>
          <Add />
        </Fab>
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Họ và tên</StyledTableCell>
            <StyledTableCell align="center">Cấp bậc</StyledTableCell>
            <StyledTableCell align="center">Chức vụ</StyledTableCell>
            <StyledTableCell align="center">Đơn vị</StyledTableCell>
            <StyledTableCell align="center">Thông tin chi tiết</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.rank}</StyledTableCell>
              <StyledTableCell align="center">{row.position}</StyledTableCell>
              <StyledTableCell align="center">{row.unit}</StyledTableCell>
              <StyledTableCell align="center"><Link to='/test'>Xem</Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}