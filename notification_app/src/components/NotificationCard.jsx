import { Card, CardContent, Typography, Chip, Stack } from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">{notification.title}</Typography>

          <Chip
            label={notification.priority}
            color={
              notification.priority === "High"
                ? "error"
                : notification.priority === "Medium"
                  ? "warning"
                  : "success"
            }
          />
        </Stack>

        <Typography variant="body1" mb={2}>
          {notification.message}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Type: {notification.type}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Time: {notification.time}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;
