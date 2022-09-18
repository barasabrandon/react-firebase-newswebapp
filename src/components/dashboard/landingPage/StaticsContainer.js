import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddClickDialogue from './AddClickDialogue';

export default function StaticsContainer({ data }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`${data.linkUrl}`);
  };
  return (
    <div className="col-12 md:col-6 lg:col-4">
      <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <div className="flex justify-content-between mb-3">
          <div>
            <span className="block text-500 font-medium mb-3">{data.name}</span>
            <div className="text-900 font-medium text-xl">
              Total {data.total}
            </div>
          </div>
          <div
            className="flex align-items-center justify-content-center bg-blue-100 border-round"
            style={{ width: '2.5rem', height: '2.5rem' }}
          >
            {/* <i className="pi pi-shopping-cart text-blue-500 text-xl"></i> */}
            {data.icon}
          </div>
        </div>

        <div className="text-500">{data.footer}</div>
        <div style={styles}>
          <div className="text-green-500 font-medium">
            <AddClickDialogue name={data.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  marginTop: '.8rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
