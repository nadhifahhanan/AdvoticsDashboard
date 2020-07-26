import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Logout from './assets/logout.png';
import Cards from './Cards';
import Button from '@material-ui/core/Button';
import Avatar from './assets/Profile.svg';
import DashboardIcon from './assets/Dashboardicon.png';
import DatePicker from './DatePicker.js';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import HelpIcon from './assets/Help.png';
import TotalSales from './assets/TotalSales.png';
import SalesTurnover from './assets/SalesTurnover.png';
import Calendars from './Calendars.js';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#ffffff',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    zIndex: '0',
    overflowY: 'hidden'
  },
  logo: {
    height: '32px',
    width: '129px',
  },
  displayFlex: {
    display: 'flex',
  },
  accountNav: {
    display: 'flex',
    alignItems: 'center',
  },
  logoContent: {
    lineHeight: '40px',
    bottom: 0,
    position: 'absolute',
  },
  nav: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeMenu: {
    background: '#D2D2D2',

  },
  dashboardIcon: {
    textAlign: 'center',
    borderRadius: '4px'

  },
  marginSection: {
    margin: '8px'
  },
  imageBase: {
    position: 'relative',
    width: '276px',
    height: '104px',
    marginLeft: '-8px'
  },
  imageTop: {
    position: 'absolute',
    width: '49px',
    height: '43px',
    top: '37px',
    left: '175px'
  }
}));

export default function Navigations() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className={classes.nav}>
            <div className={classes.displayFlex}>
              <img src="https://www.advotics.com/wp-content/uploads/2019/07/advotics-logo-optimize.jpg" className={classes.logo}>
              </img>
              <div>
                <div className={classes.logoContent}>
                  <span style={{ color: '#5B5B5B', margin: '4px', fontSize: '11px' }}>powered by</span>
                  <img src="https://www.advotics.com/wp-content/uploads/2019/07/advotics-logo-optimize.jpg" style={{ width: '72px', height: '18px', marginBottom: '-5px' }}>
                  </img>
                </div>

              </div>
            </div>
            <div className={classes.accountNav}>
              <div style={{ lineHeight: '16px' }}>
                <span style={{ color: '#727272', fontSize: '14px', display: 'block', fontWeight: 'bold' }}>Username</span>
                <span style={{ color: '#727272', fontSize: '10px', fontWeight: 'lighter' }}>Company Name</span>
              </div>
              <img src={Avatar} style={{ height: '32px', width: '32px', margin: '0 20px 0 16px' }}></img>
              <img src={Logout} style={{ height: '15px', width: '15px' }}></img>
            </div>

          </div>


        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

          <ListItem button>
            <ListItemIcon><MenuIcon /></ListItemIcon>
          </ListItem>
          <ListItem button className={classes.activeMenu}>
            <ListItemIcon >
              <div style={{ height: '24px', width: '24px', background: 'white' }} className={classes.dashboardIcon}>
                <img src={DashboardIcon} style={{ height: '17px', width: '17px', background: 'white' }} />
              </div>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.nav} style={{ margin: '1rem 0' }}>
          <span style={{ fontSize: '28px', color: '#707070C4', fontWeight: '400' }}>Dashboard</span>
          <DatePicker />
        </div>
        <div className={classes.nav} style={{ background: '#37B04C', height: '48px', padding: '0 1rem', color: 'white', margin: '2rem 0 1rem 0' }}>
          <span style={{ fontWeight: 'bold' }}>MARKET INSIGHTS</span>
          <div className={classes.accountNav}>
            <img src={HelpIcon} style={{ hegiht: '20px', width: '20px', margin: '0 0.5rem' }} />
            <a href='#' style={{ color: 'white' }}>Click Here for Help</a>
            <IconButton style={{ paddingRight: '0', color: 'white' }}>
              <ExpandLessIcon />
            </IconButton>
          </div>
        </div>
        <div style={{ margin: '0 0 1rem 0', textAlign: 'left', position: 'relative' }}>
          <img src={TotalSales} className={classes.imageBase} />
          <img src={SalesTurnover} className={classes.imageTop} />
        </div>
        <Cards />
      </main>
    </div>
  );
}