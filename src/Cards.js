import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Charts from './ExampleChart.js';
import SkuItem from './SkuItem.js';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '275px',
        height: '424px',
        borderRadius: 0
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    cardHeader: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        textAlign: 'left',
        color: '#4D4F5C',
        padding: '8px 16px 0 16px'
    },
    chartCard: {
        width: '570px',
        height: '424px',
        borderRadius: 0
    },
    displayFlex: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    marginItem: {
        margin: '16px 0'
    }
}));

export default function Cards() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={classes.displayFlex}>
            <Card className={classes.chartCard}>
                <CardHeader
                    className={classes.cardHeader}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    titleTypographyProps={{ variant: 'subtitle2' }}
                    title="AVERAGE PURCHASE VALUE"
                />
                <CardContent>
                    <Charts />
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardHeader
                    className={classes.cardHeader}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    titleTypographyProps={{ variant: 'subtitle2' }}
                    title="BEST SELLING SKU"
                />
                <CardContent>
                    <SkuItem />
                    <SkuItem />
                    <SkuItem />
                    <SkuItem />
                    <SkuItem />
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardHeader
                    className={classes.cardHeader}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    titleTypographyProps={{ variant: 'subtitle2' }}
                    title="TOP COMPETITOR SKU"
                />
                <CardContent >
                    <SkuItem />
                    <SkuItem />
                    <SkuItem />
                    <SkuItem />
                    <SkuItem />
                </CardContent>
            </Card>
        </div>

    );
}