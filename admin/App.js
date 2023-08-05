import {
  Event,
  Label,
  People,
  PeopleAlt,
  PeopleAltOutlined,
} from "@mui/icons-material";
import { dataProvider } from "ra-data-simple-prisma";
import React from "react";
import { Admin, Resource } from "react-admin";

import BlogTagCreate from "./BlogTag/BlogTagCreate";
import BlogTagEdit from "./BlogTag/BlogTagEdit";
import BlogTagList from "./BlogTag/BlogTagList";
import EventCreate from "./Event/EventCreate";
import EventEdit from "./Event/EventEdit";
import EventList from "./Event/EventList";
import EventTagCreate from "./EventTag/EventTagCreate";
import EventTagEdit from "./EventTag/EventTagEdit";
import EventTagList from "./EventTag/EventTagList";
import { MenuLayout } from "./MenuLayout";
import SpeakerCreate from "./Speaker/SpeakerCreate";
import SpeakerEdit from "./Speaker/SpeakerEdit";
import SpeakerList from "./Speaker/SpeakerList";
import TeamCreate from "./Teams/TeamCreate";
import TeamEdit from "./Teams/TeamEdit";
import TeamList from "./Teams/TeamList";
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
      <Resource
        name="speaker"
        icon={PeopleAltOutlined}
        list={SpeakerList}
        create={SpeakerCreate}
        edit={SpeakerEdit}
      />
      <Resource
        name="team"
        icon={PeopleAlt}
        list={TeamList}
        create={TeamCreate}
        edit={TeamEdit}
      />
      <Resource
        name="eventTag"
        icon={Label}
        list={EventTagList}
        create={EventTagCreate}
        edit={EventTagEdit}
      />
      <Resource
        name="blogTag"
        icon={Label}
        list={BlogTagList}
        create={BlogTagCreate}
        edit={BlogTagEdit}
      />
    </Admin>
  );
};

export default App;
