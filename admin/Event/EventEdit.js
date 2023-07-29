import React from "react";
import {
  BooleanInput,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";
import ScheduleInput from "./ScheduleInput";

const EventEdit = (props) => {
  return (
    <Edit title="Edit Event" {...props}>
      <SimpleForm>
        <TextInput source="coverPhoto" />
        <TextInput source="title" />
        <TextInput source="description" />
        <TextInput source="venue" />
        <TextInput source="status" />
        <TextInput source="registrationLink" />
        <ScheduleInput source="schedule" />
      </SimpleForm>
    </Edit>
  );
};

export default EventEdit;
