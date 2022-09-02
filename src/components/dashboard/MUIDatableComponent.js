import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
});

export default function MUIDatableComponent(props) {
  const columns = [
    {
      name: 'name',
      label: 'Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'company',
      label: 'Company',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'city',
      label: 'City',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'state',
      label: 'State',
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    tableBodyHeight: '400px',
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  const data = [
    { name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
    { name: 'John Walsh', company: 'Test Corp', city: 'Hartford', state: 'CT' },
    { name: 'Bob Herm', company: 'Test Corp', city: 'Tampa', state: 'FL' },
    {
      name: 'James Houston',
      company: 'Test Corp',
      city: 'Dallas',
      state: 'TX',
    },
  ];
  const styles = { marginTop: '1rem' };

  return (
    <div style={styles}>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={props.title}
            data={props.data}
            columns={props.columns}
            options={options}
          />
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}
