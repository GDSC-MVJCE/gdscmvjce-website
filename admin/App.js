import { Event, People } from "@mui/icons-material";
import { dataProvider } from "ra-data-simple-prisma";
import React from "react";
import { Admin, Resource } from "react-admin";
import EventCreate from "./Event/EventCreate";
import EventEdit from "./Event/EventEdit";
import EventList from "./Event/EventList";
import { MenuLayout } from "./MenuLayout";
import UserEdit from "./Users/UserEdit";
import UserList from "./Users/UserList";

const App = () => {
  return (
    <Admin layout={MenuLayout} dataProvider={dataProvider("/api/admin")}>
      <Resource
        name="event"
        icon={Event}
        list={EventList}
        create={EventCreate}
        edit={EventEdit}
      />
      <Resource name="user" icon={People} list={UserList} edit={UserEdit} />
    </Admin>
  );
};

export default App;
