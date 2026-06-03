import { Box, Typography, Grid } from "@mui/material";

import NotificationCard from "./NotificationCard";

function NotificationList({ notifications }) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        All Notifications
      </Typography>

      <Grid container spacing={2}>
        {notifications.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <NotificationCard notification={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NotificationList;
