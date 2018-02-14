import React, { Component } from 'react';
import { connect } from "react-redux";
import { SvgContainer } from "../../components/SvgContainer";

class Split extends Component {
    render() {
        return <SvgContainer width={725} height={640}>
            <path fill={"#faa"} d="m 211.339,26.4862 0,-13.2732 c 0,-1.85906 -0.76181,-3.54921 -1.98425,-4.77283 -1.2248,-1.22244 -2.91378,-1.98307 -4.77283,-1.98307 l -165.676,0 0,0.51378 165.405,0 c 1.85787,0 3.54803,0.76063 4.77165,1.98307 1.22362,1.22362 1.98425,2.91378 1.98425,4.77283 l 0,12.7594 0.27165,0 z"/>
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