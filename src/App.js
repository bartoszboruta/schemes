import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { updateData, updateDimensions } from './actions';
import { Split, Solar } from './schemes';

class App extends Component {
    componentDidMount() {
        const data = { //example
            date: {
                fill: '#00b100',
                value: '15-12-2017 14:01:50'
            },
            CWU: {
                value: true,
                visible: true,
                type: {
                    name: 'coil', //condenser / coil
                    value: true
                },
                additionalHeater: {
                    name: 'heater',
                    unit: '',
                    value: true,
                },
                circulation: {
                    value: true,
                    visible: true,
                },
            },

            CO: {
                visible: true,
                value: true,
                type: {
                    name: 'boiler', //noBoiler / boiler
                    value: true
                },
                additionalHeater: {
                    name: 'heater', //heater /automatic_boiler
                    unit: '',
                    value: true,
                }
            },

            p128: {
                name: 'T1',
                value: 123,
                unit: '°C',
            },
            p132: {
                name: 'T2',
                value: 33,
                unit: '°C',
            },
            p134: {
                name: 'T3',
                value: 33,
                unit: '°C',
            },
            p140: {
                name: 'T6',
                value: 33,
                unit: '°C',
            },
            p146: {
                name: 'T9',
                value: 33,
                unit: '°C',
            },
            p150: {
                name: 'T11',
                value: 15,
                unit: '°C',
            },
            p152: {
                name: 'T12',
                value: 15,
                unit: '°C',
            },
            p154: {
                name: 'T13',
                value: 15,
                unit: '°C',
            },
            p156: {
                name: 'T14',
                value: 15,
                unit: '°C',
            },
            Output: {
                circuit1: {
                    value: false,
                    visible: true,
                },
                circuit2: {
                    value: false,
                    visible: true,
                },
                circuit3: {
                    value: true,
                    visible: true,
                },
                temperatureSensor: {
                    name: 'analog' //digital
                },
                value: true,
            },
            PC1: {
                value: 10
            },
            PC2: {
                value: 0
            },
        };
        window.addEventListener("resize", this.updateDimensions.bind(this));
        this.props.updateData(data);
        this.updateDimensions()
    }

    updateDimensions() {
        let dimensions = {
            height: this.props.parent.clientHeight,
            width: this.props.parent.clientWidth
        };

        this.props.updateDimensions(dimensions);
    }

    render() {
        return (
            <Split />
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateData: bindActionCreators(updateData, dispatch),
        updateDimensions: bindActionCreators(updateDimensions, dispatch),
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { ConnectedApp as App }

App.propTypes = {
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