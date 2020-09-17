import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {list} from '../data/data'
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {Link as Scroll} from 'react-scroll';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    menuLogo: {
        fontFamily: 'Nunito',
        textAlign: 'center'
    },
    coloredText: {
        color: '#fe8d12'
    },
    paperAnchorLeft: {
        width: '250px'
    },
    callButton: {
        marginTop: '50px',
        position: 'absolute',
        right: '40px',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
            
        },
        color: '#fe8d12',
        borderColor: '#fe8d12'
    },
    emailButton: {
        marginTop: '100px',
        position: 'absolute',
        right: '50px',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
            
        },
        color: '#fe8d12',
        borderColor: '#fe8d12'
    },
   
}));

export const SideMenu = ({isMenuOpen, toggleMenu}) => {
    const s = useStyles();
    return (
        <Drawer
            anchor='left'
            open={isMenuOpen}
            onClose={toggleMenu}
            transitionDuration={{
            enter: 800,
            exit: 500
            }}
            classes={{
                paperAnchorLeft:
                    s.paperAnchorLeft
            }}>
            <h1 className={s.menuLogo}>
                В<span className={s.coloredText}>ПРОК</span>
            </h1>
            <List>
                {list.map(({
                    text,
                    icon,
                    link
                }, index) => {
                    return (
                        <Scroll key={index} to={link} smooth={true}>
                            <ListItem button onClick={toggleMenu}>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        </Scroll>
                    )
                })
                }
                <Button
                        className={s.callButton}
                        variant="outlined"
                        href="tel:+375297148916"
                        startIcon={<CallIcon />}
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
            </List>
        </Drawer>
    )
}