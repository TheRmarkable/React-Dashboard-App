import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function AtomButton({ text, variant, color, onClick }) {

  return (
    <Stack spacing={2} 
    direction="row">
      <Button 
        variant={variant}
        color={color}
        onClick={onClick}
        >
            {text}
      </Button>
    </Stack>
  );
}

AtomButton.defaultProps = {
    variant: "contained"
}

AtomButton.proptypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string, 
    onClick: PropTypes.func
}