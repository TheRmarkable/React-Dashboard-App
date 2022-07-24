import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';



export default function AtomModal({openModal, closeModal, title, content, footerButtons }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <Dialog
          open={openModal}
          onClose={closeModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="lg"
        >
          <DialogTitle>
            {title}
            <IconButton
                aria-label="close"
                onClick={closeModal}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {content}
          </DialogContent>
          <DialogActions>
            {footerButtons}
          </DialogActions>
        </Dialog>
    </div>
  );
}

AtomModal.propTypes = {
    openModal: PropTypes.bool,
    closeModal: PropTypes.func,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    footerButtons: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    content: PropTypes.any,
}
