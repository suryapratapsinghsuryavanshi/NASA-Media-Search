import React from "react";
import axios from "axios";
import "./Main.css";
import Pages from "../Pages/Pages";
import Loader from "../../assert/images/loader.gif";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      USER: "suryprtaps@gmail.com",
      API_KEY: "kQzLociWj2TysnT1AH5dopcKsqhZYCJfYmBOvu37",
      query: "",
      search_result: "",
      request_data:
        this.props.test_data !== undefined ? this.props.test_data : "",
      related_search_keywords: [],
      error: this.props.error !== undefined ? this.props.error : null,
      isSearch: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${this.state.API_KEY}`)
      .then((data) => {
        this.setState({
          request_data: data.data,
          error: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  }

  search = (e) => {
    this.setState({
      isLoading: true,
    });
    e.preventDefault();
    axios
      .get(`https://images-api.nasa.gov/search?q=${this.state.query}`)
      .then((data) => {
        this.setState({
          search_result: data.data.collection.items,
          isSearch: true,
        });
        let related_keywords = [];
        this.state.search_result.forEach((element) => {
          if (element.data[0].keywords) {
            element.data[0].keywords.forEach((keyword) => {
              if (!related_keywords.includes(keyword)) {
                related_keywords.push(keyword);
              }
            });
          }
        });
        this.setState({
          related_search_keywords: related_keywords,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
        });
        console.log(err);
      });
  };

  render() {
    console.log("isLoading", this.state.isLoading);
    if (this.state.error === null) {
      return (
        <React.Fragment>
          <h2 className="message" data-testid="loading-text">
            Loading.....
          </h2>
        </React.Fragment>
      );
    } else if (this.state.error === false) {
      if (this.state.isSearch) {
        return (
          <React.Fragment>
            <main>
              <Pages
                search_data={this.state.search_result}
                keywords={this.state.related_search_keywords.slice(0, 8)}
                search_query={this.state.query}
              />
            </main>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <main>
              <div className="top_container">
                <h3 className="image_title" data-testid="image-title">
                  {this.state.request_data.title}
                </h3>
                <div className="search_bar">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    vlaue={this.state.query}
                    onChange={(e) => {
                      e.preventDefault();
                      this.setState({
                        query: e.target.value,
                      });
                    }}
                  />
                  <button
                    disabled={this.state.isLoading}
                    className="search_button"
                    onClick={this.search}
                  >
                    {this.state.isLoading ? (
                      <img
                        src={Loader}
                        width={20}
                        height={12}
                        className="loader-image"
                      />
                    ) : null}
                    Search
                  </button>
                </div>
              </div>
              <div className="down_container">
                <div className="image_container">
                  <img
                    data-testid="image-src"
                    src={this.state.request_data.hdurl}
                    alt="pic_of_the_day"
                    className="pic_of_the_day"
                  />
                </div>
                <div className="dec_container">
                  <p className="image_dec" data-testid="image-dec">
                    {this.state.request_data.explanation}
                  </p>
                  <p className="image_date" data-testid="image-date">
                    {this.state.request_data.date}
                  </p>
                  <p className="image_copyright" data-testid="copyright-text">
                    &copy; {this.state.request_data.copyright}
                  </p>
                </div>
              </div>
            </main>
          </React.Fragment>
        );
      }
    } else {
      return (
        <React.Fragment>
          <h2 className="message" data-testid="error-text">
            Please Check API Service.
          </h2>
        </React.Fragment>
      );
    }
  }
}
