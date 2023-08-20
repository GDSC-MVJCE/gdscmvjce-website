import React from "react";
import {
  Create,
  DateInput,
  DateTimeInput,
  DeleteButton,
  EditButton,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleForm,
  TextInput
} from "react-admin";
import ScheduleInput from "./ScheduleInput";
import { RichTextInput } from "ra-input-rich-text";

const EventCreate = (props) => {
  return (
    <Create title="Create an Event" {...props}>
      <SimpleForm>
        <TextInput source="coverPhoto" />
        <TextInput source="title" />
        <TextInput source="slug" />
        <RichTextInput source="description" />
        {/* <ScheduleInput source="schedule" /> */}
        <ReferenceArrayInput source="speakers" reference="speaker" />
        <DateTimeInput source="startDate" />
        <DateTimeInput source="endDate" />
        <TextInput source="venue" />
        <TextInput source="status" />
        <TextInput source="registrationLink" />
        <ReferenceArrayInput
          source="tags"
          reference="eventTag"
        ></ReferenceArrayInput>
        <EditButton basePath="/event" />
        <DeleteButton basePath="/event" />
      </SimpleForm>
    </Create>
  );
};

export default EventCreate;
