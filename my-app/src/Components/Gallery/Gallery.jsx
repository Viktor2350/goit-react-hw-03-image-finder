import React from 'react';
import PropTypes from 'prop-types';

import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ images, onOpenModal }) => (
  <ul className={styles.gallery}>
    {images.map(
      ({
        id,
        webformatURL,
        comments,
        likes,
        views,
        downloads,
        largeImageURL,
      }) => (
        <li key={id} className={styles.gallery__item}>
          <PhotoCard
            src={webformatURL}
            largeImageURL={largeImageURL}
            comments={comments}
            likes={likes}
            views={views}
            downloads={downloads}
            onOpenModal={() => onOpenModal(id)}
          />
        </li>
      ),
    )}
  </ul>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default Gallery;
