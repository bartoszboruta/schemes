import React, { Component } from 'react';
import { connect } from "react-redux";
import { OutputPipe, Circuit, Pipe } from "../../../components";

class COOutput extends Component {
    render() {
        return <g className="COOutput" transform={"translate(" + this.props.left + " " + this.props.top + ")"}>
            <Pipe
                id={"CO_3"}
                active={ this.props.data.Output.value }
                activeColor={'hot'}
                d={'M 5 5 L 100 5 '}
                left={165}
            />
            <Pipe
                id={"CO_4"}
                active={ this.props.data.Output.value }
                activeColor={'cold'}
                d={'M 5 5 L 5 147 S 5 155 13 155 L 100 155'}
                left={165}
                top={20}
            />

            {
                this.props.data.hasCircuit3.value && <g>
                    <Circuit active={ this.props.data.circuit3.value } left={30} reversedColors={true} />
                    <OutputPipe active={ this.props.data.Output.value } activeColor={'hot'} left={20} />
                    <OutputPipe active={ this.props.data.Output.value } activeColor={'cold'} left={40} top={20} />
                </g>
            }
            {
                this.props.data.hasCircuit2.value && <Circuit active={ this.props.data.circuit2.value } left={85} />
            }
            {
                this.props.data.hasCircuit1.value && <Circuit active={ this.props.data.circuit1.value } left={140} />
            }

            <OutputPipe active={ this.props.data.Output.value } activeColor={'hot'} left={80} />
            <OutputPipe active={ this.props.data.Output.value } activeColor={'cold'} left={95} top={20} />

        </g>
    }
}

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        data,
    };
};

const ConnectedCOOutput = connect(mapStateToProps)(COOutput);
export { ConnectedCOOutput as COOutput }