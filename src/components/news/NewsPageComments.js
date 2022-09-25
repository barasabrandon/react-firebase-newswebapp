import React, { useState } from 'react';
import db from '../../firebase';
import './NewsPageComments.css';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { commentsAction } from '../../actions/commentsAction';
import { getLocalUser } from '../../constants/constants';
import CommentForm from './CommentForm';

export default function NewsPageComments() {
  const [collectionData, setCollectionData] = useState('');
  const [isAuthor, setIsAuthor] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const dispatch = useDispatch();
  const { category, id } = useParams();
  const { commentsItems, noComments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(commentsAction({ id, category }));
  }, [id, category, dispatch]);

  return (
    <>
      {/* <!-- Main Body --> */}
      <section className="comments-section">
        <div className="container">
          <div className="row">
            {noComments ? (
              <div className="no-comments"> No Comments yet .</div>
            ) : (
              <div
                className="col-sm-5 col-md-6 col-12 pb-4 d-flex flex-column"
                id="comments-area"
              >
                {/* 'comment mt-4 text-justify float-left' */}
                {commentsItems?.map((item, index) => (
                  <div
                    className={
                      getLocalUser?.userId === item.data().userId
                        ? 'text-justify darker mt-4 float-right ml-3'
                        : 'comment mt-4 text-justify float-left'
                    }
                    key={index}
                  >
                    <img
                      src="https://i.imgur.com/CFpa3nK.jpg"
                      alt=""
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h4 className="user-name">{item.data().userName}</h4>
                    <span className="newspage-comments-date">
                      {new Date(
                        item.data().createdAt.seconds * 1000
                      ).toDateString()}
                    </span>
                    <br />
                    <p>{item.data().commentText}</p>
                  </div>
                ))}
              </div>
            )}
            <CommentForm />
          </div>
        </div>
      </section>
    </>
  );
}
