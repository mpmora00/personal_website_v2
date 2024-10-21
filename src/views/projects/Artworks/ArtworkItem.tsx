import { useCallback, useState } from 'react';
import { Box, Dialog, IconButton } from '@mui/material';
import { Close, MoreHoriz } from '@mui/icons-material';
import { Artwork } from '@/information/ArtworkList';
import StyledTitle from '@/components/common/StyledTitle';
import styles from './ArtworkItem.module.scss';
import classNames from 'classnames';
import LoadingImage from '@/components/common/LoadingImage';

interface ArtworkItemProps {
    artwork: Artwork;
    title: string;
    description: string;
}

export default function ArtworkItem({ artwork, title, description }: ArtworkItemProps) {
    const [open, setOpen] = useState(false);
    const [descriptionOpen, setShowDescription] = useState(false);

    const handleClose = useCallback(() => setOpen(false), []);
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleDescription = useCallback(() => setShowDescription(!descriptionOpen), [descriptionOpen]);
    
    return (
        <Box className={styles.imageContainer}>
            <LoadingImage src={artwork.src}>
                {(imgRef) => (<img
                    src={artwork.src}
                    ref={imgRef}
                    alt={artwork.title}
                    loading="lazy"
                    onClick={handleOpen}
                    className={styles.image}
                />)}
            </LoadingImage>

            <Dialog 
                open={open} 
                onClose={handleClose} 
                PaperProps={{className: styles.dialog}}
            >
                <Box className={styles.dialogContainer}>
                    <LoadingImage src={artwork.src}>
                        {(imgRef) => (<img
                            src={artwork.src}
                            ref={imgRef}
                            alt={artwork.title}
                            loading="lazy"
                            className={styles.dialogImage}
                        />)}
                    </LoadingImage>
                    <Box className={classNames(styles.imageDescription, {
                        [styles.imageDescriptionShow]: descriptionOpen
                    })}>
                        <StyledTitle text={title} />
                        <Box>{description}</Box>
                    </Box>
                    <Box className={styles.closeIcon}>
                        <IconButton onClick={handleDescription}>
                            <MoreHoriz />
                        </IconButton>
                        <IconButton onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    );
}
