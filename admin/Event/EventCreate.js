import React from "react";
import {
  BooleanInput,
  Create,
  DateInput,
  ImageInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const EventCreate = (props) => {
  return (
    <Create title="Create an Event" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <ImageInput source="image" />
        <TextInput multiline source="shortDescritption" />
        <TextInput multiline source="description" />
        <DateInput label="On" source="date" />
        <BooleanInput source="isUpcoming" />
      </SimpleForm>
    </Create>
  );
};

export default EventCreate;
