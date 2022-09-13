import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestData, setSelectedNewsItem } from '../../../features/newsSlice';
import db from '../../../firebase';
import ButtonSelection from './ButtonSelection';
import './NewsDashboard.css';
import TableRow from './TableRow';

export default function NewsDashboard() {
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const { categories, selectedItem, isLoading } = useSelector(
    (state) => state.news
  );
  const { userProfile } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setSelectedNewsItem());
  }, []);

  useEffect(() => {
    db.collection(selectedItem ? selectedItem : 'National')
      .get()
      .then((snapshot) => setData(snapshot?.docs));
  }, [selectedItem, isLoading]);

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
