import { useCallback, useState } from 'react';
import { Box, Dialog, IconButton } from '@mui/material';
import { Close, MoreHoriz } from '@mui/icons-material';
import { Artwork } from '@/information/ArtworkList';
import StyledTitle from '@/components/common/StyledTitle';
import styles from './ArtworkItem.module.scss';
import classNames from 'classnames';

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
            <img
                src={artwork.src}
                alt={artwork.title}
                loading="lazy"
                onClick={handleOpen}
                className={styles.image}
            />
            <Dialog 
                open={open} 
                onClose={handleClose} 
                PaperProps={{className: styles.dialog}}
            >
                <Box className={styles.dialogContainer}>
                    <img
                        src={artwork.src}
                        alt={artwork.title}
                        loading="lazy"
                        className={styles.dialogImage}
                    />
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
