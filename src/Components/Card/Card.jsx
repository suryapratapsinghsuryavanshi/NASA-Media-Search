import React from 'react';
import './Card.css';

export default class Card extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="card">
                    <div className="card_image">
                        {
                            this.props.card_data.links !== undefined ?
                                <img src={this.props.card_data.links[0].href} alt="card_image" data-testid="image-src"/>
                            :
                                <img src="" alt="card_image" />
                        }
                    </div>
                    <div className="card_about">
                        <h4 data-testid="title-text">{this.props.card_data.data[0].title}</h4>
                        <p data-testid="card-date">{new Date(this.props.card_data.data[0].date_created).toLocaleDateString()}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}