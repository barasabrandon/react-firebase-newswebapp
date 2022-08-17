import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMediaType } from '../../features/wananchReportingSlice';

export default function MediaType({ name, id, selected }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeMediaType(id));
  };
  return (
    <>
      <li
        className={selected ? 'wananchi-reporting-selected-category' : ''}
        onClick={handleClick}
      >
        {name}
      </li>
    </>
  );
}
