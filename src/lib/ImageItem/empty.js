import React from 'react';
import PropTypes from 'prop-types';
import styles from './image-item.module.css';

function Empty({ className, src, onClick }) {
    return (
        <div className={className} onClick={onClick}>
            <img className={styles['image-c-no-image']} src={src} />
            <p>
                <span className={styles['image-c-no-image-text']}>No image avaible</span>
            </p>
        </div>
    );
}

Empty.propTypes = {};

export default Empty;
