import styles from './StyledBulledPoints.module.scss';
import { List, ListItem} from '@mui/material';

interface StyledBulletPointsProps {
    items: string[];
    className?: string;
}

export default function StyledBulletPoints({ items, className }: StyledBulletPointsProps) {
    return (
        <List className={className}>
            {items.map((item, index) => (
                <ListItem className={styles.listItems} key={index}>{item}</ListItem>
            ))}
        </List>
    );
}