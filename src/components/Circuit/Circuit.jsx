import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Pipe, Pump } from "../";

class Circuit extends Component {

    render() {
        return (
            <g className="Circuit" transform={"translate(" + this.props.left + " " + this.props.top + ")"}>
                <Pipe
                    id={'circuit_2'}
                    active={this.props.active}
                    activeColor={this.props.reversedColors ? 'hot' : 'cold'}
                    d={'M 5 145 L 5 5'}
                    left={22}
                    top={-125}
                />
                <Pipe
                    id={'circuit_1'}
                    active={this.props.active}
                    activeColor={this.props.reversedColors ? 'cold' : 'hot'}
                    d={'M 5 125 L 5 5'}
                    top={-125}
                />
                <Pump left={15} top={-90} active={this.props.active}/>
            </g>
        )
    }
}

export { Circuit }

Circuit.propTypes = {
    active: PropTypes.bool,
    left: PropTypes.number,
    reversedColors: PropTypes.bool,
    top: PropTypes.number,
};

Circuit.defaultProps = {
    active: false,
    left: 0,
    reversedColors: false,
    top: 0,
};