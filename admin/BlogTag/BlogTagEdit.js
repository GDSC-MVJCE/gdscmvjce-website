import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const BlogTagEdit = (props) => {
  return (
    <Edit title="Edit BLog Tag" {...props}>
      <SimpleForm>
        <TextInput source="label" />
        <TextInput source="slug" />
      </SimpleForm>
    </Edit>
  );
};

export default BlogTagEdit;
