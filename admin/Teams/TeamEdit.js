import React from "react";
import {
  Edit,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const TeamEdit = (props) => {
  return (
    <Edit title="Edit Team" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <ReferenceInput label="LEAD" source="leadId" reference="profile">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceArrayInput label="CORE" source="coreId" reference="profile">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          label="MEMBERS"
          source="memberId"
          reference="profile"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default TeamEdit;
