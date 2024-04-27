import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'title', headerName: 'Title', width: 70 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'video_url', headerName: 'Video_url', width: 120},
  {
    field: 'video_thumbnail',
    headerName: 'Video_thumbnail',
    type: 'number',
    width: 140,
  },
  {
    field: 'Content_source',
    headerName: 'Content_source',
    
    width: 170,
    
  },
  { field: 'Class_grade', headerName: 'class_grade', width: 140 },
  { field: 'Content_category', headerName: 'Content_category', width: 160 },
  { field: 'Content_type', headerName: 'Content_type', width: 160 },


];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function UploadTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}