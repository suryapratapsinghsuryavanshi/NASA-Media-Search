import React from 'react';
import './Footer.css';
import git from "../../assert/images/Git.png";

export default class Footer extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className='footer_container'>
                    <div className="inner_container">
                        <p className="footer_text"> Made With ❤️ as <span style={{color:"#4299E1"}}>Open Source</span></p>
                    </div>
                    <a href="https://github.com/suryapratapsinghsuryavanshi/NASA-Media-Search" className="btn-github">
                        <img src={git} alt="" />GitHub
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24px" height="24px" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                </div>
            </React.Fragment>
        );
    }
}