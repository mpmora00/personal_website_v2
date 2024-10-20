import classNames from 'classnames';
import { Box } from '@mui/material';
import styles from './StyledTitle.module.scss'

export default function StyledTitle({ text, classname }: { text: string, classname?: string; }) {
    return (
        <Box className={classNames(styles.styledTitle, classname)}>
            {text}
        </Box>
    );
};