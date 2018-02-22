import React, { Component } from 'react';
import { connect } from "react-redux";
import { AutomaticBoiler, Boiler, Heater, ReadField, Pipe } from "../../../components";

class CO extends Component {
    getAdditionalHeaterSource() {
        switch (this.props.data.additionalHeaterSourceCO.name) {
            case 'automatic_boiler':
                return <AutomaticBoiler left={410} top={250} />;
            case 'heater':
                return <Heater left={298} top={430} animate={this.props.data.additionalHeaterSourceCO.value} />;
            default:
                return null
        }
    }

    render() {
        return <g>
            <Pipe
                active={true}
                activeColor={'hot'}
                d={'M 5 5 L 22 5 S 30 5 30 13 L 30 142 S 30 150 38 150 L 217 150 S 225 150 225 142 L 225 25'}
                left={345}
                top={330}
            />
            <Pipe
                active={true}
                activeColor={'cold'}
                d={'M 5 160 L 242 160 S 250 160 250 152 L 250 5 '}
                left={345}
                top={340}
            />
            <Boiler left={255.7} top={311.7} />
            {
                this.getAdditionalHeaterSource()
            }
            <ReadField left={180} param={"p132"} top={420} />
        </g>
    }
}

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        data,
    };
};

const ConnectedCO = connect(mapStateToProps)(CO);
export { ConnectedCO as CO }