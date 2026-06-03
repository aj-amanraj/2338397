import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <NotificationsIcon />

          <Typography variant="h6" fontWeight="bold">
            Campus Notification System
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
