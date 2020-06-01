import React from 'react';
import PropTypes from 'prop-types';
import styles from './image-preview.module.css';

function ImagePreview({ image }) {
    return (
        <div className={styles['image-p-container']}>
            <img src={image} />
        </div>
    );
}

ImagePreview.propTypes = {};

export default ImagePreview;
