import React from "react";
import {
  BooleanInput,
  DateInput,
  Edit,
  ImageInput,
  SimpleForm,
  TextInput,
  UrlInput,
} from "react-admin";

const EventEdit = (props) => {
  return (
    <Edit title="Create an Event" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <ImageInput source="image" />
        <TextInput multiline source="shortDescritption" />
        <TextInput multiline source="description" />
        <DateInput label="On" source="date" />
        <BooleanInput source="isUpcoming" />
      </SimpleForm>
    </Edit>
  );
};

export default EventEdit;
