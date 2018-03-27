import React, { Component } from "react";
import PropTypes from "react-proptypes";
import { connect } from "react-redux";
import Circle from "./components/Circle";
import Square from "./components/Square";
import "./App.css";

const mapStateToProps = state => ({
  shapes: state.shapes
});

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  static propTypes = {
    shapes: PropTypes.array
  };

  getShape(type) {
    switch (type) {
      case "circle":
        return Circle;
      case "square":
        return Square;
      default:
        console.error(`Invalid shape type "${type}"!`);
    }
  }

  renderShapes() {
    return this.props.shapes.map(shape => {
      const T = this.getShape(shape.type);
      return (
        <T
          key={shape.id}
          {...shape}
          onClick={id => {
            console.log(`TODO: You selected shape with id ${id}!`);
          }}
          selected={false /* TODO: wire this up! */}
        />
      );
    });
  }

  render() {
    return <div className="Shape-canvas">{this.renderShapes()}</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
