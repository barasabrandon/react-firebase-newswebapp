import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinWanachiReporters } from '../../actions/usersAction';
import { getLocalUser } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import { Toast } from 'primereact/toast';
import JoinUsSuccess from './JoinUsSuccess';

export default function JoinUs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, wananchiJoiningStatus } = useSelector(
    (state) => state.users
  );
  const [joinBtnLabel, setJoinBtnLabel] = useState('Join Now');
  const toast = useRef(null);
  const [userJoined, setUserJoined] = useState(false);

  const handleJoinNowClick = (e) => {
    e.preventDefault();
    if (getLocalUser) {
      dispatch(joinWanachiReporters());
    } else {
      navigate('/auth-login');
    }

    if (wananchiJoiningStatus === 'Succeeded') {
      console.log('User has joined Successfully');
      setUserJoined(!userJoined);
    } else {
      toast.current.show({
        severity: 'error',
        summary: 'Error Message!',
        detail: 'Unable to register , try again later',
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      setJoinBtnLabel('Joining...');
    } else {
      setJoinBtnLabel('Join Now');
    }
  }, [isLoading]);

  return (
    <>
      {userJoined ? (
        <JoinUsSuccess />
      ) : (
        <div className="wananchireporting-become-one-container">
          <div className="surface-0 text-700 text-center">
            <div className="text-blue-600 font-bold mb-3">
              <i className="pi pi-discord"></i>&nbsp;WANANCHI REPORTING
            </div>
            <div className="text-900 font-bold text-5xl mb-3">
              Join Our News Community
            </div>
            <div className="text-700 text-2xl mb-5">
              Seen something happening ? Be our eyes and ears across the
              country. With one tap.
              {joinBtnLabel}
            </div>
            <Button variant="contained" onClick={handleJoinNowClick}>
              {isLoading && (
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress style={progressStyles} />
                </Box>
              )}
              {joinBtnLabel}
            </Button>
          </div>
        </div>
      )}
      <Toast ref={toast} />
    </>
  );
}

const progressStyles = { height: '1rem', width: '1rem', color: 'white' };
