import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { requestData } from '../../features/newsSlice';

export default function Categories({ icon, selected, name, id }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(requestData(id));
  };
  return (
    <>
      <li
        className={
          selected
            ? 'news-screen-categories-selected-container'
            : 'categories-list'
        }
        onClick={handleClick}
      >
        <span>{name}</span>
      </li>
    </>
  );
}
