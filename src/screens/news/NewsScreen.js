import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthUser } from '../../actions/authActions';
import Categories from '../../components/news/Categories';
import NewsCard from '../../components/news/NewsCard';
import NotFoundItems from '../../components/news/NotFoundItems';
import { authIsLoggedIn } from '../../features/authSlice';
import { requestData } from '../../features/newsSlice';
import db from '../../firebase';

import './NewsScreen.css';

export default function NewsScreen() {
  const { categories, selectedItem } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  const [collectionData, setCollectionData] = useState('');

  useEffect(() => {
    dispatch(requestData(1));
  }, []);

  useEffect(() => {
    if (selectedItem !== '') {
      db.collection(`${selectedItem}`)
        .get()
        .then((snapshot) => setCollectionData(snapshot.docs));
    }
  }, [selectedItem]);

  return (
    <div className="news-screen">
      <div className="news-screen-container">
        <div className="news-screen-categories-container">
          <div className="news-screen-categories-container-title">
            SELECT CATEGORY
          </div>
          <div>
            <ul>
              {categories.map(({ selected, name, icon, id }) => (
                <Categories
                  selected={selected}
                  name={name}
                  icon={icon}
                  id={id}
                  key={id}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="news-screen-news-container">
          <div className="news-screen-news-content-container">
            {collectionData == '' ? (
              <div className="loading-animation">
                <img src="/animations/loadingAnimation.gif" alt="Loading..." />
              </div>
            ) : collectionData == 'not-items-found' ? (
              <NotFoundItems />
            ) : (
              collectionData.map((doc, index) => (
                <NewsCard key={index} itemData={doc.data()} docId={doc.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="news-screen-categories-container">
<div>
  <p>CATEGORIES</p>
</div>
<div>
  <ul>
    {categories.map(({ selected, name, icon, id }) => (
      <Categories
        selected={selected}
        name={name}
        icon={icon}
        id={id}
        key={id}
      />
    ))}
  </ul>
</div>
</div> */
}
