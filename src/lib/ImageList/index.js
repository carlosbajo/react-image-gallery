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
    

    return (
        <div className={styles['img-g-list']}>
            {upButton}
            {images.map((img, i) => (
                <ImageItem
                    position={i}
                    onSelectImg={onSelectImg}
                    key={img}
                    selected={i === currentImg}
                    image={img}
                />
            ))}
            {downButton}
        </div>
    );
}

ImageList.propTypes = {};

export default ImageList;
