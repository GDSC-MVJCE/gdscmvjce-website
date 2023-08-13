import React from 'react';
import {
  ArrayInput,
  Edit,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from 'react-admin';

const TeamEdit = (props) => {
  return (
    <Edit title='Edit Team' {...props}>
      <SimpleForm>
        <TextInput source='name' />
      </SimpleForm>
    </Edit>
  );
};

export default TeamEdit;
