/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      calCount: 0,
    };
  }

  handleInput = (event) => {
    this.setState({
      clickCount: event.target.value,
    });
  };

  handleButton = () => {
    const { foodItem } = this.props;
    this.setState({
      calCount: this.state.clickCount * foodItem.cal,
    });
  };

  render() {
    const { foodItem } = this.props;
    
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
        <article>
          <div style={{ textAlign: "center" }}>
            <figure>
              <img src={foodItem.img} alt={foodItem.name} style={{ maxWidth: "100%", height: "auto" }} />
            </figure>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div>
              <p>
                <strong>{foodItem.name}</strong><br/>
                <small>{foodItem.cal} calories</small>
              </p>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div>
              <div>
                <input
                  type="number"
                  onChange={this.handleInput}
                  style={{ width: "50px" }}
                />
              </div>
              <div>
                <button
                  onClick={this.handleButton}
                  style={{ marginTop: "10px" }}
                >
                  +
                </button>
                <p>{this.state.clickCount}</p>
                <p>{this.state.calCount}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

FoodBox.propTypes = {
  foodItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cal: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

FoodBox.defaultProps = {
  foodItem: {
    name: "Food Item",
    cal: 500,
    img: "https://via.placeholder.com/150",
  },
};
