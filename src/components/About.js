import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {dataAbout} from '../data/data';
import {Fade, Collapse} from '@material-ui/core';
import useWindowPosition from '../hooks/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    about: {
        height: '100vh',
        backgroundColor: '#eff2f1',
        paddingTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '3px solid #fe8d12',
        [theme.breakpoints.down('md')]: {
            height: '100%'
        }
    },
    title: {
        fontSize: '2rem',
        fontFamily: 'Nunito',         
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem'
        }     
        
    },
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '70%',
        marginTop: '50px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            margin: '10px 0 20px'
        }

    },
    aboutItem: {
        width: '31%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, .1)',
        padding: '15px',
        transition: 'all .2s linear',
        borderRadius: '5px',
        "&:hover": {
            backgroundColor: 'rgba(0, 0, 0, .2)'
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginBottom: '25px'
        }
    },
    itemTitle: {
        textAlign: 'center',
        margin: '20px 0',
        fontFamily: 'Nunito',
        fontWeight: '900',
        fontSize: '1.3rem',       
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '10px 0',
            fontSize: '1.8rem'
        }
    },
    itemIcon: {
        color: '#fe8d12'        
    },
    itemDescription: {
        textAlign: 'justify',
        fontFamily: 'Arial',
        fontSize: '.8rem',
        textIndent: '1rem',        
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '10px 0',
            fontSize: '1.3rem'
        },
        
    }
}));

export const About = () => {
    const s = useStyles();
    const checked = useWindowPosition('about');
    return (
        <div className={s.about} id='about'>
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
                <h2 className={s.title}>О нас</h2>
            </Collapse>

            <div className={s.main}>
                {dataAbout.map(({
                    icon,
                    title,
                    description
                }, index) => {
                    return (
                        <Fade
                            className={s.aboutItem}
                            key={index}
                            in={checked}
                            {... (checked ? { timeout: 2000 } : {})}>
                            <div >
                                <div className={s.itemIcon}>
                                    {icon}
                                </div>
                                <div className={s.itemTitle}>
                                    {title}
                                </div>
                                <div className={s.itemDescription}>
                                    {description}
                                </div>
                            </div>
                        </Fade>
                    )
                })
}
            </div>
        </div>
    )
}