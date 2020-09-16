import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar, Collapse} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link as Scroll} from 'react-scroll';
import bg from '../assets/header_bg.jpg';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontFamily: 'Nunito',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        borderBottom: '3px solid #fe8d12',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.between('xs', 'md')]: {
            backgroundPosition: 'center'
        }
    },
    appBar: {
        background: 'none',
        color: '#000'
    },
    logo: {
        cursor: 'pointer'
    },
    coloredText: {
        color: '#fe8d12'
    },
    wrapper: {
        width: '87%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    icon: {
        color: '#fe8d12',
        fontSize: '2rem'
    },
    mainTitle: {
        fontSize: '3rem',
        textAlign: 'center',
        [
            theme
                .breakpoints
                .down('md')
        ]: {
            fontSize: '2rem'
        }

    },
    goDown: {
        color: '#fe8d12',
        fontSize: '3rem'
    },
    titleCont: {
        textAlign: 'center'
    },
    callButton: {
        position: 'absolute',
        right: '100px',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
            
        },
        color: '#fe8d12',
        borderColor: '#fe8d12'
    }
}));

const Header = ({toggleMenu}) => {
    const [anim,
        setAnim] = useState(false);
    useEffect(() => {
        setAnim(true);
    }, []);

    const s = useStyles();
    return (
        <div className={s.root} id='header'>
            <AppBar className={s.appBar} elevation={0}>
                <Toolbar className={s.wrapper}>
                    <Scroll to='header' smooth={true}>
                        <h1 className={s.logo}>
                            W<span className={s.coloredText}>Prok</span>
                        </h1>
                    </Scroll>
                    <Button
                        className={s.callButton}
                        variant="outlined"
                        href="tel:+375297148916"
                        startIcon={                            
                            <CallIcon />
                        }
                    >
                    +375 29 714-89-16
                    </Button>
                    <IconButton onClick={toggleMenu}>
                        <SortIcon className={s.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={anim} {...(anim ? { timeout: 1100 } : {})} collapsedHeight={50}>
                <div className={s.titleCont}>
                    <h1 className={s.mainTitle}>
                        Строительная компания
                        <br/>
                        W<span className={s.coloredText}>Prok</span>
                    </h1>
                    <Scroll to='about' smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={s.goDown}/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}

export default Header;