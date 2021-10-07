import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render(){
        return(
            <React.Fragment>
                <h1 className="logo">
                    <a href="/" data-testid="header-text">
                    <img src="http://1.bp.blogspot.com/-3xCvi76N0fs/UJhTZJWDRwI/AAAAAAABUbg/nr5DNpUiBjk/s1600/Nasa_Logo.jpg"/>
                         Media Search
                    </a>
                </h1>
            </React.Fragment>
        );
    }
}