import React from 'react';
import {
  Create,
  DeleteButton,
  EditButton,
  SimpleForm,
  TextInput,
} from 'react-admin';

const ProfileCreate = (props) => {
  return (
    <Create title='Create a Profile' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Name' />
        <TextInput source='username' label='Username' />
        <TextInput source='bio' label='Short Bio' />
        <TextInput source='about' label='About Me' />
        <TextInput source='image' type='url' label='Profile Photo Image URL' />
        <TextInput
          source='coverPhoto'
          type='url'
          label='Cover Photo Image URL'
        />
        <TextInput
          source='profileLink'
          type='url'
          label='External Profile Link URL (For Speakers)'
        />
        <EditButton basePath='/profile' />
        <DeleteButton basePath='/profile' />
      </SimpleForm>
    </Create>
  );
};

export default ProfileCreate;
