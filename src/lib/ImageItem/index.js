import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './image-item.module.css';

function ImageItem({ image, onSelectImg, position, selected }) {

    const isSelectedStyle = () => selected ? styles.selected : null;
    const imgItemContainerClasses = `${styles['image-container']} ${isSelectedStyle()}`;
    const onImageClick = () => onSelectImg(position);

    return (
        <div className={imgItemContainerClasses}>
            <img onClick={onImageClick} src={image} />
        </div>
    );
}

ImageItem.propTypes = {};

export default memo(ImageItem);
