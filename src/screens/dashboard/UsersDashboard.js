import React, { useEffect } from 'react';

import './UsersDashboard.css';
import MUIDatableComponent from '../../components/dashboard/MUIDatableComponent';

import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersData } from '../../actions/usersAction';

export default function UsersDashboard() {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.users);
  const columns = [
    'AuthProvider',
    'Email',
    'imgUrl',
    { name: 'Name', options: { filterOptions: { fullWidth: true } } },
    'Status',
    'UserId',
  ];

  useEffect(() => {
    dispatch(getAllUsersData());
  }, []);
  // allUsers === '' ? console.log('No Data') : console.log(allUsers);
  const array = Object.keys(allUsers).map(function (key) {
    return allUsers[key];
  });
  console.log(array);

  return (
    <div className="usersdashboard-screen">
      <div className="usersdashboard-screen-navbar">
        <div>
          <Button variant="outlined">All</Button>
        </div>
        <div>
          <Button variant="outlined">Staff</Button>
        </div>
        <div>
          <Button variant="outlined">Webapp Reporters</Button>
        </div>
      </div>
      <MUIDatableComponent title="USERS" data={[allUsers]} columns={columns} />
    </div>
  );
}
