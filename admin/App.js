import {
  Event,
  Label,
  People,
  PeopleAlt,
  PeopleAltOutlined,
  Collections,
  Feed
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
import SpeakerCreate from "./Speaker/SpeakerCreate";
import SpeakerEdit from "./Speaker/SpeakerEdit";
import SpeakerList from "./Speaker/SpeakerList";
import TeamCreate from "./Teams/TeamCreate";
import TeamEdit from "./Teams/TeamEdit";
import TeamList from "./Teams/TeamList";
import UserEdit from "./Users/UserEdit";
import UserList from "./Users/UserList";
import ProfileList from "./Profile/ProfileList";
import ProfileCreate from "./Profile/ProfileCreate";
import TeamMemberList from "./TeamMember/TeamMemberList";
import TeamMemberCreate from "./TeamMember/TeamMemberCreate";
import TeamMemberEdit from "./TeamMember/TeamMemberEdit";
import ProfileEdit from "./Profile/ProfileEdit";
import BlogCreate from "./Blog/BlogCreate";
import GalleryList from "./Gallery/GalleryList";
import GalleryCreate from "./Gallery/GalleryCreate";
import GalleryEdit from "./Gallery/GalleryEdit";
import BlogList from "./Blog/BlogList";
import BlogEdit from "./Blog/BlogEdit";

const App = () => {
  return (
    <Admin dataProvider={dataProvider("/api/admin")}>
      <Resource
        name="event"
        icon={Event}
        list={EventList}
        create={EventCreate}
        edit={EventEdit}
        recordRepresentation={(record) => `${record.title}`}
      />
      <Resource
        name="blog"
        icon={Feed}
        list={BlogList}
        create={BlogCreate}
        edit={BlogEdit}
        recordRepresentation={(record) => `${record.title}`}
      />

      <Resource
        name="profile"
        icon={People}
        list={ProfileList}
        edit={ProfileEdit}
        create={ProfileCreate}
        recordRepresentation={(record) => `${record.name}`}
      />

      <Resource
        name="speaker"
        icon={PeopleAltOutlined}
        list={SpeakerList}
        create={SpeakerCreate}
        edit={SpeakerEdit}
        recordRepresentation={(record) => `${record.name}`}
      />
      <Resource
        name="team"
        icon={PeopleAlt}
        list={TeamList}
        create={TeamCreate}
        edit={TeamEdit}
        recordRepresentation={(record) => `${record.name}`}
      />
      <Resource
        name="teamMember"
        icon={PeopleAlt}
        options={{
          label: "Team Members"
        }}
        list={TeamMemberList}
        create={TeamMemberCreate}
        edit={TeamMemberEdit}
      />
      <Resource
        name="eventTag"
        icon={Label}
        options={{
          label: "Event Tags"
        }}
        list={EventTagList}
        create={EventTagCreate}
        edit={EventTagEdit}
        recordRepresentation={(record) => `${record.label}`}
      />
      <Resource
        name="blogTag"
        icon={Label}
        options={{
          label: "Blog Tags"
        }}
        list={BlogTagList}
        create={BlogTagCreate}
        edit={BlogTagEdit}
        recordRepresentation={(record) => `${record.label}`}
      />
      <Resource
        name="gallery"
        icon={Collections}
        options={{
          label: "Gallery"
        }}
        list={GalleryList}
        create={GalleryCreate}
        edit={GalleryEdit}
        recordRepresentation={(record) => `${record.title}`}
      />
      <Resource
        options={{
          label: "Admin Users"
        }}
        name="user"
        icon={People}
        list={UserList}
        edit={UserEdit}
      />
    </Admin>
  );
};

export default App;
