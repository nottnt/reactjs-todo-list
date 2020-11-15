import { useEffect, useState } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'
import moment from 'moment'
import Nav from './components/Nav/nav'
import CustomizedTables from './components/Table/customizedTables'
import {
    getToDoList,
    createToDoList,
    updateToDoList,
    deleteToDoList,
} from './services'

const UseStyles = makeStyles((theme) => ({
    containerStyle: {
        paddingTop: '8rem',
    },
    input: {
        border: '1px solid black',
    },
    blockItem: {
        padding: '1rem',
        width: '100%',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 220,
    },
    Skeleton: {
        width: '600px',
    },
}))

const Container = () => {
    const classes = UseStyles()
    const [todoText, setToDoText] = useState('')
    const [todoDate, setTodoDate] = useState('')
    const [btnText, setBtnText] = useState('Add')
    const [isLoading, setIsLoading] = useState(true)
    const [toDoData, setTodoData] = useState([])
    const [rowUpdate, setRowUpdate] = useState(null)

    useEffect(() => {
        initFetch()
    }, [])

    const initFetch = async () => {
        setIsLoading(true)
        const { data: result } = await getToDoList()
        setTodoData(result.data)
        setIsLoading(false)
    }

    const handleAction = async (type, id) => {
        if (type === 'Add') {
            const body = {
                title: todoText,
                date: '2020-11-17T17:00:00.000Z',
            }
            await createToDoList(body)
        } else if (type === 'Update') {
            const body = {
                id: rowUpdate._id,
                title: todoText,
                date: '2020-11-17T17:00:00.000Z',
            }
            await updateToDoList(body)
            setBtnText('Add')
            setToDoText('')
            setTodoDate('')
        } else if (type === 'Delete') {
            await deleteToDoList(id)
            setToDoText('')
            setTodoDate('')
        }

        await initFetch()
    }

    return (
        <>
            <Nav />
            <Grid container className={classes.containerStyle} spacing={2}>
                <Grid className={classes.blockItem}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <TextField
                                id="todo-textbox"
                                label="Todo"
                                variant="outlined"
                                value={todoText}
                                onChange={(event) =>
                                    setToDoText(event.target.value)
                                }
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.blockItem}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <TextField
                                id="datetime-local"
                                label="Todo Date"
                                type="date"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => {
                                    setTodoDate(event.target.value)
                                }}
                                value={
                                    todoDate
                                        ? moment(todoDate).format('YYYY-MM-DD')
                                        : moment().format('YYYY-MM-DD')
                                }
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.blockItem}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Button
                                id="btn-add"
                                variant="outlined"
                                color="primary"
                                onClick={() => handleAction(btnText)}
                            >
                                {btnText}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.blockItem}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            {isLoading ? (
                                <div className={classes.Skeleton}>
                                    <Skeleton />
                                    <Skeleton animation={false} />
                                    <Skeleton animation="wave" />
                                </div>
                            ) : (
                                <CustomizedTables
                                    data={toDoData}
                                    setBtnText={setBtnText}
                                    setTodoDate={setTodoDate}
                                    setToDoText={setToDoText}
                                    setRowUpdate={setRowUpdate}
                                    handleAction={handleAction}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Container
