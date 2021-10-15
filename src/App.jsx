import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';


export default class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Main/>
                <Footer />
            </React.Fragment>
        );
    }
}