import React from "react";
import {
  ChipField,
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ReferenceArrayField,
  ReferenceField,
  ReferenceManyField,
  ReferenceOneField,
  SimpleList,
  SingleFieldList,
  TextField,
} from "react-admin";

const TeamList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label="NAME" source="name" />
        <ReferenceOneField label="LEAD" reference="profile" target="leadId">
          <TextField source="name" />
        </ReferenceOneField>
        <ReferenceManyField label="CORE" reference="profile" target="coreId">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceManyField>
        <ReferenceManyField
          label="MEMBERS"
          reference="profile"
          target="memberId"
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceManyField>
        <EditButton name="Edit" />
        <DeleteButton name="Delete" />
      </Datagrid>
    </List>
  );
};

export default TeamList;
