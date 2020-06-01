import React from 'react';
import PropTypes from 'prop-types';
import styles from './image-item.module.css';
import NoPhoto from '../assets/no-photo.svg';

function Empty({ className, src, onClick }) {
    return (
        <div className={className}>
            <img className={styles['image-c-no-image']} onClick={onClick} src={src} />
            <span className={styles['image-c-no-image-text']}>No image avaible</span>
        </div>
    );
}

Empty.propTypes = {};

export default Empty;
