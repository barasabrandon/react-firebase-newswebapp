import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import db, { firebaseTimestamp, storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function WananchiFormVideos() {
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [progressPcnt, setProgressPcnt] = useState(0);
  const { mediaType } = useParams();

  const getLocalUser = JSON.parse(localStorage.getItem('user-profile'));
  if (!getLocalUser) <Navigate to="/auth-login" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `files/wananchi-reporting/videos`);

    const file = e.target[1].files[0];

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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) =>
          setVideoUrl(downloadUrl)
        );
      }
    );
    db.collection('Wananchi Reporting Video').add({
      description,
      videoUrl: videoUrl,
      uploaderEmail: getLocalUser?.email,
      uploaderName: getLocalUser?.displayName,
      createdAt: firebaseTimestamp,
    });

    setDescription('');
  };

  return (
    <>
      <div className="wananchi-form-video">
        <div className="wananchi-form-video-form">
          <form action="" onSubmit={handleSubmit}>
            <div className="wananchi-form-video-header">
              <h5>
                Wananchi Reporting {mediaType === 'video' ? 'Videos' : 'Audio'}
              </h5>
            </div>
            <div>
              <input
                className="wananchi-form-video-input-text"
                type="text"
                placeholder="Video descriptin..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label
                className="wananchi-form-video-input-file-label"
                htmlFor="files"
              >
                Video file *
              </label>
              <input
                id="files"
                accept="video/*"
                className="wananchi-form-video-input-file"
                type="file"
                placeholder="Video description..."
              />
            </div>

            <div>
              <button
                className="wananchi-form-video-input-submit"
                type="submit"
              >
                {progressPcnt === 0 || progressPcnt === 100
                  ? 'Submit'
                  : `Uploading... ${progressPcnt}%`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
