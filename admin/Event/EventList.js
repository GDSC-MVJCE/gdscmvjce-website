import React from "react";
import {
  ChipField,
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
        <TextField source="title" />
        <TextField source="description" />
        <DateField
          source="startDate"
          options={{
            year: "numeric",
            month: "long",
            day: "numeric",
          }}
        />
        <EditButton basePath="/event" />
        <DeleteButton basePath="/event" />
      </Datagrid>
    </List>
  );
};

export default EventList;
