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
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import TableDataControlls from '../../../components/TableDataControlls';

export default function TableRow({ docData, docId, collectionName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditClick = (e) => {
    e.preventDefault();
    dispatch(currentNewsItemAction({ id: docId, collectionName }));
    navigate('/dashboard/creation-form');
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deleteNewsItemAction({ id: docId, collectionName }));
  };

  const handleViewClick = (e) => {
    e.preventDefault();
    navigate(`/news/${collectionName}/${docId}`);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    navigate('/dashboard/creation-form');
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
          <TableDataControlls
            editUrl={'/dashboard/creation-form'}
            viewUrl={`/news/${collectionName}/${docId}`}
            addView={'/dashboard/creation-form'}
            editDispatchAction={currentNewsItemAction({
              id: docId,
              collectionName,
            })}
            deleteDispatchAction={deleteNewsItemAction({
              id: docId,
              collectionName,
            })}
          />
        </td>
      </tr>
    </>
  );
}

const deleteIconStyles = { color: 'red' };
const editIconStyles = { color: 'orange' };
const visibilityIcon = { color: 'green' };
const addIcon = { color: 'blue' };
const imageStyle = { borderRadius: '5px', height: '40px', width: '50px' };
