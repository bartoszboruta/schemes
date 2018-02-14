import React, { Component } from 'react';
import { connect } from "react-redux";

class Split extends Component {
    render() {
        return <div>
            p128 value is: {
                this.props.data.p128
            }
        </div>;
    }
}

function mapStateToProps(state) {
    const { data } = state;
    return {
        data
    };
}

const ConnectedSplit = connect(mapStateToProps)(Split);
export { ConnectedSplit as Split }