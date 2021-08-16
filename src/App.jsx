import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

export default class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Main/>
            </React.Fragment>
        );
    }
}