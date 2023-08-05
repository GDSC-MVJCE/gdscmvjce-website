import React from "react";
import {
  Create,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const TeamCreate = (props) => {
  return (
    <Create title="Create Team" {...props}>
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
    </Create>
  );
};

export default TeamCreate;
