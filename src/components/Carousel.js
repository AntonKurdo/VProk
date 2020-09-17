import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import slide1 from '../assets/slide_1.jpg';
import slide2 from '../assets/slide_2.jpg';

const useStyles = makeStyles(theme => ({
    slider: {
        position: 'absolute',        
        [theme.breakpoints.between('xs', 'sm')]: {
            display: 'none'
        }
    },
    container: {
        width: '100%',
        height: '100vh'
    },
    img: {
        width: '100%'
    }
}))

export  const HeaderCarousel = (props) => {
    var items = [
        {
            img: slide1
        },
        {
            img: slide2
        }
    ];

    const s = useStyles();
 
    return (
        <Carousel
            className={s.slider}
            animation='slide'
            timeout={500}
            indicators={false}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
const Item = (props) => {
    const s = useStyles();
    return (
        <Paper>           
            <div className={s.container}>
                <img className={s.img} src={props.item.img} alt='img' />
            </div>        
        </Paper>
    )
}