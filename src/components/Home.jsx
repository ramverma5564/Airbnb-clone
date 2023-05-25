import React from 'react';

import './Home.css'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


export default function Home(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

