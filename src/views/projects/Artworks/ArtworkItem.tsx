import { useCallback, useState } from 'react';
import { Box, Dialog, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Artwork } from '@/information/ArtworkList';
import StyledTitle from '@/components/common/StyledTitle';
import styles from './ArtworkItem.module.scss';

interface ArtworkItemProps {
    artwork: Artwork;
    title: string;
    description: string;
}

export default function ArtworkItem({ artwork, title, description }: ArtworkItemProps) {
    const [open, setOpen] = useState(false);

    const handleClose = useCallback(() => setOpen(false), []);
    const handleOpen = useCallback(() => setOpen(true), []);

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
                    <Box className={styles.imageDescription}>
                        <StyledTitle text={title} />
                        <Box>{description}</Box>
                    </Box>
                    <IconButton onClick={handleClose} className={styles.closeIcon}>
                        <Close />
                    </IconButton>
                </Box>
            </Dialog>
        </Box>
    );
}
