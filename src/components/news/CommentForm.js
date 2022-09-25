import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getLocalUser } from '../../constants/constants';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { useState } from 'react';
import { useRef } from 'react';
import db, { firebaseTimestamp } from '../../firebase';
import { useDispatch } from 'react-redux';
import { commentsAction } from '../../actions/commentsAction';

export default function CommentForm() {
  const [open, setOpen] = useState(false);
  const { category, id } = useParams();
  const [commentText, setCommentText] = useState('');
  const toast = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accept = () => {
    navigate('/auth-login');
  };

  const reject = () => {
    toast.current.show({
      severity: 'info',
      summary: 'Comment later',
      detail: 'Continue reading our arricles.',
      life: 3000,
    });
  };

  const emptyText = () => {
    toast.current.show({
      severity: 'info',
      summary: 'Error!',
      detail: 'Input field is empty',
      life: 3000,
    });
  };

  const confirm = () => {
    confirmDialog({
      message: 'Proceed to log in?',
      header: 'Oops! your not logged in',
      icon: 'pi pi-exclamation-triangle',
      accept,
      reject,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getLocalUser === null) {
      confirm();
    } else {
      if (commentText === '') {
        emptyText();
      } else {
        db.collection(`${category} Comments`).add({
          commentText: commentText,
          userId: getLocalUser.userId,
          userName: getLocalUser.name,
          postId: id,
          createdAt: firebaseTimestamp,
        });
        dispatch(commentsAction({ id, category }));
        setCommentText('');
      }
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="col-lg-4 col-md-5 col-sm-4  col-12 mt-4">
        <ConfirmDialog />
        <form id="algin-form" className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <h4 className="user-name ">Leave a comment</h4>

            <textarea
              cols="30"
              rows="5"
              className="form-control"
              style={{ backgroundColor: 'black', color: 'white' }}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <button
              type="button"
              id="post"
              className="btn"
              onClick={handleSubmit}
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
