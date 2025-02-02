import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends React.Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.hadleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hadleKeyPress);
  }

  hadleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { children } = this.props;
    return (
      <div
        role="presentation"
        className={styles.overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.node.isRequired,
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
};
