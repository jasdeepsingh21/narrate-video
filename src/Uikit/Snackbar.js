import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { hideError } from '../store/actions/error';
import { COLOURS } from '../utils/constants';

const backgroundType = {
  success: {
    color: COLOURS.SUCCESS,
  },
  error: {
    color: COLOURS.ERROR,
  },
};

function ErrorSnackbar(props) {
  const { error, autoClose, handleClose } = props;
  return (
    <div>
      <Snackbar
        className="csm-error-snackbar"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={error.error}
        autoHideDuration={4000}
        onClose={() => autoClose()}
      >
        <SnackbarContent
          className={error.flagType}
          style={{
            backgroundColor: backgroundType[error.flagType].color,
          }}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar">{error.errorMessage}</span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={() => handleClose()}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    error: store.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoClose: () => {
      dispatch(hideError());
    },
    handleClose: () => {
      dispatch(hideError());
    },
  };
};

// ErrorSnackbar.propTypes = {
//   error: PropTypes.shape({
//     error: PropTypes.bool.isRequired,
//     errorMessage: PropTypes.string.isRequired,
//     flagType: PropTypes.string.isRequired,
//   }).isRequired,
//   autoClose: PropTypes.func.isRequired,
//   handleClose: PropTypes.func.isRequired,
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorSnackbar);
