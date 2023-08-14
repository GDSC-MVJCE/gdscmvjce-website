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
        <SelectInput
          source='type'
          defaultValue={'member'}
          choices={[
            { id: 'member', name: 'Member' },
            { id: 'lead', name: 'Lead' },
            { id: 'core', name: 'Core Team' },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default TeamMemberEdit;
