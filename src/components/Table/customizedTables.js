import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Grid,
} from '@material-ui/core'
import moment from 'moment'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow)

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
})

const CustomizedTables = ({
    data = [
        { title: 'sleep', date: '99/99/9999 99: 99' },
        { title: 'work', date: '55/55/5555 55: 55' },
    ],
    setBtnText,
    setTodoDate,
    setToDoText,
    setRowUpdate,
    handleAction
}) => {
    const classes = useStyles()

    return (
        <TableContainer component={Paper} id="table-container">
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell id="table-cell-no">
                            No.
                        </StyledTableCell>
                        <StyledTableCell id="table-cell-title" align="center">
                            Title
                        </StyledTableCell>
                        <StyledTableCell id="table-cell-date" align="center">
                            Date
                        </StyledTableCell>
                        <StyledTableCell
                            id="table-cell-action"
                            align="right"
                        ></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.title}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {moment(row.date).format('MM-DD-YYYY')}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {/* action */}
                                <Grid container justify="center" spacing={1}>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            onClick={() => {
                                                setBtnText('Update')
                                                setTodoDate(row.date)
                                                setToDoText(row.title)
                                                setRowUpdate(row)
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            size="small"
                                            onClick={() => {
                                                handleAction('Delete', row._id)
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomizedTables
