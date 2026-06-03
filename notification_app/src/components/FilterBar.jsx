import { MenuItem, TextField } from "@mui/material";

function FilterBar({ filter, setFilter }) {
  return (
    <TextField
      select
      label="Filter Notifications"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      fullWidth
      sx={{ mb: 4 }}
    >
      <MenuItem value="All">All</MenuItem>

      <MenuItem value="Placement">Placement</MenuItem>

      <MenuItem value="Event">Event</MenuItem>

      <MenuItem value="Result">Result</MenuItem>
    </TextField>
  );
}

export default FilterBar;
