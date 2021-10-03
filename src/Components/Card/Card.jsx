import React from "react";
import CustomModal from "../Modal/Modal";
import "./Card.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
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
          <div>I am a modal</div>
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
            <p data-testid="card-date">
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
