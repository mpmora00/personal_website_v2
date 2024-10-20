import { Link } from '@mui/material';
import styles from './StyledLink.module.scss'

export default function StyledLink({ href, text }: { href: string, text: string }) {
    return (
        <Link
            underline="hover"
            href={href}
            className={styles.styledLink}
            target="_blank"
            rel="noreferrer">
            {text}
        </Link>
    );
};