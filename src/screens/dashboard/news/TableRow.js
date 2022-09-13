import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentNewsItemAction,
  deleteNewsItemAction,
} from '../../../actions/newsAction';
import { useNavigate } from 'react-router-dom';

export default function TableRow({ docData, docId, collectionName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditClick = (e) => {
    e.preventDefault();
    dispatch(currentNewsItemAction({ id: docId, collectionName: 'National' }));
    navigate('/dashboard/creation-form');
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deleteNewsItemAction({ id: docId, collectionName: 'National' }));
  };

  return (
    <>
      <tr>
        <td>
          <img src={docData.imgUrl} style={imageStyle} alt="" />
        </td>
        <th scope="row">{docData.title}</th>
        <td>{moment(new Date(docData.createdAt.seconds * 1000)).fromNow()}</td>
        <td>
          <p>{docData.text.slice(0, 20)}...</p>
        </td>
        <td>{docData.status}</td>
        <td>
          <span className="newsdashboard_control_icons">
            <EditIcon style={editIconStyles} onClick={handleEditClick} />
            <DeleteOutlineIcon
              style={deleteIconStyles}
              onClick={handleDeleteClick}
            />
          </span>
        </td>
      </tr>
    </>
  );
}

const deleteIconStyles = { color: 'red' };
const editIconStyles = { color: 'green' };
const imageStyle = { borderRadius: '5px', height: '40px', width: '50px' };
