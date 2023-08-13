import React from 'react';
import {
  DeleteButton,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
} from 'react-admin';
import EditorActions from '../EditorActions';

const ProfileEdit = (props) => {
  return (
    <Edit title='Edit Profile' {...props} actions={<EditorActions />}>
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
    </Edit>
  );
};

export default ProfileEdit;
