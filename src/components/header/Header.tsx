import { useState } from 'react';
import { Box, Button, MenuItem, Menu } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PageTab } from '@/information/Routing.tsx'
import styles from './Header.module.scss';
import classNames from 'classnames';
import resumePDF from '@/assets/Resume.pdf';


const projectTabs = ['code samples', 'digital design', 'animations', 'artworks'];

export default function Header({ page } : { page: PageTab }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getClassName = (currentPage: string, targetPage: string, dropdown: boolean | null = null): string => {
    return classNames({
      [styles.selectedTab]: currentPage === targetPage || (dropdown !== null && dropdown),
      [styles.projectsSelected]: targetPage == PageTab.projects && open,
    });
  };



  // const DropDownMenu = styled(({ className, ...props }: TooltipProps) => (
  //   <Tooltip {...props} 
  //     classes={{ popper: className }} 
  //     disableFocusListener
  //     placement="bottom" 
  //   />
  // ))(() => ({
  //   [`& .${tooltipClasses.tooltip}`]: {
  //     padding: '0px',
  //     borderRadius: '5px',
  //     overflow: 'hidden',
  //   },
  // }));

  return (
    <Box className={styles.headerContainer}>
      <Box className={styles.header}>Maria Mora</Box>
      <Box className={styles.headerButtons}>
        <Button 
          className={getClassName(page, PageTab.home)}
          onClick={() => { navigate('/') }}
        >
          Home
        </Button>
        <Button
          className={getClassName(page, PageTab.projects)}
          onClick={handleClick}
          disableRipple
        >
          Projects
        </Button>
        <Menu
          className={styles.menuContainer}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {projectTabs.map((item) => (
            <MenuItem
              key={item}
              onClick={() => navigate(`/projects/${item.replace(/\s+/g, '')}`)}
              className={styles.menuItem}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
        <Button 
          className={getClassName(page, PageTab.about)}
          onClick={() => { navigate('/about') }}
        >
          About
        </Button>
        <Button 
          href={resumePDF}
        >
          Resume
        </Button>
      </Box>
    </Box>
  );
}
