import React, { useState, useRef } from 'react';

import db, { firebaseTimestamp, storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Toast } from 'primereact/toast';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';

import './CreationForm.css';
import { useEffect } from 'react';

export default function CreationForm() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);
  const [imgUrl, setImgUrl] = useState('');
  const toast = useRef(null);
  const { userProfile } = useSelector((state) => state.auth);
  const { currentNewsItem, currentNewsItemId, selectedItem, isEditing } =
    useSelector((state) => state.news);
  const userStatus = userProfile ? userProfile?.status : '';

  useEffect(() => {
    if (currentNewsItemId !== '') {
      setTitle(currentNewsItem.title);
      setText(currentNewsItem.text);
      setImgUrl(currentNewsItem.imgUrl);
      setCategory(selectedItem);
    }
  }, [currentNewsItemId, currentNewsItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let timerInterval;
    Swal.fire({
      html: 'Uploading <b></b> seconds',
      icon: 'success',
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Math.round(Swal.getTimerLeft() / 1000);
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });

    const file = e.target[3]?.files[0];
    const date = new Date().getTime();
    const imageName = `${title}-${date}.${file.name.split('.')[1]}`;
    const storageRef = ref(storage, `files/${category}/${title}`);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) =>
          setImgUrl(downloadUrl)
        );
      }
    );

    if (imgUrl !== '') {
      if (isEditing) {
        db.collection(category).doc(currentNewsItemId).update({
          title: title,
          text: text,
          imageFile: imageName,
          imgUrl: imgUrl,
          status: 'pending',
          userId: userProfile.userId,
          updatedAt: firebaseTimestamp,
        });
      } else {
        db.collection(category).add({
          title: title,
          text: text,
          imageFile: imageName,
          imgUrl: imgUrl,
          status: 'pending',
          userId: userProfile.userId,
          createdAt: firebaseTimestamp,
        });
      }
    } else {
      toast.current.show({
        severity: 'error',
        summary: 'Error Message!',
        detail: 'Error Uploading Image',
      });
    }
  };

  const optionCategories = [
    'National',
    'Counties',
    'Sports',
    'Politics',
    'Podcasts',
    'Wananch Reporting',
    'Intertainment',
  ];

  return (
    <>
      {(userStatus === 'journalist') | (userStatus === 'admin') ? (
        <form onSubmit={handleSubmit} className="creation-form">
          <div className="form-title">
            <div>
              <h5 style={{ color: 'orange' }}>
                News Article{' '}
                <sup style={{ color: 'green' }}>
                  <EditIcon />
                </sup>{' '}
              </h5>
            </div>
            <div>
              <small style={{ color: 'orange' }}>By: Brandon Wanambisi</small>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-text">Article Title</div>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Article Title..."
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="form-text">Select Category</div>
            <select
              className="form-select"
              aria-label="Default select example"
              value={category}
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select news Category</option>
              {optionCategories.map((item, index) => (
                <option value={item} key={index} style={{ color: 'black' }}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3">
            <div className="form-text">Article text</div>
            <textarea
              className="form-control rounded-0"
              id="exampleFormControlTextarea1"
              rows="5"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Article content"
            ></textarea>
          </div>
          <div className="mb-3">
            <div className="form-text">Article Image</div>
            <input
              type="file"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Content of the article"
              accept="image/*"
              name="image"
            />
          </div>
          <div className="buttons-container">
            <div>
              <button type="submit" className="btn btn-primary mb-2 mt-2 ">
                Clear
              </button>
            </div>
            <div>
              <button type="submit" className="btn btn-success mb-2 mt-2 ">
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : (
        <Navigate to="/unauthorized-page" />
      )}

      <Toast ref={toast} />
    </>
  );
}
