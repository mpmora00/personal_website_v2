import { useState } from 'react';
import { Box, ImageListItem, Dialog, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './ImageDetails.module.scss';

export default function ImageDetails({ img, title, description }: { img: string, title: string, description: string }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ImageListItem key={img} className={styles.imagelistITem}>
            <img
                src={img}
                alt={title}
                loading="lazy"
                onClick={handleOpen}
                className={styles.artwork}
            />
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <Box className={styles.dialogContainer}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        className={styles.closeIcon}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={img}
                        alt={title}
                        loading="lazy"
                        className={styles.dialogImage}
                    />
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body1" className={styles.dialogText}>
                        {description}
                    </Typography>
                </Box>
            </Dialog>
        </ImageListItem>
    );
}
