import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {works} from '../data/data';
import CardItem from './CardItem';
import Button from '@material-ui/core/Button';
import { Fade, Collapse } from '@material-ui/core';
import useWindowPosition from '../hooks/useWindowPosition';

const useStyles = makeStyles(theme => ({
    works: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px',
        fontFamily: 'Nunito',
        borderBottom: '3px solid #fe8d12'
    },
    subtitle: {
        width: '700px',
        textAlign: 'center',
        [
            theme
                .breakpoints
                .between('xs', 'md')
        ]: {
            display: 'none'
        }
    },
    worksContainer: {        
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '90%',
        margin: '50px auto 20px', 
        [theme.breakpoints.between('xs', 'md')]: {
            flexDirection: 'column',  
            marginTop: '10px'
        }
    },
    viewAllButton: {
        backgroundColor: '#fe8d12',
        marginBottom: '20px',
        fontFamily: 'Nunito',
        display: 'none',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fe8d50' ,
        },
        [theme.breakpoints.between('xs', 'md')]: {
            display: 'block'
        }
    }
}))

export const Works = () => {
    const s = useStyles();
    const checked = useWindowPosition('works');
    const [isAll, setIsAll] = useState(false)
    return (
        <div className={s.works} id='works'>            
                <h1>Наши работы</h1>           
            <div className={s.subtitle}>
                Строим дома по всей Беларуси по проектам любой сложности. Собственное производно
                СИП панелей. Доступные цены, надежность и быстрота сборки.
            </div>
            <div className={s.worksContainer}>            
                {
                    works.map((work, ind) => {
                        return (                            
                            <CardItem img={work} isAll={isAll} key={ind} />                            
                        )
                    } )
                }                
            </div>
            <Button                      
                        className={s.viewAllButton}
                variant="contained"  
                onClick={() => setIsAll(!isAll)}
                    >
                    {isAll ? 'Скрыть все' : 'Показать все'}
            </Button>
        </div>
    )
}