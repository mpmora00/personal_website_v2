import { Box, Divider } from '@mui/material';
import React from 'react';
import styles from './JobHistoryPanel.module.scss';
import { TabContent } from './JobHistoryPanel/TabContent.tsx';
import { JobTabs } from './JobHistoryPanel/JobTabs.tsx';
import StyledTitle from '@/components/common/StyledTitle.tsx';

export function JobHistoryPanel() {
    const [value, setValue] = React.useState(0);

    return (
        <Box className={styles.jobHistory}>
            <Box className={styles.title}>
                <StyledTitle text={"Where I've worked"}/>
                <Divider className={styles.divider} />
            </Box>

            <Box className={styles.jobHistoryPanel}>
                <JobTabs value={value} setValue={setValue} />
                 <TabContent key={value} value={value} />
            </Box>
        </Box>
    );
}