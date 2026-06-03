import { Box, Typography, Grid } from "@mui/material";

import NotificationCard from "./NotificationCard";

function PrioritySection({ notifications }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h5" gutterBottom>
        Top Priority Notifications
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

export default PrioritySection;
