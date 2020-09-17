import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar, Collapse} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link as Scroll} from 'react-scroll';
import bg from '../assets/header_bg.jpg';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import {HeaderCarousel} from './Carousel';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontFamily: 'Nunito',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        borderBottom: '3px solid #fe8d12',
        // backgroundImage: `url(${bg})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',       
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
    menuButton: {        
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },
    mainTitle: {       
        fontFamily: 'Nunito',
        fontWeight: '900',       
        letterSpacing: '7px',     
        fontSize: '3.5rem',
        textAlign: 'center',
        [
            theme
                .breakpoints
                .down('md')
        ]: {
            fontSize: '2rem',
            letterSpacing: '3px', 
        }
    },   
    topMenu: {
        position: 'absolute',
        right: '330px',
        [theme.breakpoints.between('xs', 'sm')]: {
            display: 'none'
        }
    },
    menuItem: {
        cursor: 'pointer',
        fontFamily: 'Nunito',
        fontWeight: '600',
        fontSize: '.9rem',
        textTransform: 'uppercase',
        color: '#fe8d12',
        marginRight: '20px',        
        '&:hover': {
            textDecoration: 'underline'
        }
       
    },
    goDown: {
        color: '#fe8d12',
        fontSize: '3rem'
    },
    titleCont: {
        display: 'none',
        textAlign: 'center',
        [theme.breakpoints.between('xs', 'md')]: {
            display: 'block'
        }
    },
    callButton: {
        position: 'absolute',
        right: '-40px',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
            
        },
        color: '#fe8d12',
        borderColor: '#fe8d12'
    },
    emailButton: {
        position: 'absolute',
        right: '160px',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
            
        },
        color: '#fe8d12',
        borderColor: '#fe8d12'
    },
    slider: {
       display: 'none'
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
                            <span className={s.coloredText}>BПРОК</span>
                        </h1>
                    </Scroll>
                    <div className={s.topMenu}>
                         <Scroll to='about' smooth={true} className={s.menuItem}>
                             О нас
                        </Scroll>
                         <Scroll to='works' smooth={true} className={s.menuItem}>
                             Работы
                        </Scroll>
                         <Scroll to='contacts' smooth={true} className={s.menuItem}>
                             Контакты
                        </Scroll>
                    </div>
                   
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
                    <Button
                        className={s.emailButton}
                        variant="outlined"
                        href="mailto: Wprok@tut.by"
                        startIcon={<EmailIcon />}
                    >
                    Wprok@tut.by
                </Button>
                    <IconButton className={s.menuButton} onClick={toggleMenu}>
                        <SortIcon className={s.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={anim} {...(anim ? { timeout: 1100 } : {})} collapsedHeight={50}>
                <div className={s.titleCont}>
                    <h1 className={s.mainTitle}>
                        Строительная компания <br />
                       В<span className={s.coloredText}>ПРОК</span>
                    </h1>
                    <Scroll to='about' smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={s.goDown}/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
            <HeaderCarousel className={s.slider} />
           
        </div>
    )
}

export default Header;   