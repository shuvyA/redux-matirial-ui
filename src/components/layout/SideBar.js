import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import InfoIcon from "@material-ui/icons/Info";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  }
}));

const mainNavigation = [
  { text: "Home", link: "", icon: HomeIcon },
  { text: "Dashboard", link: "dashboard", icon: DashboardIcon },
  { text: "Add-User", link: "add-user", icon: GroupAddIcon },
  { text: "About", link: "about", icon: InfoIcon },
  { text: "AppsFlyer", link: "appsflyer", icon: FlightTakeoffIcon }
];

const SideBar = ({ handleDrawerClose, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {mainNavigation.map(({ text, link, icon: Icon }, index) => (
            <ListItem button key={text} component={Link} to={link}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <DashboardIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
