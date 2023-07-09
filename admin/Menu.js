import LabelIcon from "@mui/icons-material/Label";
import { Menu } from "react-admin";

export const MyMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="posts" />
    <Menu.ResourceItem name="users" />
    <Menu.Item
      to="/event"
      primaryText="Miscellaneous"
      leftIcon={<LabelIcon />}
    />
  </Menu>
);
