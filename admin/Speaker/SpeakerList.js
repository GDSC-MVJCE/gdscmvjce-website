import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
  UrlField,
} from "react-admin";

const SpeakerList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <UrlField source="image" />
        <TextField source="title" />
        <TextField source="description" />
        <UrlField source="profileLink" />
        <EditButton basePath="/speaker" />
        <DeleteButton basePath="/speaker" />
      </Datagrid>
    </List>
  );
};

export default SpeakerList;
