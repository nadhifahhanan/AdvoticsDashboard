import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import CalendarIcon from './assets/Calendar.png';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Calendars from './Calendars.js';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { useSelector, useDispatch } from 'react-redux'

import combineActions from './action'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    dateButton: {
        background: 'white',
        boxShadow: '0px 2px 3px #00000029',
        borderRadius: '2px',
        minWidth: '481px',
        maxHeight: '48px'
    },
    nav: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    expand: {
        transform: 'rotate(0deg)',
        margin: 0,
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),

    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    paperStyle: {
        display: 'flex',
        zIndex: '1300',
        maxWidth: '1000px',
        padding: '16px 0',
        zIndex: '10',


    }
}));

export default function MenuListComposition() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const handleClickAway = () => {
        setOpen(false);
      };

    const dispatch = useDispatch()

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
                <div>
                    <Button
                        className={classes.dateButton}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <div className={classes.nav}>
                            <img src={CalendarIcon} style={{ hegiht: '22px', width: '22px' }} />
                            <span style={{ fontSize: '0.75rem', color: '#8B8B8B' }}>Period</span>
                            <span></span>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>

                        </div>
                    </Button>
                    <Popper style={{ zIndex: '10' }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'right top' : 'right bottom', }}
                            >
                                <Paper className={classes.paperStyle} >

                                    <Grid item xs={2} style={{ margin: '0 14px' }}>
                                        <div>
                                            <List>
                                                <ListItem button onClick={() => dispatch(combineActions.calendarAction.today())}>
                                                    <ListItemText> Today </ListItemText>
                                                </ListItem>
                                                <Divider />
                                                <ListItem button onClick={() => dispatch(combineActions.calendarAction.yesterday())}>
                                                    <ListItemText> Yesterday </ListItemText>
                                                </ListItem>
                                                <Divider />
                                                <ListItem button onClick={() => dispatch(combineActions.calendarAction.weekAgo())}>
                                                    <ListItemText> Last 7 days </ListItemText>
                                                </ListItem>
                                                <Divider />
                                                <ListItem button onClick={() => dispatch(combineActions.calendarAction.monthAgo())}>
                                                    <ListItemText> Last 30 days </ListItemText>
                                                </ListItem>
                                                <Divider />
                                                <ListItem button>
                                                    <ListItemText> This Month </ListItemText>
                                                </ListItem>
                                                <Divider />
                                                <ListItem button>
                                                    <ListItemText> Custom </ListItemText>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Grid>
                                    <Divider orientation='vertical' style={{ height: 'auto' }} />
                                    <Grid item xs={5} style={{ margin: '0 14px' }}>


                                        <Calendars startDate={true} />


                                    </Grid>
                                    <Grid item xs={5} style={{ margin: '0 14px' }}>
                                        <Calendars endDate={true} />
                                    </Grid>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        </ClickAwayListener>
    );
}