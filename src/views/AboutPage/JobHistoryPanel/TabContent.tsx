import { Box } from '@mui/material';
import { JobDescription } from '../../../utils/jobs.ts';
import Typography from '@mui/material/Typography';
import StyledBulletPoints from '../../../components/common/StyledBulletPoints.tsx';
import StyledLink from '../../../components/common/StyledLink.tsx';
import styles from './TabContent.module.scss';


interface TabContentProps {
    index: number;
    value: number;
    jobs: JobDescription[];
}

export function TabContent({ index, value, jobs }: TabContentProps) {
    return (
        <Box hidden={value !== index} className={styles.panelContainer}>
            {jobs.map((job: JobDescription, index: number) => (
                <Box key={index} className={index != 0 && styles.jobPositionTitle}>
                    <Typography variant="h6">
                        {job.position}
                        <StyledLink href={job.url} text={job.location}/>
                    </Typography>
                    <Typography variant="body2">
                        {job.time}
                    </Typography>
                    <StyledBulletPoints items={job.description.map((desc: string) => desc)} />
                </Box>
            ))}
        </Box>
    );
}