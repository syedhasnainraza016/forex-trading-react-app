import * as React from "react";
import {
  Button,
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";

function BasicMadal({
  title = "Modal",
  open,
  onClose,
  cancel,
  cancelText = "cancel",
  ok,
  okText = "Ok",
  okType = "button",
  okDisabled = false,
  children,
  maxWidth = "sm",
}) {
  const handlecancel = () => {
    onClose?.();
    typeof cancel === "function" && cancel?.();
  };

  return (
    <>
      <MUIDialog
        open={open}
        onClose={onClose}
        fullWidth={true}
        maxWidth={maxWidth}
      >
        <DialogTitle sx={{ bgcolor: "#7ad7ff", color: "primary.contrastText" }}>
          {title}
        </DialogTitle>
        <DialogContent>
          <Box pt={3}>
            {children || (
              <DialogContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </DialogContentText>
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3 }}>
          {cancel && (
            <Button onClick={handlecancel} sx={{ mr: 1 }}>
              {cancelText}
            </Button>
          )}
          {ok && (
            <Button
              type={okType}
              onClick={ok}
              disabled={okDisabled}
              variant="contained"
              sx={{
                border: "1px solid #000",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#000",
                },
              }}
            >
              {okText}
            </Button>
          )}
        </DialogActions>
      </MUIDialog>
    </>
  );
}

export default BasicMadal;
