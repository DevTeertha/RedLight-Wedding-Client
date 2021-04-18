import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { myContext } from '../../../App';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        fontSize: '5em',
    },
}));

export default function SnackBar() {
    const { openState } = useContext(myContext);
    const [open, setOpen] = openState;

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({ isOpen: false });
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Snackbar open={open.isOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success">
                    {open.massage}
                </Alert>
            </Snackbar>
        </div>
    );
}