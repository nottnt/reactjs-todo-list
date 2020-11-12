import { useEffect, useState } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Nav from './Nav/nav'
import CustomizedTables from './Table/customizedTables'

const UseStyles = makeStyles((theme) => ({
    containerStyle: {
        paddingTop: '8rem',
    },
    input: {
        border: '1px solid black',
    },
    blockItem: {
        padding: '3rem',
    },
}))

export const container = () => {
    const classes = UseStyles()

    return (
        <>
            <Nav />
            <Grid container className={classes.containerStyle} spacing={2}>
                <Grid xs={12} className={classes.blockItem}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <TextField
                                id="todo-basic"
                                label="To do"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.blockItem}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <CustomizedTables />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default container
