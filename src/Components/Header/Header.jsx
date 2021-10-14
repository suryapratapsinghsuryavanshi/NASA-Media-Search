import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className='headerContainer'>
                    <h1 className="logo">
                        <a href="/" data-testid="header-text">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"/>
                            Media Search
                        </a>
                    </h1>
                </div>
            </React.Fragment>
        );
    }
}