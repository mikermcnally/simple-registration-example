import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import RestViewSql from '../common/RestViewSql';
import { Paper, TableContainer } from '@material-ui/core';

interface Registration {
  id: string;
  first_name: string;
  last_name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export default function RegistrationList() {
  const columns = [
    {
      header: 'ID',
      row: (model: Registration, key: number) => (
        <TableCell component="td" scope="row" key={key}>
          {model.id}
        </TableCell>
      ),
    },
    {
      header: 'First Name',
      row: (model: Registration, key: number) => (
        <TableCell component="td" scope="row" key={key}>
          {model.first_name}
        </TableCell>
      ),
    },
    {
      header: 'Last Name',
      row: (model: Registration, key: number) => (
        <TableCell component="td" scope="row" key={key}>
          {model.last_name}
        </TableCell>
      ),
    },
    {
      header: 'Address1',
      row: (model: Registration, key: number) => (
        <TableCell component="td" scope="row" key={key}>
          {model.address1}
        </TableCell>
      ),
    },
    {
      header: 'Address2',
      row: (model: Registration, key: number) => (
        <TableCell component="td" scope="row" key={key}>
          {model.address2}
        </TableCell>
      ),
    },
    {
      header: 'City',
      row: (model: Registration, key: number) => (
        <TableCell component="td" scope="row" key={key}>
          {model.city}
        </TableCell>
      ),
    },
    {
      header: 'State',
      row: (model: Registration, key: number) => (
        <TableCell component="td" scope="row" key={key}>
          {model.state}
        </TableCell>
      ),
    },
    {
      header: 'Zip',
      row: (model: Registration, key: number) => (
        <TableCell component="td" scope="row" key={key}>
          {model.zip}
        </TableCell>
      ),
    },
    {
      header: 'Country',
      row: (model: Registration, key: number) => (
        <TableCell component="td" scope="row" key={key}>
          {model.country}
        </TableCell>
      ),
    },
  ];

  return (
    <TableContainer component={Paper}>
      <RestViewSql<Registration>
        columns={columns}
        endpoint="/admin/registrations"
      ></RestViewSql>
    </TableContainer>
  );
}
