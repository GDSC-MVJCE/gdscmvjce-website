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

const TeamCreate = (props) => {
  return (
    <Create title='Create Team' {...props}>
      <SimpleForm>
        <TextInput source='name' />
      </SimpleForm>
    </Create>
  );
};

export default TeamCreate;
