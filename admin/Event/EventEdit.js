import React, { useEffect } from "react";
import {
  DateTimeInput,
  Edit,
  ReferenceArrayInput,
  SimpleForm,
  TextInput
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

const EventEdit = (props) => {
  return (
    <Edit title="Edit Event" {...props}>
      <SimpleForm>
        <TextInput source="coverPhoto" />
        <TextInput source="title" />
        <RichTextInput source="description" />
        <TextInput source="slug" />
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
      </SimpleForm>
    </Edit>
  );
};

export default EventEdit;
