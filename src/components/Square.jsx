import React, { Component } from "react";
import PropTypes from "react-proptypes";

export default class Square extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    size: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    onClick: PropTypes.func
  };
  
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.id);
  }

  getStyle() {
    const { size, x, y } = this.props;
    return {
      width: size,
      height: size,
      top: y,
      left: x
    };
  }

  render() {
    return (
      <div
        style={this.getStyle()}
        className={"Shape Square " + (this.props.selected ? "Selected" : "")}
        onClick={this.onClick} />
    );
  }
}