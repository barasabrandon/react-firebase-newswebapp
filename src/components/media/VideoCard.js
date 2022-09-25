import React, { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import VideoComment from './VideoComment';
import db from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
  eclusiveLikeActions,
  getCommentsCountActions,
  videoViewsAction,
} from '../../actions/commentsAction';
import {
  checkLikeStatus,
  likeVideoAction,
} from '../../actions/exclusiveVideosAction';
import { getLocalUser } from '../../constants/constants';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import millify from 'millify';

export default function VideoCard({ data, videoId }) {
  const toast = useRef(null);
  const [isCommentLike, setIsCommentLike] = useState(true);
  const [likeCount, setLikeCount] = useState(data.likesCount);
  const [hasLiked, setHasLiked] = useState(false);
  const [viewsCount, setViewsCount] = useState(data.views);
  const dispatch = useDispatch();
  const { commentsCount } = useSelector((state) => state.comments);
  const { hasLikedVideo } = useSelector((state) => state.exclusiveVideos);
  const [commentsLength, setCommentsLength] = useState(0);

  const showError = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Error!',
      detail: 'You are not logged in. Log in to like and comment.',
      life: 3000,
    });
  };

  useEffect(() => {
    const checkHasLiked = data?.likesUserIds.find(
      (item) => item === getLocalUser?.userId
    );

    if (checkHasLiked === undefined) {
      setHasLiked(false);
    } else {
      setHasLiked(true);
      setIsCommentLike(true);
    }
  }, []);

  useEffect(() => {
    async function commentCountTest(videoId) {
      const q = query(
        collection(db, 'Exclusive Videos Comments'),
        where('videoId', '==', videoId)
      );
      const docs = await getDocs(q);
      setCommentsLength(docs?.docs?.length);
    }
    commentCountTest(videoId);
  }, [videoId]);

  // data?.likesUserIds

  useEffect(() => {
    dispatch(getCommentsCountActions(videoId));
    dispatch(checkLikeStatus(videoId));
  });

  const handleLikeClick = (e) => {
    e.preventDefault();
    if (getLocalUser === null) {
      showError();
    } else {
      setIsCommentLike(!isCommentLike);
      if (hasLikedVideo) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      dispatch(
        likeVideoAction({ videoId: videoId, existingLikes: data.likesCount })
      );
    }
  };

  const handleVideoClick = (e) => {
    e.preventDefault();
    db.collection('Exclusive Videos')
      .doc(videoId)
      .update({ views: viewsCount + 1 });
    setViewsCount(viewsCount + 1);
  };
  return (
    <>
      {' '}
      <Toast ref={toast} />
      <div className="video-card">
        <div className="video-card-video-container">
          <video controls onPlay={handleVideoClick}>
            <source src={data.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-card-text-container">
          {data.description > 100
            ? data.description.slice(0, 90) + '...'
            : data.description}
        </div>
        <div className="video-card-btns-container">
          <div className="comment-icons">
            <div className="like-container">
              <Tooltip title="Likes" arrow placement="top">
                <Button
                  variant="text"
                  style={stylesBtn}
                  onClick={handleLikeClick}
                >
                  {isCommentLike ? (
                    <FavoriteBorderIcon style={stylesLikeICon} />
                  ) : (
                    <FavoriteIcon style={stylesLikeICon} />
                  )}
                </Button>
              </Tooltip>
            </div>
            <div>{likeCount}</div>
          </div>
          <div className="comment-icons">
            <div className="comment-views-stats">{millify(viewsCount)}</div>
            <div>views</div>
          </div>
          <div className="comment-icons">
            <div>
              <VideoComment videoId={videoId} />
            </div>
            <div>{commentsLength}</div>
          </div>
        </div>
      </div>
    </>
  );
}

const stylesLikeICon = { color: 'blue' };
const stylesBtn = { width: '1px' };
