import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from '../ImageItem';
import styles from './image-list.module.css';

function ImageList({
    images,
    onSelectImg,
    upButton,
    downButton,
    currentImg,
    showLimit,
}) {
    const renderImages = () => {
        const IMAGES_LENGTH = images.length;
        const imageComponents = [];
        for (let i = 0; i < showLimit + 1; i++) {
            const img = images[i];
            imageComponents.push(
                <ImageItem
                    position={i}
                    onSelectImg={onSelectImg}
                    key={img}
                    selected={i === currentImg}
                    image={img}
                />
            );
        }
        return imageComponents;
    };

    renderImages();

    return (
        <div className={styles['img-g-list']}>
            {upButton}
            {renderImages()}
            {downButton}
        </div>
    );
}

ImageList.propTypes = {};

export default ImageList;
