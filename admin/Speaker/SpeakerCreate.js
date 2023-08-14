import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const SpeakerCreate = (props) => {
  return (
    <Create title="Create Speaker" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="image" />
        <TextInput source="title" />
        <TextInput source="description" />
        <TextInput source="profileLink" />
      </SimpleForm>
    </Create>
  );
};

export default SpeakerCreate;
