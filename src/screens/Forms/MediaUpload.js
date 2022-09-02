import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import db, { firebaseTimestamp, storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import './MediaUpload.css';
import { Button } from '@mui/material';
import { InputText } from 'primereact/inputtext';

export default function MediaUpload() {
  const [description, setDescription] = useState('');
  const [progressPcnt, setProgressPcnt] = useState(0);
  const { mediaType } = useParams();

  const [locationText, setLocationText] = useState('');

  const getLocalUser = JSON.parse(localStorage.getItem('user-profile'));
  if (!getLocalUser) <Navigate to="/auth-login" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `files/${locationText}`);
    const file = e.target[1].files[0];

    if (mediaType === 'video') {
      setLocationText('Wananchi Reporting Videos/videos');
    } else if (mediaType === 'exclusiveVideo') {
      setLocationText('Exclusive Videos/videos');
    } else {
      setLocationText('Wananchi Reporting Audio/audio');
    }

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPcnt(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          if (mediaType === 'video') {
            db.collection('Wananchi Reporting Video').add({
              description,
              videoUrl: downloadUrl,
              uploaderEmail: getLocalUser?.email,
              uploaderName: getLocalUser?.displayName,
              createdAt: firebaseTimestamp,
            });
          } else if (mediaType === 'exclusiveVideo') {
            db.collection('Exclusive Videos').add({
              description,
              videoUrl: downloadUrl,
              uploaderEmail: getLocalUser?.email,
              uploaderName: getLocalUser?.displayName,
              createdAt: firebaseTimestamp,
            });
          } else if (mediaType === 'audio') {
            db.collection('Wananchi Reporting Audio').add({
              description,
              audioUrl: downloadUrl,
              uploaderEmail: getLocalUser?.email,
              uploaderName: getLocalUser?.displayName,
              createdAt: firebaseTimestamp,
            });
          }
          setDescription('');
        });
      }
    );
  };

  return (
    <>
      <div className="wananchi-form-video">
        <div className="wananchi-form-video-form">
          <form
            action=""
            onSubmit={handleSubmit}
            className="wananchi-form-video-form-element"
          >
            <div className="wananchi-form-video-header">
              <div className="wananchi-form-video-header-text">
                Upload Media{' '}
              </div>
              <div>
                <small className="wananchi-form-video-header-category">
                  {mediaType === 'exclusiveVideo'
                    ? 'Exclusive Videos'
                    : mediaType === 'video'
                    ? 'Wananchi Reporting Video'
                    : 'Wananchi Reporting Audio'}
                </small>
              </div>
            </div>
            <div>
              <InputText
                id="password"
                type="text"
                className="w-full mb-3"
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label
                className="wananchi-form-video-input-file-label"
                htmlFor="files"
              >
                {(mediaType === 'exclusiveVideo') | (mediaType === 'video')
                  ? 'Video'
                  : 'Audio'}{' '}
                file *
              </label>
              <input
                id="files"
                accept={
                  (mediaType === 'exclusiveVideo') | (mediaType === 'video')
                    ? 'video/*'
                    : 'audio/*'
                }
                className="wananchi-form-video-input-file"
                type="file"
              />
            </div>

            <div className="media-upload-btns">
              <div>
                <Button variant="outlined">Clear</Button>
              </div>
              <div>
                {/* className="wananchi-form-video-input-submit" */}
                <Button type="submit" variant="outlined">
                  {(progressPcnt === 0) | (progressPcnt === 100)
                    ? 'Submit '
                    : `Uploading... ${progressPcnt}%`}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
