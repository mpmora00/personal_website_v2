import { CardActions, Card, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import { Launch, MoreHoriz, Email } from '@mui/icons-material';
import styles from './ProjectCard.module.scss';
import { Project } from './CodeProjectsList';

export default function ProjectCard({ project, handleOpen }: {
    project: Project;
    handleOpen: () => void;
}) {
    return (
        <Card className={styles.projectCard}>
            <CardContent>
                <Typography variant="h5" className={styles.title}>
                    {project.title}
                </Typography>
                <Typography gutterBottom variant="body2">
                    Coding Language: {project.language}
                </Typography>
                <Typography variant="body1">
                    {project.shortDescription}
                </Typography>
            </CardContent>

            <CardActions className={styles.cardActions}>
                <Tooltip placement="top" arrow title={project.link ? "Open Codebase" : "Request Code"}>
                    <IconButton
                        className={styles.icons}
                        href={project.link || "mailto:mpmora00@gmail.com"}
                        target={project.link ? "_blank" : undefined}
                        rel={project.link ? "noopener noreferrer" : undefined}
                    >
                        {project.link ? <Launch /> : <Email />}
                    </IconButton>
                </Tooltip>
                <Tooltip placement="top" arrow title="More Information">
                    <IconButton className={styles.icons} onClick={handleOpen}>
                        <MoreHoriz />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}
