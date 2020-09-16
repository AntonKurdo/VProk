import React from 'react';
import DnsIcon from '@material-ui/icons/Dns';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import PlaceIcon from '@material-ui/icons/Place';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import HighQualityIcon from '@material-ui/icons/HighQuality';
import SpeedIcon from '@material-ui/icons/Speed';

//Contacts Icons
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

//Works Img
import pic1 from '../assets/photos/1.jpg';
import pic2 from '../assets/photos/2.jpg';
import pic3 from '../assets/photos/3.jpg';
import pic4 from '../assets/photos/4.jpg';
import pic5 from '../assets/photos/5.jpg';
import pic6 from '../assets/photos/6.jpg';



export const list = [
    {
        text: 'Главная',
        icon: <DnsIcon style={{color: '#fe8d12'}}/>,
        link: 'header'
    }, {
        text: 'О нас',
        icon: <InfoIcon style={{color: '#fe8d12'}}/>,
        link: 'about'
    }, {
        text: 'Наше портфолио',
        icon: <WorkIcon style={{color: '#fe8d12'}}/>,
        link: 'works'
    }, {
        text: 'Контакты',
        icon: <PlaceIcon style={{color: '#fe8d12'}}/>,
        link: 'contacts'
    }
];
export const dataAbout = [
    {
        icon: <QueryBuilderIcon style={{ fontSize: '4.5rem' }} />,
        title: 'Опыт работы в строительстве - 20 лет',
        description: 'Id ea eu duis magna consectetur esse tempor adipisicing et. Laborum ullamco Lore' +
            'm proident quis proident. Ipsum excepteur eiusmod pariatur enim nostrud fugiat n' +
            'ulla adipisicing.'
    },
    {
        icon: <HighQualityIcon style={{ fontSize: '5rem' }} />,
        title: 'Высокое качество выполняемых работ',
        description: 'Id ea eu duis magna consectetur esse tempor adipisicing et. Laborum ullamco Lore' +
            'm proident quis proident. Ipsum excepteur eiusmod pariatur enim nostrud fugiat n' +
            'ulla adipisicing.'
    },
    {
        icon: <SpeedIcon style={{ fontSize: '5rem' }} />,
        title: 'Выполнение заказа в оговоренные сроки',
        description: 'Id ea eu duis magna consectetur esse tempor adipisicing et. Laborum ullamco Lore' +
            'm proident quis proident. Ipsum excepteur eiusmod pariatur enim nostrud fugiat n' +
            'ulla adipisicing.'
    },
];
export const contacts = [
    {
        icon: <PlaceIcon style={{ fontSize: '3rem', color: '#fe8d12' }} />,
        text: 'г. Поставы, ул. Космонавтов, 60'
    },
    {
        icon: <EmailIcon style={{ fontSize: '3rem', color: '#fe8d12' }} />,
        text: <a style={{ textDecoration: 'none', color: '#c2c2c2' }} href="mailto: Wprok@tut.by">Wprok@tut.by</a>
    },
    {
        icon: <PhoneIcon style={{ fontSize: '3rem', color: '#fe8d12' }} />,
        text: <a style={{ textDecoration: 'none', color: '#c2c2c2' }} href="tel:+375297148916">+375 29 714-89-16</a>
    },
];
export const works = [pic1, pic2, pic3, pic4, pic5, pic6];