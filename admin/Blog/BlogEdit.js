import React, { useEffect, useState } from "react";
import {
  DateTimeInput,
  DeleteButton,
  Edit,
  EditButton,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  TextInput
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

const BlogEdit = (props) => {
  return (
    <Edit title="Post a blog" {...props}>
      <SimpleForm>
        <TextInput source="title" label="Title" />
        <DateTimeInput source="date" label="Date & Time" />
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
        <RichTextInput source="content" label="Content" row />
        <ReferenceArrayInput source="tags" reference="blogTag" label="Tags" />
        <TextInput
          source="slug"
          label="Slug URL"
          helperText="gdsc.mvjce.in/blogs/yourslughere"
        />
        <EditButton basePath="/blog" />
        <DeleteButton basePath="/blog" />
      </SimpleForm>
    </Edit>
  );
};

export default BlogEdit;
