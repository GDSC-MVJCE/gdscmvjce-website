import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

const EventTagList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="label" />
        <TextField source="slug" />
        <EditButton basePath="/eventtag" />
        <DeleteButton basePath="/eventtag" />
      </Datagrid>
    </List>
  );
};

export default EventTagList;
