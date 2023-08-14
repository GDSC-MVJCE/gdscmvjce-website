import React from 'react';
import {
  Datagrid,
  DeleteButton,
  EditButton,
  EmailField,
  ImageField,
  List,
  TextField,
  BooleanField,
} from 'react-admin';

const ProfileList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <ImageField source='image' />
        <TextField source='name' />
        <TextField source='username' />
        <TextField source='title' />
        <EditButton basePath='/profile' />
        <DeleteButton basePath='/profile' />
      </Datagrid>
    </List>
  );
};

export default ProfileList;
