import React, { Component } from 'react';
import { connect } from "react-redux";
import { dataActions } from './actions';
import { Split } from './schemes';

class App extends Component {
  componentDidMount() {
    const data = {
      p128: 0,
      p132: 1
    };

    this.props.dispatch(dataActions.update(data));
  }
  render() {
    return (
        <Split />
    );
  }
}

function mapStateToProps(state) {
    return state;
}

const ConnectedApp = connect(mapStateToProps)(App);
export { ConnectedApp as App }