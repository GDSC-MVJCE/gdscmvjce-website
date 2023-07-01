import React from "react";
import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

const EventList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="publishedAt" />
        <EditButton basePath="/events" />
        <DeleteButton basePath="/events" />
      </Datagrid>
    </List>
  );
};

export default EventList;
