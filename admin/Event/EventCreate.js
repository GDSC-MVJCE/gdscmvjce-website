import React from "react";
import {
  Create,
  DateInput,
  DeleteButton,
  EditButton,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import ScheduleInput from "./ScheduleInput";

const EventCreate = (props) => {
  return (
    <Create title="Create an Event" {...props}>
      <SimpleForm>
        <TextInput source="coverPhoto" />
        <TextInput source="title" />
        <TextInput source="description" />
        <ScheduleInput source="schedule" />
        <ReferenceArrayInput source="speakerId" reference="speaker">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <DateInput source="startDate" />
        <DateInput source="endDate" />
        <TextInput source="venue" />
        <TextInput source="status" />
        <TextInput source="registrationLink" />
        <ReferenceArrayInput source="eventId" reference="eventtag">
          <SelectArrayInput optionText="label" />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="eventId" reference="gallery">
          <SelectArrayInput optionText="title" />
        </ReferenceArrayInput>
        <EditButton basePath="/event" />
        <DeleteButton basePath="/event" />
      </SimpleForm>
    </Create>
  );
};

export default EventCreate;
