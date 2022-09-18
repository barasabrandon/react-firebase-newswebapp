import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMediaItemsAction } from '../../../actions/mediaUploadAction';
import {
  requestMediaData,
  setSelectedMediaType,
} from '../../../features/mediaUploadSlice';
import MediaTableRow from './MediaTableRow';
import MediaUploadButton from './MediaUploadButton';
import './MediaUploadDashboard.css';

export default function MediaUploadDashboard() {
  const [data, setData] = useState('');

  const { mediaTypes, mediaItems, selectedMediaType } = useSelector(
    (state) => state.mediaUpload
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedMediaType());
  }, []);

  useEffect(() => {
    dispatch(requestMediaData(1));
  }, []);

  useEffect(() => {
    setData(mediaItems);
  }, [mediaItems]);

  useEffect(() => {
    dispatch(
      getMediaItemsAction(
        selectedMediaType !== ''
          ? selectedMediaType
          : 'Wananchi Reporting Video'
      )
    );
  }, []);

  return (
    <div className="media-upload-dashboard">
      <div className="media-upload-dashboard-selection-buttons">
        {mediaTypes?.map(({ selected, name, icon, id }) => (
          <MediaUploadButton
            key={id}
            name={name}
            selected={selected}
            id={id}
            icon={icon}
          />
        ))}
      </div>
      <div className="media-upload-dashboard-table">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  {selectedMediaType === 'Wananchi Reporting Audio'
                    ? 'Audio'
                    : 'Video'}
                </th>
                <th scope="col">Description</th>
                <th scope="col">Created At</th>
                <th scope="col">Status</th>
                {/* Approved, Rejected , Pending*/}
                <th scope="col">Controlls</th>
                {/* Delete, Update */}
              </tr>
            </thead>
            <tbody>
              {data === ''
                ? 'Loading...'
                : data?.map((doc) => (
                    <MediaTableRow
                      key={doc.id}
                      docId={doc.id}
                      docData={doc.data()}
                      collectionName={selectedMediaType}
                    />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
