import React, { Component } from 'react';
import { connect } from "react-redux";
import { OutputPipe } from "../../../components";

class CWUOutput extends Component {
    render() {
        return <g >
            <OutputPipe active={true} activeCWUOutputlor={'hot'} left={80} top={330} />
            <OutputPipe active={true} activeCWUOutputlor={'cold'} left={100} top={350} />
        </g>
    }
}

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        data,
    };
};

const ConnectedCWUOutput = connect(mapStateToProps)(CWUOutput);
export { ConnectedCWUOutput as CWUOutput }