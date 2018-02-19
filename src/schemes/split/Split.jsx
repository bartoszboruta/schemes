import React, { Component } from 'react';
import { connect } from "react-redux";
import { SvgContainer } from "../../components/SvgContainer";
import { ReadField, AutomaticBoiler } from "../../components";

class Split extends Component {
    render() {
        return <SvgContainer width={725} height={640}>
            <ReadField param={"p128"} />
            <ReadField param={"p132"} />
            <AutomaticBoiler />
        </SvgContainer>
    }
}

function mapStateToProps(state) {
    const { data } = state;
    return {
        data,
    };
}

const ConnectedSplit = connect(mapStateToProps)(Split);
export { ConnectedSplit as Split }