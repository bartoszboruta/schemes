import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class ReadField extends Component {

    getValue(value) {
        return this.props.data[this.props.param] ? this.props.data[this.props.param][value] : '';
    }

    render() {
        return <g className="ReadField" transform={"translate(" + this.props.left + " " + this.props.top + ")"}>
            <rect
                style={{
                    fill: "#dcdcdc",
                    fillRule:"evenodd"
                }}
                height="17.600546"
                width="17.602509"
                y="607.35046"
                x="49.261093"
            />
            <path
                style={{
                    fill:"#cccccc",
                    fillRule:"nonzero"
                }}
                d="m 66.43492,607.77958 -16.7448,0 0,16.74234 16.7448,0 0,-16.74234 z m -17.17384,-0.85808 17.60288,0 0.42904,0 0,0.42904 0,17.60042 0,0.42904 -0.42904,0 -17.60288,0 -0.42903,0 0,-0.42904 0,-17.60042 0,-0.42904 0.42903,0 z"
            />
            <text
                x="52"
                y="619.92224"
                style={{
                    fontSize:9.8102932,
                    fontWeight:"bold",
                    fill:"#4d4d4d",
                    fillRule:"evenodd",
                    fontFamily:"Arial"
                }}>
                { this.getValue('name') }
            </text>
            <polygon
                transform="matrix(12.25827,0,0,12.25827,-1005.2358,-1126.1527)"
                style={{
                    fill:"#fefefe",
                    fillRule:"evenodd"
                }}
                points="86.0233,142.851 86.0233,141.415 82.0333,141.415 82.0333,142.851"
            />
            <path
                style={{
                    fill:"#cecece",
                    fillRule:"nonzero"
                }}
                d="m 48.75482,607.77958 -47.896741,0 0,16.74234 47.896741,0 0,-16.74234 z m -48.325781,-0.85808 48.754821,0 0.42904,0 0,0.42904 0,17.60042 0,0.42904 -0.42904,0 -48.754821,0 -0.429039,0 0,-0.42904 0,-17.60042 0,-0.42904 0.429039,0 z"
            />
            <text
                x="25"
                y="619.93494"
                style={{
                    textAnchor:"middle",
                    fontSize:9.92680454,
                    fontWeight:"normal",
                    fill:"#4d4d4d",
                    fillRule:"evenodd",
                    fontFamily:"Arial"
                }}>
                { this.getValue('value') + ' ' + this.getValue('unit') }
            </text>
        </g>
    }
}

function mapStateToProps(state) {
    const { data } = state;
    return {
        data
    };
}

const ConnectedReadField = connect(mapStateToProps)(ReadField);
export { ConnectedReadField as ReadField }

ReadField.propTypes = {
    data: PropTypes.object,
    left: PropTypes.number,
    param: PropTypes.string,
    top: PropTypes.number,
};

ReadField.defaultProps = {
    data: {},
    left: 0,
    param: '',
    top: 0,
};