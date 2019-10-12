import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({ likes, views, comments, downloads, src, onOpenModal }) => (
  <div className={styles.photo__card}>
    <img src={src} alt="car" />

    <div className={styles.stats}>
      <p className={styles.stats__item}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={styles.stats__item}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={styles.stats__item}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={styles.stats__item}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>

    <button
      onClick={onOpenModal}
      type="button"
      className={styles.fullscreen__button}
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

PhotoCard.propTypes = {
  src: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default PhotoCard;
