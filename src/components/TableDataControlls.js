import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function TableDataControlls({
  editUrl,
  viewUrl,
  addView,
  editDispatchAction,
  deleteDispatchAction,
  isMedia,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditClick = (e) => {
    e.preventDefault();
    dispatch(editDispatchAction);
    navigate(editUrl);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deleteDispatchAction);
  };

  const handleViewClick = (e) => {
    e.preventDefault();
    navigate(viewUrl);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    navigate(addView);
  };

  return (
    <div style={newsdashboard_control_icons}>
      {isMedia ? (
        ''
      ) : (
        <div>
          <Tooltip title="Update Article" arrow>
            <EditIcon style={editIconStyles} onClick={handleEditClick} />
          </Tooltip>
        </div>
      )}

      <div>
        <Tooltip title="Delete Article" arrow>
          <DeleteOutlineIcon
            style={deleteIconStyles}
            onClick={handleDeleteClick}
          />
        </Tooltip>
      </div>
      <div>
        <Tooltip title="View Article" arrow>
          <VisibilityIcon style={visibilityIcon} onClick={handleViewClick} />
        </Tooltip>
      </div>
      <div>
        <Tooltip title="New Article" arrow>
          <AddCircleOutlinedIcon style={addIcon} onClick={handleAddClick} />
        </Tooltip>
      </div>
    </div>
  );
}

const newsdashboard_control_icons = {
  display: 'flex',
  flexDirection: 'row',
};

const deleteIconStyles = { color: 'red' };
const editIconStyles = { color: 'orange' };
const visibilityIcon = { color: 'green' };
const addIcon = { color: 'blue' };
