import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsItemsAction } from '../../../actions/newsAction';
import { requestData, setSelectedNewsItem } from '../../../features/newsSlice';
import db from '../../../firebase';
import ButtonSelection from './ButtonSelection';
import './NewsDashboard.css';
import TableRow from './TableRow';

export default function NewsDashboard() {
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const { categories, selectedItem, isLoading, newsItems } = useSelector(
    (state) => state.news
  );

  useEffect(() => {
    dispatch(setSelectedNewsItem());
  }, []);

  useEffect(() => {
    dispatch(getNewsItemsAction(selectedItem));
  }, [selectedItem]);

  useEffect(() => {
    setData(newsItems);
  }, [selectedItem, isLoading, newsItems]);

  return (
    <div className="news-dashboard">
      <div className="newsdashboard-screen-navbar">
        {categories?.map(({ selected, name, icon, id }, index) => (
          <ButtonSelection
            key={index}
            selected={selected}
            name={name}
            icon={icon}
            id={id}
          />
        ))}
      </div>
      <div className="table-container">
        <div className="table-container-div">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Created At</th>
                <th scope="col">Intro Text</th>
                <th scope="col">Status</th>
                {/* Approved, Rejected , Pending*/}
                <th scope="col">Controlls</th>
                {/* Delete, Update */}
              </tr>
            </thead>
            <tbody>
              {data === ''
                ? 'Loading...'
                : data.map((doc, index) => (
                    <TableRow
                      key={index}
                      docData={doc.data()}
                      docId={doc.id}
                      collectionName={selectedItem}
                    />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
