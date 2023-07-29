import React from "react";
import {
  Create,
  DateInput,
  SimpleForm,
  TextInput,
  UrlInput,
} from "react-admin";

export const EventCreate = (props) => {
  return (
    <Create title="Create an Event" {...props}>
      <SimpleForm>
        <TextInput source="coverPhoto" />
        <TextInput source="title" />
        <TextInput source="description" />
        <TextInput source="venue" />
        <TextInput source="status" />
        <TextInput source="registrationLink" />
      </SimpleForm>
    </Create>
  );
};
