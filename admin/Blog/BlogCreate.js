import { RichTextInput } from "ra-input-rich-text";
import React from "react";
import {
  Create,
  DateTimeInput,
  DeleteButton,
  EditButton,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  TextInput
} from "react-admin";

const BlogCreate = (props) => {
  return (
    <Create title="Post a blog" {...props}>
      <SimpleForm>
        <TextInput source="title" label="Title" />
        <DateTimeInput
          source="date"
          label="Date & Time"
          defaultValue={new Date()}
        />
        <ReferenceInput source="author" reference="profile" label="Author" />
        <TextInput
          source="thumbnail"
          type="url"
          label="Blog Thumbnail Image"
          helperText="Provide Direct Image Address/URL"
        />
        <TextInput
          source="bannerImage"
          type="url"
          label="Blog Banner Image"
          helperText="Provide Direct Image Address/URL"
        />
        <RichTextInput source="content" label="Content" />
        <TextInput source="shortDescription" label="Short Description" />
        <ReferenceArrayInput source="tags" reference="blogTag" label="Tags" />
        <TextInput
          source="slug"
          label="Slug URL"
          helperText="gdsc.mvjce.in/blogs/yourslughere"
        />
        <EditButton basePath="/blog" />
        <DeleteButton basePath="/blog" />
      </SimpleForm>
    </Create>
  );
};

export default BlogCreate;
