import React from "react";
import {
  DateInput,
  Edit,
  ReferenceArrayInput,
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
      </SimpleForm>
    </Edit>
  );
};

export default EventEdit;
