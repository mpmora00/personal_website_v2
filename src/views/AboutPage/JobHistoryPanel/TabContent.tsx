import { Box } from '@mui/material';
import StyledBulletPoints from '@/components/common/StyledBulletPoints.tsx';
import StyledLink from '@/components/common/StyledLink.tsx';
import styles from './TabContent.module.scss';
import { JobsInformation, JobDescription } from '@/information/JobsList.ts';


export function TabContent({ value }: { value: number }) {
    return (
        <Box className={styles.panelContainer}>
            {JobsInformation[value].map((job: JobDescription, index: number) => (
                <Box key={index} className={index != 0 && styles.firstDescription}>
                    <Box className={styles.jobPosition}>
                        {job.position}
                        <StyledLink href={job.url} text={job.location}/>
                    </Box>
                    <Box className={styles.jobTime}>{job.time}</Box>
                    <StyledBulletPoints items={job.description.map((desc: string) => desc)} />
                </Box>
            ))}
        </Box>
    );
}