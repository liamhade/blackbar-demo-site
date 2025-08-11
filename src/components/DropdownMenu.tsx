import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';

const options = [
  'Circuit Details (React)',
  'Order Summary (React)',
  // 'Circuit Details (HTML)',
  'Order Summary (HTML)', // Order manager
  'Network (HTML)',
  'Circuit Tile (HTML)',
];

// function StaticHTMLPage({ url } : {url : string}) {
//   useEffect(() => {
//     window.location.href = url;
//   }, [url]);
//   return <p>Redirecting to {url}...</p>;
// }

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
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
	
    switch (index) {

      case 0:
        navigate("/dashboard");
        break;

      case 1:
        navigate("/dashboard/order-summary");
        break;

      // case 2:
      //   navigate("/html/circuit_details_in_effect");
      //   break;

      case 2:
        navigate("/html/ordermanager");
        break;

      case 3:
        navigate("/html/network");
        break;

      case 4:
        navigate("/html/circuit_tile");
        break;
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
            primary={"Menu"}
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