import React from "react";
import { BooleanInput, Edit } from "react-admin";

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
