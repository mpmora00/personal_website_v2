import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { JobsInformation } from '../../../utils/jobs.ts';
import styles from './JobTabs.module.scss';


export function JobTabs({ value, setValue }: { value: number, setValue: (value: number) => void }) {
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            className={styles.jobTabs}
        >
            {Object.entries(JobsInformation).map(([key, jobs]) =>
                <Tab className={styles.jobTab} key={key} label={jobs[0].location} />
            )}
        </Tabs>
    );
}
