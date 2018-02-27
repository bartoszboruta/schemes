import React, { Component } from 'react';
import { connect } from "react-redux";
import { AutomaticBoiler, Boiler, Heater, FlowHeater, ReadField, Pipe, OutputPipe } from "../../../components";

class CO extends Component {
    getAdditionalHeaterSource() {
        switch (this.props.data.additionalHeaterSourceCO.name) {
            case 'automatic_boiler':
                if (this.props.data.COType.name === 'boiler') {
                    return <AutomaticBoiler left={410} top={250} active={this.props.data.additionalHeaterSourceCO.value} />;
                }
                return null;
            case 'heater':
                if (this.props.data.COType.name === 'boiler') {
                    return <Heater left={298} top={430} active={this.props.data.additionalHeaterSourceCO.value} />;
                }
                if (this.props.data.COType.name === 'noBoiler') {
                    return <FlowHeater left={392.5} top={471.5} active={this.props.data.additionalHeaterSourceCO.value}/>;
                }
                return null;
            default:
                return null
        }
    }

    render() {
        return <g>
            { this.props.data.COType.name === 'boiler' && <g>
                    <Pipe
                        id={"CO_1"}
                        active={true}
                        activeColor={'hot'}
                        d={'M 5 5 L 22 5 S 30 5 30 13 L 30 142 S 30 150 38 150 L 261 150 S 269 150 269 142 L 269 20'}
                        left={347}
                        top={330}
                    />
                    <Pipe
                        id={"CO_2"}
                        active={true}
                        activeColor={'cold'}
                        d={'M 5 160 L 289 160 S 297 160 297 152 L 297 5'}
                        left={344}
                        top={345}
                    />

                    <OutputPipe active={true} activeColor={'hot'} left={80} top={330} />
                    <OutputPipe active={true} activeColor={'cold'} left={100} top={350} />

                    <Boiler left={255.7} top={311.7} />
                    {
                        this.getAdditionalHeaterSource()
                    }
                    <ReadField left={180} param={"p132"} top={420} />
                </g>
            }

            {
                this.props.data.COType.name === 'noBoiler' && <g>
                    <Pipe
                        id={"CO_3"}
                        active={true}
                        activeColor={'hot'}
                        d={'M 30 150 L 261 150 S 269 150 269 142 L 269 20'}
                        left={347}
                        top={330}
                    />
                    <Pipe
                        id={"CO_4"}
                        active={true}
                        activeColor={'cold'}
                        d={'M 5 160 L 289 160 S 297 160 297 152 L 297 5'}
                        left={344}
                        top={345}
                    />
                    {
                        this.getAdditionalHeaterSource()
                    }
                </g>
            }

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