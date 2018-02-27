import React, {Component} from "react";
import PropTypes from 'prop-types';

class OutputPipe extends Component {

    getColor() {
        switch (this.props.activeColor) {
            case 'hot':
                return 'red';
            case 'cold':
                return 'blue';
            default:
                return 'gray';
        }
    }

    render() {
        return (
            <g className="OutputPipe" transform={"translate(" + this.props.left + " " + this.props.top + ")"}>
                <rect
                    id="_651014824"
                    x="0"
                    y="0"
                    width="85.509003"
                    height="9.4820004"
                    rx="1.4220989"
                    ry="1.4220989"
                    style={{fill: this.getColor(), fillRule:"evenodd", strokeWidth:"0.26849282"}} />
            </g>
        )
    }
}

export { OutputPipe }

OutputPipe.propTypes = {
    active: PropTypes.bool,
    activeColor: PropTypes.string,
    d: PropTypes.string,
    left: PropTypes.number,
    strokeWidth: PropTypes.number,
    top: PropTypes.number,
};

OutputPipe.defaultProps = {
    active: false,
    activeColor: '',
    d: '',
    left: 0,
    strokeWidth: 3,
    top: 0,
};