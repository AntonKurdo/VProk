import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import pic from '../assets/photos/1.jpg';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: '10%',
        left: 'calc(50% - 350px)',
        width: '700px',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '300px',
            left: 'calc(50% - 150px)',
            top: '30%'
        }
    },
    pic: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    text: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '150px',
        backgroundColor: '#000',
        opacity: '.7',
        color: '#fff',
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '50px',
            fontSize: '.5rem',
            overflow: 'hidden',
            lineHeight: '9px'
        }
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px'
    }
}));

export default function PicModal({open, handleClose , img = pic}) {
    const classes = useStyles();   
   
    return (
        <div>           
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                <div className={classes.paper}>
                    <img className={classes.pic} src={img} alt='pic' />
                    <div className={classes.text}>
                        <div className={classes.textTitle}>House #1</div>
                        <div className={classes.textDesc}>Et nostrud adipisicing pariatur quis non dolore ullamco irure ea ut aliquip Lorem. Ex nostrud ullamco duis excepteur ad aliqua tempor eiusmod nostrud ad veniam eu nulla. Ullamco duis voluptate ut officia labore fugiat nulla anim exercitation voluptate magna esse qui.</div>
                    </div>
                    <IconButton
                        onClick={handleClose}
                        className={classes.closeButton} >
                        <CloseIcon  />
                    </IconButton>
                </div>
            </Modal>
        </div>
    );
}
