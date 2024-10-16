import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {StyledText, StyledLink} from '../../../styles/components.tsx';
import { theme } from '../../../styles/themes.tsx'; 
import { ThemeProvider } from '@mui/material/styles';
import { JobsInformation, JobDescription } from '../../../utils/jobs.ts';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{pl: 3, pr: 3}}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Jobs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ mt: '3rem', bgcolor: 'transparent', display: 'flex'}}
    >
      <Box>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              left: 0, 
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 5, 
            },
          }}
          sx={{ 
            width: '150px',
            '& .MuiTab-root': {
                color: 'white',
                fontWeight: '100',
                borderLeft: `2px solid ${theme.palette.primary.dark}`,
            },
            '& .Mui-selected': {
                fontWeight: '400',
                bgcolor: "primary.dark",
            },

          }}
        >
            {Object.entries(JobsInformation).map(([key, jobs]) =>
              <Tab key={`Tab-${key}`} label={jobs[0].location} {...a11yProps(Number(key))} />
            )}
        </Tabs>
      </Box>
        {Object.entries(JobsInformation).map(([key, jobs]) =>
            <TabPanel key={key} value={value} index={Number(key)}>
            {jobs.map((job: JobDescription, index: number) => (
              <StyledText key={`StyledText-${index}`}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h6" color="primary.contrastText">{job.position} <StyledLink href={job.url} text={job.location}/></Typography>
                    <Typography variant="body2">{job.time}</Typography>
                    <ul>
                      {job.description.map((desc: string, descIndex: number) => (
                        <li key={`${job.position}-${descIndex}`}>{desc}</li>
                      ))}
                    </ul>
                </ThemeProvider>
              </StyledText>
            ))}
          </TabPanel>
      )}
    </Box>
  );
}
