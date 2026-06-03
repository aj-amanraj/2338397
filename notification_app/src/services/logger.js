import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbWFuMjgwN2FqQGdtYWlsLmNvbSIsImV4cCI6MTc4MDQ3NzQ4NiwiaWF0IjoxNzgwNDc2NTg2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZDNlZGNkNzItYmY2OS00ZGQ3LTk0MmQtOGE4NWNjNjRhYjdiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYW1hbiByYWoiLCJzdWIiOiJkOTlhMjEyNy0xY2M0LTQ2ZmYtOTBjOC0xMDYyOGMwMjk2MjgifSwiZW1haWwiOiJhbWFuMjgwN2FqQGdtYWlsLmNvbSIsIm5hbWUiOiJhbWFuIHJhaiIsInJvbGxObyI6IjIzMzgzOTciLCJhY2Nlc3NDb2RlIjoibnd3c0t4IiwiY2xpZW50SUQiOiJkOTlhMjEyNy0xY2M0LTQ2ZmYtOTBjOC0xMDYyOGMwMjk2MjgiLCJjbGllbnRTZWNyZXQiOiJKZFhUVHVZRG5jbm1oa1hhIn0.MMR3os_-8cXJruVfl1M4QMhAOy-I04bXCg7gTN9_-qw";

export const Log = async (stack, level, packageName, message) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
