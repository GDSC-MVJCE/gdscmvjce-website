import dataProvider from "ra-data-simple-rest";
import React from "react";
import { Admin, Resource } from "react-admin";
import EventList from "./EventList";

const App = () => {
  return (
    <Admin dataProvider={dataProvider("http://localhost:3000/api/admin")}>
      <Resource name="events" list={EventList} />
    </Admin>
  );
};

export default App;
