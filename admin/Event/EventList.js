import React from "react";
import {
  BooleanField,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  TextField,
  UrlField,
} from "react-admin";

const EventList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ImageField source="image" />
        <TextField source="title" />
        <TextField source="shortDescritption" />
        <TextField source="description" />
        <DateField source="date" />
        <BooleanField source="isUpcoming" />
        <EditButton basePath="/event" />
        <DeleteButton basePath="/event" />
      </Datagrid>
    </List>
  );
};

export default EventList;
