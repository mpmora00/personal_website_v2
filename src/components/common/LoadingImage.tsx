import React, { useEffect, useRef, useState } from 'react';
import styles from './LoadingImage.module.scss';
import { Box } from '@mui/material';
import classNames from 'classnames';

// Based on https://blog.webdevsimplified.com/2023-05/lazy-load-images/

interface LoadingImageProps {
    src: string;
    children: (imgRef: React.RefObject<HTMLImageElement>) => React.ReactNode;
    className?: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ src, children, className }) => {
    const [imageSize, setImageSize] = useState<{ width: number; height: number } | null>(null);
    const blurredImageDivRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const loaded = () => {
        blurredImageDivRef.current?.classList.add(styles.loaded);
    };
    const backgroundImage = src.replace(/(\.png|\.jpg)$/, '-small$1');

    useEffect(() => {
        const img = new Image();
        img.src = backgroundImage;

        img.onload = () => {
            setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
        };
    }, [src]);

    const calculatedHeight = imageSize ?
        (blurredImageDivRef.current ?
            (blurredImageDivRef.current.offsetWidth * imageSize.height) / imageSize.width
            : 0)
        : 0;

    useEffect(() => {
        const img = imgRef.current;

        if (img) {
            if (img.complete) {
                loaded();
            } else {
                img.addEventListener('load', loaded);
            }
        }
    }, [imgRef]);

    return (
        <Box ref={blurredImageDivRef}
            className={classNames(styles.blurredImg, className, {
                [styles.loaded]: blurredImageDivRef.current?.classList.contains(styles.loaded)
            })}
            sx={{ 
                height: calculatedHeight ? `${calculatedHeight}px` : 'auto',
                backgroundImage: `url(${backgroundImage})` }}
        >
            <Box className={styles.imageContainer}>
                {children(imgRef)}
            </Box>
        </Box>
    );
};

export default LoadingImage;
