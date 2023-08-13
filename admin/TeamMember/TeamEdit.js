import React from 'react';
import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

const TeamMemberEdit = (props) => {
  return (
    <Edit title='Edit Team' {...props}>
      <SimpleForm>
        <ReferenceInput source='teamId' reference='team' />
        <ReferenceInput source='profileId' reference='profile' />
        <TextInput source='role' />
        <SelectInput source='type' choices={['Core', 'Member', 'Lead']} />
      </SimpleForm>
    </Edit>
  );
};

export default TeamMemberEdit;
