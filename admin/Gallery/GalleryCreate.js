import React from 'react';
import {
  Create,
  DateTimeInput,
  DeleteButton,
  EditButton,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

const GalleryCreate = (props) => {
  return (
    <Create title='Add an image to gallery' {...props}>
      <SimpleForm>
        <TextInput source='title' label='Title' />
        <DateTimeInput
          source='date'
          label='Date & Time'
          defaultValue={Date.now()}
        />
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
    </Create>
  );
};

export default GalleryCreate;
