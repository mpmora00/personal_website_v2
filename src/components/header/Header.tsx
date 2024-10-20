import { useState } from 'react';
import { Box, Button, styled, MenuItem, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { PageTab } from '@/information/Routing.tsx'
import styles from './Header.module.scss';
import classNames from 'classnames';
import resumePDF from '@/assets/Resume.pdf';


const projectTabs = ['Code Samples', 'Digital Design', 'Animations', 'Artworks'];

export default function Header({ page } : { page: PageTab }) {
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const getClassName = (currentPage: string, targetPage: string, dropdown: boolean | null = null): string => {
    return classNames({
      [styles.selectedTab]: currentPage === targetPage || (dropdown !== null && dropdown),
      [styles.projectsSelected]: targetPage == PageTab.projects && isDropdownVisible,
    });
  };

  const handleOpen = () => {
    setDropdownVisible(true);
  };
  const handleClose = () => {
    setDropdownVisible(false);
  };

  const DropDownMenu = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} 
      classes={{ popper: className }} 
      disableFocusListener
      placement="bottom" 
    />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      padding: '0px',
      borderRadius: '5px',
      overflow: 'hidden',
    },
  }));

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
        <DropDownMenu
          title={( 
            <Box className={styles.menuItem}>
              {projectTabs.map((item) => (
                <MenuItem 
                  key={item}
                  onClick={() => navigate(`/projects/${item.toLowerCase().replace(/\s+/g, '')}`)}
                >
                  {item}
                </MenuItem>
              ))}
            </Box>
          )}
          open={isDropdownVisible}
          onOpen={handleOpen}
          onClose={handleClose}
        >
          <Button
            className={getClassName(page, PageTab.projects)}
            onClick={handleOpen} 
            disableRipple
          >
             Projects
          </Button>
        </DropDownMenu>
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
