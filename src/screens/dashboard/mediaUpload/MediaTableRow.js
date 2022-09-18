import moment from 'moment';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import TableDataControlls from '../../../components/TableDataControlls';
import { deleteMediaUploadAction } from '../../../actions/mediaUploadAction';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MediaTableRow({
  docId,
  collectionName,
  docData,
  selectedMediaType,
}) {
  const [urlText, setUrlText] = useState('audio');
  console.log(selectedMediaType);
  useEffect(() => {
    if (selectedMediaType === 'Wananchi Reporting Video') {
      setUrlText('video');
    } else if (selectedMediaType === 'Exclusive Videos') {
      setUrlText('exclusiveVideo');
    } else {
      setUrlText('audio');
    }
  }, [selectedMediaType]);

  return (
    <tr>
      <td height={1}>
        {selectedMediaType === 'Wananchi Reporting Audio' ? (
          <audio controls>
            <source src={docData.audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          'View'
        )}
      </td>
      <td>{docData.description.slice(0, 50)}</td>
      <td>{moment(new Date(docData.createdAt.seconds * 1000)).fromNow()}</td>
      <td>pending</td>
      <td>
        <TableDataControlls
          isMedia
          viewUrl={'/wananchi-reporting'}
          addView={`/dashboard/media-upload/${urlText}`}
          deleteDispatchAction={deleteMediaUploadAction({
            id: docId,
            collectionName,
          })}
        />
      </td>
    </tr>
  );
}

const deleteIconStyles = { color: 'red' };
const editIconStyles = { color: 'orange' };
const visibilityIcon = { color: 'green' };
const addIcon = { color: 'blue' };
