import React, { ReactNode } from "react";
import { useTheme, Theme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem
} from "@mui/material";

const drawerWidth = 240;

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    }
  };
};
const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120,120,120,0.2)"
  },
  content: {
    marginLeft: drawerWidth,
    padding: 4
  }
};

const NavDrawer = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <div>
      <AppBar position="fixed" sx={themedStyles(theme).appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            // component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            SECOND BRAIN
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={true}
        sx={simpleStyles.drawer}
        PaperProps={{
          sx: simpleStyles.drawerPaper,
          elevation: 9
        }}
      >
        <List>
          {[
            {
              text: "Bookmarks"
            },
            {
              text: "Youtube "
            }
          ].map((nav, index) => (
            <ListItem key={nav.text}>{nav.text}</ListItem>
          ))}
        </List>
      </Drawer>
      {/* react router will be added here  */}
      <main style={simpleStyles.content}>{children}</main>
    </div>
  );
};

export default NavDrawer;
