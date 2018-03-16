import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SvgContainer } from '../../components/SvgContainer';
import { SolarPanel, FlowMeter, Boiler, Shower, PoolPump, PoolTank, TriValve } from '../../components';
import PropTypes from 'prop-types';

class Solar extends Component {
    render() {
        return <SvgContainer width={840} height={553}>
            <SolarPanel left={30} />
            <Boiler left={230} top={200} />
            <FlowMeter left={0} top={0} />
            <Shower left={100} top={0} />
            <PoolPump left={200} top={0} />
            <PoolTank left={300} top={0} />
            <TriValve left={300} top={100} direction={'bottom'} />
        </SvgContainer>
    }
}

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        data,
    };
};

const ConnectedSolar = connect(mapStateToProps)(Solar);
export { ConnectedSolar as Solar }

Solar.propTypes = {
    data: PropTypes.object,
};

Solar.defaultProps = {
    data: {}
};