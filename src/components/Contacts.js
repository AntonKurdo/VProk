import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import bg from '../assets/contacts_bg.jpg';

import {contacts} from '../data/data';
import { Footer } from './Footer';

const useStyles = makeStyles(theme => ({
    contacts: {
        position: 'relative',
        height: '100vh',        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#c2c2c2',
        fontFamily: 'Nunito',
        [theme.breakpoints.down('md')]: {
            height: '100%',
            paddingBottom: '20px'
        }
    },
    title: {
        fontSize: '2rem'       
    },
    container: {
        height: '80%',       
        display: 'flex',
        width: '85%',
        justifyContent: 'center',
        alignItems: "center",
        [theme.breakpoints.between('xs', 'sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }

    },
    contactsItem: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50px'
    },
    itemIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: '#c2c2c2',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '80px',
            height: '80px',
            fontSize: '10px'
        }
    },
    itemText: {
        width: '240px',
        textAlign: 'center',
        marginTop: '30px',
        fontSize: '1.5rem',
        [theme.breakpoints.between('xs', 'sm')]: {
            marginTop: '10px',
            fontSize: '1rem',
            width: '150px',
        }
    }
}))

export const Contacts = () => {
    const s = useStyles();
    return (
        <div className={s.contacts} id='contacts'>
            <h1 className={s.title}>Наши контакты</h1>
            <div className={s.container}>
                {contacts.map(({
                    icon,
                    text
                }, index) => {
                    return (
                        <div key={index} className={s.contactsItem}>
                            <div className={s.itemIcon}>
                                {icon}
                            </div>
                            <div className={s.itemText}>
                                {text}
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}