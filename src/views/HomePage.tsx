import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Box, ImageListItem, ImageList, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HomePageNavLinks } from '../utils/navlinks.tsx'

interface ImageLinkProps {
  href: string;
  src: string;
  title: string;
  description: string;
}

function ImageLink({ href, src, title, description } : ImageLinkProps) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Box 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => { navigate(href); }}
    >
      <img
        style={{
          display: 'block',
          width: '100%',
          objectFit: 'cover',
          opacity: hovered ? '20%' : '100%',
        }}
        srcSet={`${src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${src}?w=164&h=164&fit=crop&auto=format`}
        alt={title}
        loading="lazy"
      />
      <Box sx={{
        visibility:  hovered ? 'visible' : 'hidden',
        position: 'absolute',
        top: '40%',
        padding: '0px 5rem',
        textAlign: 'center',
        alignItems: 'center'
      }}>
        <Typography variant="h5" color="primary.contrastText">
          {title}
        </Typography>
        <Typography variant="body1" color="primary.main">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default function HomePage() {

  return (
    <TransitionGroup component={null}>
      <CSSTransition classNames='fade' timeout={2000}>

        <div className="HomePage">
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ImageList sx={{ width: '90%' }} cols={2}>
              {HomePageNavLinks.map(({ img, href, title, description }) => (
                <ImageListItem key={title} sx={{ margin: '4px', mb: '0px' }}>
                  <ImageLink
                    href={href}
                    src={img}
                    title={title}
                    description={description}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>

      </CSSTransition>
    </TransitionGroup>
  );
}