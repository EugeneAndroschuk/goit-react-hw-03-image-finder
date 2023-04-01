import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.onCloseModalEsc();
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) this.props.onCloseModalEsc();
  };

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.handleOverlayClick}>
        <div className={css.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onCloseModalEsc: PropTypes.func.isRequired,
};

export default Modal;
