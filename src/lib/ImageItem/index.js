import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './image-item.module.css';
import NoPhoto from '../assets/no-photo.svg';
import Empty from './empty';

function ImageItem({ image, onSelectImg, position, selected }) {
    const isSelectedStyle = () => (selected ? styles.selected : null);
    const imgItemContainerClasses = `${
        styles['image-container']
    } ${isSelectedStyle()}`;
    const onImageClick = () => onSelectImg(position);

    if (!image) {
        return (
            <Empty
                className={imgItemContainerClasses}
                onClick={onImageClick}
                src={NoPhoto}
            />
        );
    }

    return (
        <div className={imgItemContainerClasses}>
            <img onClick={onImageClick} src={image} />
        </div>
    );
}

ImageItem.propTypes = {};

export default memo(ImageItem);
