import { useState } from 'react';
import { Box, Button, styled, MenuItem, Tooltip, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { PageTab } from '../../utils/enums.tsx'


export default function Header({ page } : { page: PageTab }) {
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const textColor = (currentPage: string, targetPage: string, dropdown: boolean | null = null) => {
    return currentPage === targetPage || (dropdown !== null && dropdown) ? "primary.contrastText" : "primary.main";
  }

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
    <Box sx={{
      textAlign: 'center',
    }}>
      <Typography variant="h2" color="primary.contrastText">Maria Mora</Typography>
      <Box sx={{ 
        '& button': {
          margin: '0px 10px',
          padding: '10px 20px',
        },
        '& button:hover': {
          color: 'primary.contrastText',
          backgroundColor: "primary.light"
        }
      }}>
        <Button sx={{ color: textColor(page, PageTab.home) }}
          onClick={() => { navigate('/'); }}
        >
          <Typography variant="h5">Home</Typography>
        </Button>
        <DropDownMenu
          title={( 
            <Box sx={{ 
              '& .MuiMenuItem-root': {
                // fontFamily: "'Bebas Neue', Impact",
                backgroundColor: "primary.light",
                fontSize: '22px',
                width: '100%',
                color: 'white',
                justifyContent: 'center',
              },
              '& .MuiMenuItem-root:hover': {
                backgroundColor: "primary.dark"
              }
            }}>
              <MenuItem onClick={() => { navigate('/projects/codesamples'); }}>
                <Typography variant="h5">Code Samples</Typography>
              </MenuItem>
              <MenuItem onClick={() => { navigate('/projects/digitaldesign'); }}>
                <Typography variant="h5">Digital Design</Typography>
              </MenuItem>
              <MenuItem onClick={() => { navigate('/projects/animations'); }}>
                <Typography variant="h5">Animations</Typography>
              </MenuItem>
              <MenuItem onClick={() => { navigate('/projects/artworks'); }}>
                <Typography variant="h5">Artworks</Typography>
              </MenuItem>
            </Box>
          )}
          open={isDropdownVisible}
          onOpen={handleOpen}
          onClose={handleClose}
        >
          <Button
            sx={{ 
              cursor: 'default',
              color: textColor(page, PageTab.projects, isDropdownVisible),
              backgroundColor: isDropdownVisible ? "primary.light" : undefined,
            }}
            onClick={handleOpen} 
            disableRipple
          >
             <Typography variant="h5">Projects</Typography>
          </Button>
        </DropDownMenu>
        <Button sx={{ color: textColor(page, PageTab.about) }}
          onClick={() => {
            navigate('/about');
          }}
        >
          <Typography variant="h5">About</Typography>
        </Button>
        <Button sx={{ color: textColor(page, PageTab.resume) }}
          onClick={() => {
            navigate('/resume');
          }}
        >
          <Typography variant="h5">Resume</Typography>
        </Button>
      </Box>
    </Box>
  );
}
