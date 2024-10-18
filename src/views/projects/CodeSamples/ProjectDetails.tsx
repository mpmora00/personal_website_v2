import { useCallback, useState } from 'react';
import { Box, Dialog, Typography, IconButton } from '@mui/material';
import { Close  } from '@mui/icons-material';
import { Project } from './CodeProjectsList';
import styles from './ProjectDetails.module.scss';
import ProjectCard from './ProjectCard';

export default function ProjectDetails({ project }: { project : Project }) {
    const [open, setOpen] = useState(false);

    const handleClose = useCallback(() => setOpen(false), []);
    const handleOpen = useCallback(() => setOpen(true), []);

    return (
        <Box>
            <ProjectCard project={project} handleOpen={handleOpen} />
            <Dialog open={open} onClose={handleClose}>
                <Box className={styles.dialogContainer}>
                    <IconButton onClick={handleClose} className={styles.closeIcon}>
                        <Close/>
                    </IconButton>
                    <Typography variant="h5">
                        {project.title}
                    </Typography>
                    <Typography variant="body1" className={styles.dialogText}>
                        {project.longDescription}
                    </Typography>
                </Box>
            </Dialog>
        </Box>
    );
}
