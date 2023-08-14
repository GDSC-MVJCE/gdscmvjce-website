import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const SpeakerEdit = (props) => {
  return (
    <Edit title="Edit Speakers" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="image" />
        <TextInput source="title" />
        <TextInput source="description" />
        <TextInput source="profileLink" />
      </SimpleForm>
    </Edit>
  );
};

export default SpeakerEdit;
