import React from 'react';
import {
  ChipField,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

const GalleryList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='title' />
        <ReferenceField source='eventId' reference='event' />
        <DateField
          source='date'
          options={{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }}
        />
        <EditButton basePath='/gallery' />
        <DeleteButton basePath='/gallery' />
      </Datagrid>
    </List>
  );
};

export default GalleryList;
