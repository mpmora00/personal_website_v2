import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { JobsInformation } from '@/information/JobsList.ts';
import styles from './JobTabs.module.scss';
import { useMediaQuery } from '@mui/material';


export function JobTabs({ value, setValue }: { value: number, setValue: (value: number) => void }) {
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // Define the tab orientation based on screen size
    const isMediumScreen = useMediaQuery('(max-width:600px)');

    return (
        <Tabs
            orientation={isMediumScreen ? 'horizontal' : 'vertical'}
            value={value}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            onChange={handleChange}
            className={styles.jobTabs}
        >
            {Object.entries(JobsInformation).map(([key, jobs]) =>
                <Tab className={styles.jobTab} key={key} label={jobs[0].location} />
            )}
        </Tabs>
    );
}
