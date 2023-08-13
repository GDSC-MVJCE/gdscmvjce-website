import React from 'react';
import {
  DateTimeInput,
  DeleteButton,
  Edit,
  EditButton,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

const GalleryEdit = (props) => {
  return (
    <Edit title='Edit an image in gallery' {...props}>
      <SimpleForm>
        <TextInput source='title' label='Title' />
        <DateTimeInput source='date' label='Date & Time' />
        <ReferenceInput
          source='eventId'
          reference='event'
          label='Photo from the Event'
        />
        <TextInput
          source='url'
          type='url'
          label='Image'
          helperText='Provide Direct Image Address/URL'
        />
        <EditButton basePath='/gallery' />
        <DeleteButton basePath='/gallery' />
      </SimpleForm>
    </Edit>
  );
};

export default GalleryEdit;
