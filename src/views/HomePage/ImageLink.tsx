import { useState, useCallback } from 'react';
import classNames from 'classnames';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './ImageLink.module.scss';

interface ImageLinkProps {
    href: string;
    src: string;
    title: string;
    description: string;
}

export function ImageLink({ href, src, title, description }: ImageLinkProps) {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = useCallback(() => setHovered(true), []);
    const handleMouseLeave = useCallback(() => setHovered(false), []);
    const handleClick = useCallback(() => navigate(href), [href, navigate]);

    return (
        <Box
            className={styles.imageLink}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <img
                className={classNames(styles.image, { [styles.hovered]: hovered })}
                src={src}
                alt={title}
                loading="lazy"
            />
            <Box className={classNames(styles.imageText, { [styles.hovered]: hovered })}>
                <Typography variant="h5" color="primary.contrastText">
                    {title}
                </Typography>
                <Typography variant="body1" color="primary.main">
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}
