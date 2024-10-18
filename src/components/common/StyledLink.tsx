import { Link } from '@mui/material';

export default function StyledLink({ href, text }: { href: string, text: string }) {
    return (
        <Link
            underline="hover"
            href={href}
            color="secondary.main"
            target="_blank"
            rel="noreferrer">
            {text}
        </Link>
    );
};