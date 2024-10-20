import { useState, useCallback } from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './ImageLink.module.scss';
import StyledTitle from '@/components/common/StyledTitle';

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
                <StyledTitle text={title}/>
                <Box className={styles.imageDescription}>{description}</Box>
            </Box>
        </Box>
    );
}
