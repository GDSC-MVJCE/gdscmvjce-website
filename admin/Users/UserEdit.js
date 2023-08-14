import React from "react";
import { BooleanInput, Edit, SimpleForm } from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit title="Edit admin access" {...props}>
      <SimpleForm>
        <BooleanInput source="isAdmin" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
