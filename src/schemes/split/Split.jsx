import React, { Component } from 'react';
import { connect } from "react-redux";
import { SvgContainer } from "../../components/SvgContainer";
import { ReadField, AutomaticBoiler, HeatPump, HeatPumpOutside, Boiler, Heater, Connector, Condenser, FlowHeater } from "../../components";

class Split extends Component {
    render() {
        return <SvgContainer width={725} height={640}>
            <HeatPump />
            <HeatPumpOutside top={150} />
            <AutomaticBoiler left={100} />

            <Boiler left={200} />

            <Heater left={300} animate={true} />
            <Condenser left={300} top={100}/>
            <FlowHeater left={400} top={100}/>

            <ReadField left={380} param={"p128"} />
            <Connector left={380} />
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