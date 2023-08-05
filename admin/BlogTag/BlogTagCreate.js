import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const BlogTagCreate = (props) => {
  return (
    <Create title="Create Blog Tag" {...props}>
      <SimpleForm>
        <TextInput source="label" />
        <TextInput source="slug" />
      </SimpleForm>
    </Create>
  );
};

export default BlogTagCreate;
