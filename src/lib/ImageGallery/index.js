import React, { useState } from 'react';
import ImageList from '../ImageList';
import ImagePreview from '../ImagePreview';
import styles from './image-gallery.module.css';

const images = [
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
    'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
    'https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
];

// const hashMapper = () => images.map((image,i) => `${image}${i}`);
function updateWithLimits(nextPosition ,endLimit, startLimit = 0) {
    const isLessThanStart = nextPosition < startLimit;
    const isMoreThanEnd = nextPosition > endLimit;

    if (isLessThanStart) {
        return startLimit;
    } else if (isMoreThanEnd) {
        return endLimit;
    } else {
        return nextPosition;
    }
}

function ImageGallery() {
    const IMAGES_SIZE = images.length;
    const UP = -1;
    const DOWN = 1;
    const IMAGES_SIZE_ARRAY = IMAGES_SIZE - 1;

    const [currentImg, setCurrentImg] = useState(0);
    
    const onSelectImg = (position) => {
        return setCurrentImg(position);
    }

    const upDownController = (direction) => {
        return setCurrentImg(
            updateWithLimits(currentImg + direction, IMAGES_SIZE_ARRAY)
        );
    }

    return (
        <div className={styles['image-g-container']}>
            <ImageList
                upButton={
                    <button className={styles['btn-default']} onClick={() => upDownController(UP)}>Up</button>
                }
                downButton={
                    <button className={styles['btn-default']} onClick={() => upDownController(DOWN)}>Down</button>
                }
                onSelectImg={onSelectImg}
                showLimit={3}
                currentImg={currentImg}
                images={images}
            />
            <div className={styles['image-p-container']}>
                <ImagePreview image={images[currentImg]} />
            </div>
        </div>
    );
}

ImageGallery.propTypes = {};

export default ImageGallery;
export {updateWithLimits};