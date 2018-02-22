import React, { Component } from 'react';
import { connect } from "react-redux";
import { AutomaticBoiler, Boiler, Heater, ReadField } from "../../../components";

class CWU extends Component {

    getAdditionalHeaterSource() {
        switch (this.props.data.additionalHeaterSourceCWU.name) {
            case 'heater':
                return <Heater left={298} top={150} animate={this.props.data.additionalHeaterSourceCWU.value} />;
            default:
                return null
        }
    }

    render() {
        return <g>
            <Boiler left={255.7} top={30.5} />
            {
                this.getAdditionalHeaterSource()
            }
            <ReadField left={360} param={"p128"} top={120} />
        </g>
    }
}

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        data,
    };
};

const ConnectedCWU = connect(mapStateToProps)(CWU);
export { ConnectedCWU as CWU }