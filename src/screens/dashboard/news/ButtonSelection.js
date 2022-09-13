import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { requestData } from '../../../features/newsSlice';

export default function ButtonSelection({ selected, name, icon, id }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(requestData(id));
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
