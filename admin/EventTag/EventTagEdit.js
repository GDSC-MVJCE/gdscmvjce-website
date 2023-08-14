import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const EventTagEdit = (props) => {
  return (
    <Edit title="Edit Event Tag" {...props}>
      <SimpleForm>
        <TextInput source="label" />
        <TextInput source="slug" />
      </SimpleForm>
    </Edit>
  );
};

export default EventTagEdit;
