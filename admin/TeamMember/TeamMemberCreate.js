import React from 'react';
import {
  Create,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

const TeamMemberCreate = (props) => {
  return (
    <Create title='Add Team Member' {...props}>
      <SimpleForm>
        <ReferenceInput source='teamId' reference='team' />
        <ReferenceInput source='profileId' reference='profile' />
        <TextInput source='role' />
        <SelectInput source='type' choices={['Core', 'Member', 'Lead']} />
      </SimpleForm>
    </Create>
  );
};

export default TeamMemberCreate;
