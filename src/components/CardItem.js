import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme =>({
    root: {
        width: '25%',
        marginRight: '20px',
        marginBottom: '20px',
        [theme.breakpoints.between('xs', 'md')]: {
            width: '80%',
            margin: '0 auto 10px',    
            '&:nth-child(n+3)': {
                display: 'none'
            }
        }       
    },
    rootAll: {
        [theme.breakpoints.between('xs', 'md')]: {
            width: '80%',
            margin: '0 auto 10px',   
           
        }       
    },
    media: {
        height: 250,      
    }
}));

export default function CardItem({img, isAll}) {
    const classes = useStyles();

    return (
        <Card className={!isAll ? classes.root : classes.rootAll}>
            <CardActionArea>
                <CardMedia className={classes.media} image={img} title="Contemplative Reptile"/>
            </CardActionArea>
        </Card>
    );
}
