import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Clock, SvgContainer } from '../../components';
import PropTypes from 'prop-types';

class COP extends Component {
  render() {
    return <SvgContainer height={400} width={400} >
      <Clock />
    </SvgContainer>
  }
}

const mapStateToProps = (state) => {
  const { data } = state;
  return {
    data,
  };
};

const ConnectedCOP = connect(mapStateToProps)(COP);
export { ConnectedCOP as COP }

COP.propTypes = {
  data: PropTypes.object,
};

COP.defaultProps = {
  data: {}
};