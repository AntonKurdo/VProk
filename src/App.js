import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Header from './components/Header';
import {SideMenu} from './components/SideMenu';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Works } from './components/Works';
import { Anchor } from './components/Anchor';
import PicModal from './components/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh'      
    }
}));

const App = () => {
    const [isMenuOpen,
        setIsMenuOpen] = useState(false);
    
    const [isOpenModal,
        setIsOpenModal] = useState(false);
    
    const [imgModal, setImgModal] = useState('');
    const c = useStyles();
    const openModal = (img) => {
        setIsOpenModal(true)
        setImgModal(img);
   }
    return (
        <div className={c.root}>
            <SideMenu
                toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
                isMenuOpen={isMenuOpen}/>
            <CssBaseline/>
            <Header toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />           
            <About />
            <Works
                handleOpenModal={openModal} />
            <Contacts />
            <Anchor />
            <PicModal
                img={imgModal}
                open={isOpenModal}
                handleClose={() => setIsOpenModal(false)}
            />         
        </div>
    );
}

export default App;
