import React from 'react';
import './Pages.css';
import Card from './../Card/Card';
import right from "../../assert/images/arrow-right.svg";
import left from "../../assert/images/arrow-left.svg";

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
                <a className="home_button" href='/'>Go back</a>
                     <center><h3 data-testid="search-query"><span className="search_title">Search Result for <span style={{color:"#ff3333"}}>{this.props.search_query}</span></span></h3></center>
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
                                <li> <img src={left} alt="left"/> Previous</li>
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
                                <li>Next <img src={right} alt="right"/></li>
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