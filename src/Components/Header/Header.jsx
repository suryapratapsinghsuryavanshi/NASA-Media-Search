import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render(){
        return(
            <React.Fragment>
                <h1 className="logo">
                    <a href="/" data-testid="header-text">
                        NASA Media Search
                    </a>
                </h1>
            </React.Fragment>
        );
    }
}