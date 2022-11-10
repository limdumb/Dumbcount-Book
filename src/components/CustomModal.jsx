import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

export const CustomModal = ({
  title,
  content,
  actions,
  open,
  onClose,
}) => {

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
      >
        <DialogTitle> {title} </DialogTitle>
        <DialogContent>
          {content}
        </DialogContent>
        <DialogActions>
          {actions}
        </DialogActions>
      </Dialog>
    </div>
  )
}
