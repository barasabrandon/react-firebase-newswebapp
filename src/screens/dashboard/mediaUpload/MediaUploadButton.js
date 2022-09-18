import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { requestMediaData } from '../../../features/mediaUploadSlice';

export default function MediaUploadButton({ selected, name, icon, id }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(requestMediaData(id));
  };
  return (
    <div>
      <Button
        variant={selected ? 'contained' : 'outlined'}
        onClick={handleClick}
      >
        {name}
      </Button>
    </div>
  );
}
