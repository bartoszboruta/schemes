import React, { Component } from 'react';
import { connect } from "react-redux";
import { SvgContainer } from "../../components/SvgContainer";
import { ReadField } from "../../components/ReadField";

class Split extends Component {
    render() {
        return <SvgContainer width={725} height={640}>
            <ReadField param={"p128"} />
            <ReadField param={"p132"} />
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