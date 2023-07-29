import React from "react";
import {
  BooleanField,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
  UrlField,
} from "react-admin";

const EventList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <UrlField source="coverPhoto" />
        <TextField source="title" />
        <TextField source="description" />
        <TextField source="venue" />
        <TextField source="status" />
        <UrlField source="registrationLink" />
        <EditButton basePath="/event" />
        <DeleteButton basePath="/event" />
      </Datagrid>
    </List>
  );
};

export default EventList;
