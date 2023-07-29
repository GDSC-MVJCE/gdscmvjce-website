import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  EmailField,
  ImageField,
  List,
  TextField,
  BooleanField,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <EmailField source="email" />
        <ImageField source="image" />
        <BooleanField source="isAdmin" />
        <EditButton basePath="/user" />
        <DeleteButton basePath="/user" />
      </Datagrid>
    </List>
  );
};

export default UserList;
