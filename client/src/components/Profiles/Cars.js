import React from 'react';
import MaterialTable from 'material-table';

export default function Profile() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Ten', field: 'ten' },
      { title: 'Cap bac', field: 'cap bac' },
      { title: 'Chuc vu', field: 'chuc vu' },
      { title: 'Nhap ngu', field: 'nhap ngu' },
      { title: 'Nhap ngu', field: 'nhap ngu' },
      { title: 'Nhap ngu', field: 'nhap ngu' },
      { title: 'Nhap ngu', field: 'nhap ngu' },
      { title: 'Nhap ngu', field: 'nhap ngu' },
      { title: 'Nhap ngu', field: 'nhap ngu' },
      { title: 'Nhap ngu', field: 'nhap ngu' },
      { title: 'Nhap ngu', field: 'nhap ngu' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { ten: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Danh sach xe"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
