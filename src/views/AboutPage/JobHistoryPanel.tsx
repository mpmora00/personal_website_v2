import { Box, Typography, Divider } from '@mui/material';
import React from 'react';
import styles from './JobHistoryPanel.module.scss';
import { JobsInformation } from '../../utils/jobs.ts';
import { TabContent } from './JobHistoryPanel/TabContent.tsx';
import { JobTabs } from './JobHistoryPanel/JobTabs.tsx';

export function JobHistoryPanel() {
    const [value, setValue] = React.useState(0);

    return (
        <Box className={styles.jobHistory}>
            <Box className={styles.title}>
                <Typography variant="h5">
                    {"Where I've worked"}
                </Typography>
                <Divider className={styles.divider} />
            </Box>

            <Box className={styles.jobHistoryPanel}>
                <JobTabs value={value} setValue={setValue} />
                {Object.entries(JobsInformation).map(([key, jobs]) =>
                    <TabContent key={key} value={value} jobs={jobs} index={Number(key)} />
                )}
            </Box>
        </Box>
    );
}