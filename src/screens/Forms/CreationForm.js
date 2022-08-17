import React, { useState } from 'react';

import db, { firebaseTimestamp, storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import Swal from 'sweetalert2';

import './CreationForm.css';
import { Navigate } from 'react-router-dom';

export default function CreationForm() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    text: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [imgUrl, setImgUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });

    const file = e.target[3]?.files[0];
    const date = new Date().getTime();
    const imageName = `${formData.title}-${date}.${file.name.split('.')[1]}`;
    const storageRef = ref(storage, `files/${formData.category}/brandon`);

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

    db.collection(formData.category).add({
      ...formData,
      imageFile: imageName,
      imgUrl: imgUrl,
      createdAt: firebaseTimestamp,
    });
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

  const getLocalUser = JSON.parse(localStorage.getItem('user-profile'));

  return (
    <>
      {getLocalUser ? (
        <form onSubmit={handleSubmit}>
          <div className="form-title">
            <div>
              <h5 style={{ color: 'orange' }}>National News</h5>
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
              placeholder="Article title..."
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <div className="form-text">Select Category</div>
            <select
              className="form-select"
              aria-label="Default select example"
              value={formData.category}
              name="category"
              onChange={handleChange}
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
              value={formData.text}
              onChange={handleChange}
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
          <button type="submit" className="btn btn-success mb-2 mt-2 ">
            Submit
          </button>
        </form>
      ) : (
        <Navigate to="/auth-login" />
      )}
    </>
  );
}
