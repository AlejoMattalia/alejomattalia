import { Box, LinearProgress } from "@mui/material";
import "../_History.scss";

export function ProgressBar() {

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        color="primary"
        variant="determinate"
        value={100}
        sx={{
          width: "100%",
          height: "2px",
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "white",
          },
        }}
      />
    </Box>
  );
}
