import React, { Component } from "react";
import PropTypes from "react-proptypes";

export default class Circle extends Component {
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
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.state = {
      moving: false,
      x: props.x,
      y: props.y
    };
  }

  onMouseDown(e) {
    this.setState({
      moving: true,
      oPos: {
        x: e.pageX,
        y: e.pageY
      }
    });
  }

  onMouseUp() {
    this.setState({
      moving: false,
      oPos: undefined
    });
  }

  onMouseMove(e) {
    if (this.state.moving) {
      this.setState({
        x: this.state.x + e.pageX - this.state.oPos.x,
        y: this.state.y + e.pageY - this.state.oPos.y,
        oPos: {
          x: e.pageX,
          y: e.pageY
        }
      });
    }
  }

  onClick() {
    this.props.onClick(this.props.id);
  }

  getStyle() {
    const { size } = this.props;
    const { x, y } = this.state;
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
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
        style={this.getStyle()}
        className={"Shape Circle " + (this.props.selected ? "Selected" : "")}
        onClick={this.onClick} />
    );
  }
}