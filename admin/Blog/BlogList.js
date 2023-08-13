import React from 'react';
import {
  ChipField,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

const BlogList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='title' />
        <ReferenceField source='authorId' reference='profile' />
        <EditButton basePath='/blog' />
        <DeleteButton basePath='/blog' />
      </Datagrid>
    </List>
  );
};

export default BlogList;
