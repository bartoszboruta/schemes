import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SvgContainer } from '../../components/SvgContainer';
import { DateRead, ReadField, HeatPump, HeatPumpOutside, Wall, Pipe, Pump } from '../../components';
import { CWU, CO } from './parts';
import PropTypes from 'prop-types';

class Split extends Component {
    render() {
        return <SvgContainer width={840} height={553}>

            <DateRead left={0} top={0} />
            <Pipe
                id={'split_1'}
                active={this.props.data.PC1.value || this.props.data.PC2.value}
                activeColor={'hot'}
                begin={3}
                d={'M 5 5 L 42 5 S 50 5 50 13 L 50 122 S 50 130 58 130 L 110 130'}
                direction={'reversed'}
                duration={6}
                left={652}
                top={270}
            />
            <Pipe
                id={'split_2'}
                active={this.props.data.PC1.value || this.props.data.PC2.value}
                activeColor={'cold'}
                d={'M 5 5 L 32 5 S 40 5 40 13 L 40 122 S 40 130 48 130 L 120 130'}
                duration={6}
                left={637}
                top={295}
            />

            {
                this.props.data.CWU.visible && <CWU />
            }

            {
                this.props.data.CO.visible && <CO />
            }

            <HeatPump left={597} top={253.4} />
            <HeatPumpOutside left={747} top={327.2} />

            <Wall left={597} top={168} />
            {
                (this.props.data.CWU.visible || this.props.data.CO.visible) && <g>
                    <ReadField left={540} param={'p134'} top={366} />
                    <ReadField left={540} param={'p140'} top={390} />
                    <Pump left={628.5} top={420} active={this.props.data.CO.value || this.props.data.CWU.value} />
                </g>
            }

        </SvgContainer>
    }
}

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        data,
    };
};

const ConnectedSplit = connect(mapStateToProps)(Split);
export { ConnectedSplit as Split }

Split.propTypes = {
    data: PropTypes.object,
};

Split.defaultProps = {
    data: {}
};