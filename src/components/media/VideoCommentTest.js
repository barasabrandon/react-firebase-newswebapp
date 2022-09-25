import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import InsertCommentTwoToneIcon from '@mui/icons-material/InsertCommentTwoTone';
import TextField from '@mui/material/TextField';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Toast } from 'primereact/toast';

import './VideoComment.css';
import db, { firebaseTimestamp } from '../../firebase';
import { getLocalUser } from '../../constants/constants';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { exclusiveVideoCommentsActions } from '../../actions/commentsAction';

export default function VideoComment({ videoId }) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [comment, setComment] = useState('');
  const [isAddComment, setIsAddComment] = useState(false);
  const toast = useRef(null);
  const [collectionData, setCollectionData] = useState('');
  const dispatch = useDispatch();
  const { videoCommentsItems, noVideoComments } = useSelector(
    (state) => state.comments
  );

  const showError = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Error!',
      detail: 'You are not logged in',
      life: 3000,
    });
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(exclusiveVideoCommentsActions(videoId));
  }, [videoId, comment, videoCommentsItems]);

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (getLocalUser === null) {
      showError();
    } else {
      db.collection('Exclusive Videos Comments').add({
        commentText: comment,
        userId: getLocalUser?.userId,
        userName: getLocalUser?.name,
        videoId: videoId,
        createdAt: firebaseTimestamp,
      });
      setComment('');
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    setIsAddComment(!isAddComment);
  };

  return (
    <div>
      <Toast ref={toast} />
      <Tooltip title="Comments" arrow placement="top">
        <InsertCommentTwoToneIcon
          style={commentIconStyles}
          onClick={handleClickOpen('paper')}
        />
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Comments</DialogTitle>

        <DialogContent>
          <div className="container justify-content-center mt-5 border-left border-right">
            {noVideoComments ? (
              <div className="d-flex justify-content-center py-2">
                <div className="second py-2 px-2">
                  <span className="text1">News Web app, mins ago</span>
                  <div className="d-flex justify-content-between py-1 pt-2">
                    <div>
                      <span className="text2">
                        No comments yet. Click add Comment below to leave a
                        comment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              videoCommentsItems?.map((doc) => (
                <div className="d-flex justify-content-center py-2">
                  <div className="second py-2 px-2">
                    <span className="text1">
                      {doc.data().userName},{' '}
                      {moment(
                        new Date(doc.data().createdAt.seconds * 1000)
                      ).fromNow()}
                    </span>
                    <div className="d-flex justify-content-between py-1 pt-2">
                      <div>
                        <span className="text2">{doc.data().commentText}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </DialogContent>
        {isAddComment && (
          <DialogContent className="video-comment-form">
            <div className="video-comment-form-input">
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Write a comment"
                fullWidth
                variant="standard"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div>
              <Tooltip title="Send" arrow placement="top">
                <Button
                  variant="text"
                  disabled={!comment}
                  style={stylesButton}
                  onClick={handleSubmitComment}
                >
                  <ArrowOutwardIcon />
                </Button>
              </Tooltip>
            </div>
          </DialogContent>
        )}

        <DialogActions>
          <Button onClick={handleClose} style={cancelBtnStyles}>
            Cancel
          </Button>
          <Button onClick={handleAddComment} style={addCommentBtnStyles}>
            Add Comment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const commentIconStyles = { color: 'green' };
const cancelBtnStyles = { textTransform: 'capitalize' };
const addCommentBtnStyles = { textTransform: 'capitalize', color: 'green' };
const stylesButton = {
  border: 'none',
  outline: 'none',
};
