import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const EventTagCreate = (props) => {
  return (
    <Create title="Create Event Tag" {...props}>
      <SimpleForm>
        <TextInput source="label" />
        <TextInput source="slug" />
      </SimpleForm>
    </Create>
  );
};

export default EventTagCreate;
