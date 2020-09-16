import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Header from './components/Header';
import {SideMenu} from './components/SideMenu';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Works } from './components/Works';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh'      
    }
}));

const App = () => {
    const [isMenuOpen,
        setIsMenuOpen] = useState(false);
    const c = useStyles();

    return (
        <div className={c.root}>
            <SideMenu
                toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
                isMenuOpen={isMenuOpen}/>
            <CssBaseline/>
            <Header toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />           
            <About />
            <Works />
            <Contacts />
        </div>
    );
}

export default App;
