import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => {
    return ({
        footer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '70px',
            backgroundColor: '#fe8d12',
            opacity: '.5',
            position: 'absolute',
            bottom: '0',
            [theme.breakpoints.between('xs', 'md')]: {
                height: '40px'
            }
        },
        socials: {
            display: 'flex',
            justifyContent: 'center'         
        },
        socialItem: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '20px',
            width: '40px',
            height: '40px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            transition: 'all .15s linear',
            [theme.breakpoints.between('xs', 'md')]: {
                height: '30px',
                width: '30px',
                marginRight: '10px',
            },
            '&:hover': {
                transform: 'scale(1.1)'
            }
        },
        footerText: {
            position: 'absolute',
            right: '20px',
            textAlign: 'right',
            [theme.breakpoints.between('xs', 'md')]: {
                fontSize: '.5rem'
            }
        }
        
    })
})

export const Footer = () => {
    const s = useStyles();
    return (
        <div className={s.footer}>
            <div className={s.socials}>
                <a
                    className={s.socialItem}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://instagram.com/postavy_wprok?igshid=16npdhjmz8tdb'
                >
                    <InstagramIcon
                        style={{
                        color: '#000'
                    }}/>
                </a>
                <a
                    className={s.socialItem}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://www.facebook.com/wprok.wprok'>
                    <FacebookIcon
                        style={{
                        color: '#000'
                    }}/>
                </a>
            </div>
            <small className={s.footerText}>
            © Created by Anton Kurdo
            </small>
        </div>
    )
}