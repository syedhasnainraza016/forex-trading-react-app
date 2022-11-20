import React from "react";
import { Button } from "@mui/material";

export default function BasicButton({
  StartIcon,
  EndIcon,
  onClick,
  title,
  sx,
}) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          mr: 1,
          border: "1px solid #000",
          "&:hover": {
            backgroundColor: "blue",
            color: "#fff",
          },
          ...sx,
        }}
        endIcon={EndIcon ? <EndIcon /> : ""}
        startIcon={StartIcon ? <StartIcon /> : ""}
        onClick={onClick}
      >
        {title}
      </Button>
    </div>
  );
}
