import { CardActions, Card, Box, CardContent, IconButton, Tooltip } from '@mui/material';
import { Launch, MoreHoriz, Email } from '@mui/icons-material';
import styles from './ProjectCard.module.scss';
import { Project } from '@/information/CodeProjectsList';
import StyledTitle from '@/components/common/StyledTitle';

export default function ProjectCard({ project, handleOpen }: {
    project: Project;
    handleOpen: () => void;
}) {
    return (
        <Card className={styles.projectCard}>
            <CardContent className={styles.cardContent}>
                <StyledTitle text={project.title} classname={styles.title} />
                {project.shortDescription}
                <Box className={styles.codingLanguages}>{project.language}</Box>
            </CardContent>

            <CardActions className={styles.cardActions}>
                <Tooltip placement="top" arrow title={project.link ? "Open Codebase" : "More Information"}>
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
