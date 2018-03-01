import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Boiler, Condenser, Connector, Heater, Pipe, ReadField, Coil, Pump } from '../../../components';

class CWU extends Component {

    getAdditionalHeaterSource() {
        switch (this.props.data.additionalHeaterSourceCWU.name) {
            case 'heater':
                return <Heater left={298} top={150} active={this.props.data.additionalHeaterSourceCWU.value} />;
            default:
                return null
        }
    }

    getType() {
        switch (this.props.data.CWUType.name) {
            case 'condenser':
                return <Condenser left={430} top={170} active={this.props.data.CWUType.value} />;
            case 'coil':
            default:
                return <Coil left={275.7} top={182} active={this.props.data.CWUType.value} />;
        }
    }

    render() {
        return <g className={'CWU'}>
            <Pipe
                id={'CWU_1'}
                active={true}
                activeColor={'hot'}
                d={'M 5 5 L 192 5 S 200 5 200 13 L 200 30'}
                left={106}
                top={5}
            />
            <Pipe
                id={'CWU_1_1'}
                active={true}
                activeColor={'cold'}
                d={'M 5 5 L 30 5 '}
                left={226}
                top={220}
            />

            {
                this.props.data.CO.value && <g>
                    <Pipe
                        id={'CWU_2'}
                        active={true}
                        activeColor={'hot'}
                        d={'M 5 5 L 167 5 S 175 5 175 13 L 175 300'}
                        left={347}
                        top={178}
                    />
                    < Pipe
                    id={'CWU_3'}
                    active={true}
                    activeColor={'cold'}
                    d={'M 5 5 L 142 5 S 150 5 150 13 L 150 283'}
                    left={347}
                    top={220}
                    />
                </g>
            }
            {
                !this.props.data.CO.value && <g>
                    <Pipe
                        id={'CWU_2'}
                        active={true}
                        activeColor={'hot'}
                        d={'M 5 5 L 167 5 S 175 5 175 13 L 175 293.5 S 175 301.5 183 301.5 L 261 301.5 S 269 301.5 269 293.5 L 269 172 '}
                        left={347}
                        top={178}
                    />
                    <Pipe
                        id={'CWU_3'}
                        active={true}
                        activeColor={'cold'}
                        d={'M 5 5 L 142 5 S 150 5 150 13 L 150 277 S 150 285 158 285 L 286 285 S 294 285 294 277 L 294 130 '}
                        left={347}
                        top={220}
                    />
                </g>
            }

            <Boiler left={255.7} top={30.5} />

            {
                this.getType()
            }

            {
                this.getAdditionalHeaterSource()
            }

            <Connector left={341} top={159} />
            <Connector left={341} top={201} />
            <Connector left={255.7} top={201} />

            <ReadField left={360} param={'p128'} top={120} />
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