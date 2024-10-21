import { useCallback, useState } from 'react';
import { Box, Dialog, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import styles from './DetailsContainer.module.scss';
import StyledTitle from '@/components/common/StyledTitle';

interface DetailsContainerProps {
    children: (handleOpen: () => void) => React.ReactNode;
    title: string;
    description: string;
}

export function DetailsContainer({ children, title, description }: DetailsContainerProps) {
    const [open, setOpen] = useState(false);

    const handleClose = useCallback(() => setOpen(false), []);
    const handleOpen = useCallback(() => setOpen(true), []);

    return (
        <Box className={styles.detailsContainer}>
            {children(handleOpen)}
            <Dialog open={open} onClose={handleClose}>
                <Box className={styles.dialogContainer}>
                    <IconButton onClick={handleClose} className={styles.closeIcon}>
                        <Close />
                    </IconButton>
                    <StyledTitle text={title}/>
                    <Box className={styles.dialogText}>{description}</Box>
                </Box>
            </Dialog>
        </Box>
    );
}
