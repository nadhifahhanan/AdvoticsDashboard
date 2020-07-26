import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ProductPic from './assets/ProductPic.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '243px',
        height: '60px',
        borderRadius: 0,
        boxShadow: 'none',
        border: '0.5px solid #C5C5C59C',
        margin: '4px 0'
    },
    details: {
        width: '100%',
        padding: '5px 12px',
        position: 'relative'


    },
    content: {
        paddingBotttom: '0',
        padding: 0,
        textAlign: 'left'

    },
    cover: {
        minWidth: '60px',
        height: '60px'
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    priceCount: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={ProductPic}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="subtitle1" variant="subtitle1" style={{ display: 'block' }}>
                        [Nama Produk]
                    </Typography>
                    <div className={classes.priceCount}>
                        <Typography variant="caption" color="textSecondary">
                            Rp XXX
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            [jml terjual]
                        </Typography>
                    </div>


                </CardContent>
            </div>

        </Card>
    );
}