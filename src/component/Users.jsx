{/*import { Box, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
function Users() {
  return (<>
  <Box 
  sx={{
    height:400,
    width: '100%',
  }}
  >
    <Typography
    variant="h3"
    component="h3"
    sx={{
        textAlign: 'center',
        mt:3,
        mb:3
    }}
    >
        Manage users
    </Typography>
    <Data
  </Box>
  </>
  )
}
export default Users */}



import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Jason', 'Jason23@gmail.com', 6.0, 24, 4.0),
  createData('Sage', 'val8@gmail.com', 9.0, 37, 4.3),
  createData('Eclair', "eclair@yahoo.com", 16.0, 24, 6.0),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>table</caption>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Phone no</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}