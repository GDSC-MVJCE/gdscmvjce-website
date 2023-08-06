import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

const BlogTagList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="label" />
        <TextField source="slug" />
        <EditButton basePath="/blogtag" />
        <DeleteButton basePath="/blogtag" />
      </Datagrid>
    </List>
  );
};

export default BlogTagList;
