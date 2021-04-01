import React from 'react';
import { connect } from 'react-redux';
import './popUpWrapper.scss';

const PopUpWrapper = ({ children, apiError }) => (
  <div className="pop-up-wrapper">
    {
      apiError ? (
        <div className="pop-up-wrapper__error"> System error, please try again latter</div>
      ) : ''
    }
    {children}
  </div>
);

const mapStateToProps = (state) => ({
  apiError: state.apiError,
});

export default connect(
  mapStateToProps,
)(PopUpWrapper);
