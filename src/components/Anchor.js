import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {IconButton} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {Link as Scroll} from 'react-scroll';


const useStyles = makeStyles(theme => ({
    anchor: {
        position: "fixed",
        bottom: '40px',
        right: '40px',
        display: 'block',
        opacity: '.6',
        transition: 'all .1 linear',
        '&:hover': {
            opacity: '1'
        },
        [theme.breakpoints.between('xs', 'md')]: {
            bottom: '20px',
            right: '20px',            
        }
    }
}));

export const Anchor = () => {
    const s = useStyles();
  
    return (
        <Scroll className={s.anchor} to='header' smooth={true}>
            <IconButton>
                <ExpandLessIcon style={{fontSize: '2.5rem'}}/>
            </IconButton>
        </Scroll>
    )
}
