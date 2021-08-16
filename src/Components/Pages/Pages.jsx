import React from 'react';
import './Pages.css';
import Card from './../Card/Card';

export default class Pages extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            offset: 0,
            totalPages: this.props.search_data,
            currentPage: [],
            perPage: 3
        }
    }

    componentDidMount(){
        this.managePages();
    }

    managePages = () => {
        let currentPages = [];
        for(let i=this.state.offset;i < (this.state.offset + this.state.perPage);i++){
            currentPages.push(this.state.totalPages[i]);
        }
        this.setState({
            currentPage: currentPages
        });
    }

    render(){
        return(
            <React.Fragment>
                <div className="pages">
                    <h3 data-testid="search-query">Search Result for {this.props.search_query}</h3>
                    <div className="cards">
                        {
                            this.state.currentPage ? 
                                this.state.currentPage.map((ele, index) => {
                                    return <Card key={index} card_data={ele}/>
                                })
                            :
                                null
                        }
                    </div>
                    <div className="next">
                        <ul>
                            <a onClick={(e) => {
                                e.preventDefault();
                                if(this.state.offset > 3){
                                    this.setState({
                                        offset: (this.state.offset - this.state.perPage)
                                    });
                                    this.managePages();
                                }
                            }}>
                                <li> &lt; Previous</li>
                            </a>
                            <a onClick={(e) => {
                                e.preventDefault();
                                if(this.state.offset < this.state.totalPages.length){
                                    this.setState({
                                        offset: (this.state.offset + this.state.perPage)
                                    });
                                    this.managePages();
                                }
                            }}>
                                <li>Next &gt;</li>
                            </a>
                        </ul>
                    </div>
                    <div className="keywords">
                        <h3>Related Searches</h3>
                        <div className="keys">
                            {
                                this.props.keywords.map((ele, index) => {
                                    return <p key={index}>{ele}</p>
                                })       
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}