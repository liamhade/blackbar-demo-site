import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';

const options = [
  'Dashboard',
  'Order Summary',
];

export default function DropdownMenu({defaultIndex} : {defaultIndex : number}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
	
	if (index === 0) {
		navigate("/dashboard")
		console.log("navigating to dashboard")
	} else if (index === 1) {
		navigate("/dashboard/order-summary")
	}
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="main-dropdown-menu">
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItemButton
          id="list-item-header"
          aria-haspopup="listbox"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
		  sx={{
			textAlign: 'center',
			borderRadius: '12px',
			backgroundColor: 'rgba(209, 241, 255, 1)'
		  }}
        >
          <ListItemText
            primary={options[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}