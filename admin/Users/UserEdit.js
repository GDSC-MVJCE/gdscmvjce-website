import React from "react";
import { BooleanInput, Edit } from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit title="Create an Event" {...props}>
      <SimpleForm>
        <BooleanInput source="isAdmin" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
