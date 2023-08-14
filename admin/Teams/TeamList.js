import React from 'react';
import {
  ChipField,
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ReferenceArrayField,
  ReferenceField,
  ReferenceManyField,
  ReferenceOneField,
  SimpleList,
  SingleFieldList,
  TextField,
} from 'react-admin';

const TeamList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label='NAME' source='name' />
        <EditButton name='Edit' />
        <DeleteButton name='Delete' />
      </Datagrid>
    </List>
  );
};

export default TeamList;
