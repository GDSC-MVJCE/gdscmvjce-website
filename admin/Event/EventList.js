import React from "react";
import {
  ChipField,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ReferenceArrayField,
  ReferenceManyField,
  SingleFieldList,
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
        <TextField source="schedule" />
        <ReferenceManyField
          label="SPEAKER"
          reference="speaker"
          target="speakerId"
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceManyField>
        <DateField source="startDate" />
        <DateField source="endDate" />
        <TextField source="venue" />
        <TextField source="status" />
        <UrlField source="registrationLink" />
        <ReferenceManyField label="TAGS" reference="eventtag" target="eventId">
          <SingleFieldList>
            <ChipField source="label" />
          </SingleFieldList>
        </ReferenceManyField>
        <ReferenceManyField
          label="GALLERY"
          reference="gallery"
          target="eventId"
        >
          <SingleFieldList>
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceManyField>
        <EditButton basePath="/event" />
        <DeleteButton basePath="/event" />
      </Datagrid>
    </List>
  );
};

export default EventList;
