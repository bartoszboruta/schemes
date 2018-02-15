import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { dataActions, dimensionsActions } from './actions';
import { Split } from './schemes';

class App extends Component {
    componentDidMount() {
        const data = {
            p128: {
                name: 'T1',
                value: 123,
                unit: '°C',
            },
            p132: {
                name: 'T2',
                value: 33,
                unit: '°C',
            }
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

const ConnectedApp = connect()(App);
export { ConnectedApp as App }

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    parent: PropTypes.shape({
        clientHeight: PropTypes.number,
        clientWidth: PropTypes.number,
    })
};

App.defaultProps = {
    parent: {
        clientHeight: 0,
        clientWidth: 0,
    }
};