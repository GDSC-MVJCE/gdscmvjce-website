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

const TeamMemberList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <ReferenceField label='Name' source='profileId' reference='profile' />
        <ReferenceField label='Team' source='teamId' reference='team' />
        <TextField source='role' />
        <TextField source='type' />
        <EditButton name='Edit' />
        <DeleteButton name='Delete' />
      </Datagrid>
    </List>
  );
};

export default TeamMemberList;
