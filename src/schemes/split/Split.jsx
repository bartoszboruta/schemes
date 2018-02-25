import React, { Component } from 'react';
import { connect } from "react-redux";
import { SvgContainer } from "../../components/SvgContainer";
import { ReadField, HeatPump, HeatPumpOutside, Wall, Pipe } from "../../components";
import { CWU, CO } from "./parts";

class Split extends Component {
    render() {
        return <SvgContainer width={840} height={553}>

            <Pipe
                id={'split_1'}
                active={true}
                activeColor={'hot'}
                d={'M 5 5 L 42 5 S 50 5 50 13 L 50 122 S 50 130 58 130 L 110 130'}
                left={652}
                top={270}
            />
            <Pipe
                id={'split_2'}
                active={true}
                activeColor={'cold'}
                d={'M 5 5 L 32 5 S 40 5 40 13 L 40 122 S 40 130 48 130 L 120 130'}
                left={637}
                top={295}
            />

            <ReadField left={540} param={"p134"} top={366} />
            <ReadField left={540} param={"p140"} top={390} />

            <HeatPump left={597} top={253.4} />
            <HeatPumpOutside left={747} top={327.2} />

            {
                this.props.data.CO.value && <CO />
            }

            {
                this.props.data.CWU.value && <CWU />
            }

            {/*<FlowHeater left={400} top={100} />*/}

            <Wall left={597} top={168} />
            {/*<Connector left={380} />*/}

        </SvgContainer>
    }
}

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        data,
    };
}

const ConnectedSplit = connect(mapStateToProps)(Split);
export { ConnectedSplit as Split }