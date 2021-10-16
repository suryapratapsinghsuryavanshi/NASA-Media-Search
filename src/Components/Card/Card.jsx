import React from "react";
import CustomModal from "../Modal/Modal";
import "./Card.css";

export default class Card extends React.Component {
  state = {
    isModalOpen: false,
  };

  afterOpenModal = (e) => {};
  render() {
    return (
      <React.Fragment>
        <CustomModal
          visible={this.state.isModalOpen}
          afterOpen={this.afterOpenModal}
          onClose={() =>
            this.setState({
              isModalOpen: false,
            })
          }
          contentLabel="Example Modal"
        >
          <div className="modal-container">
          <div class="close-container" onClick={() => this.setState({
              isModalOpen: false,
            })}>
              <div class="leftright"></div>
              <div class="rightleft"></div>
          </div>
            {this.props.card_data.links !== undefined ? (
              <img
                src={this.props.card_data.links[0].href}
                alt="card_image"
                data-testid="image-src"
                width={300}
                height={200}
              />
            ) : (
              <img src="" alt="card_image" />
            )}
            <h4 data-testid="title-text" style={{ paddingTop: "10px" }}>
              {this.props?.card_data?.data[0]?.title}
            </h4>
            <p data-testid="card-date" style={{ paddingTop: "10px" }}>
              {new Date(
                this.props?.card_data?.data[0]?.date_created
              )?.toLocaleDateString()}
            </p>
          </div>
        </CustomModal>
        <div
          className="card"
          onClick={() =>
            this.setState({ isModalOpen: !this.state.isModalOpen })
          }
        >
          <div className="card_image">
            {this.props.card_data.links !== undefined ? (
              <img
                src={this.props.card_data.links[0].href}
                alt="card_image"
                data-testid="image-src"
              />
            ) : (
              <img src="" alt="card_image" />
            )}
          </div>
          <div className="card_about">
            <h4 data-testid="title-text">
              {this.props.card_data.data[0].title}
            </h4>
            <p className="card_date" data-testid="card-date">
              {new Date(
                this.props.card_data.data[0].date_created
              ).toLocaleDateString()}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
