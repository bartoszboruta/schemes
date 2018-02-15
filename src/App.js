import React, { Component } from 'react';
import { connect } from "react-redux";
import { dataActions, dimensionsActions } from './actions';
import { Split } from './schemes';

class App extends Component {
  componentDidMount() {
    const data = {
      p128: 0,
      p132: 1
    };

    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.props.dispatch(dataActions.update(data));
    this.updateDimensions()
  }

  updateDimensions() {
    let dimensions = {
      height: this.props.parent.clientHeight,
      width: this.props.parent.clientWidth
    };

    this.props.dispatch(dimensionsActions.update(dimensions));
  }

  render() {
    return (
        <Split />
    );
  }
}

const ConnectedApp = connect(null)(App);
export { ConnectedApp as App }