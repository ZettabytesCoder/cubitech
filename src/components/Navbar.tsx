import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Login from "@mui/icons-material/Login";
import Link from "next/link";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [{ label: "About", path: "/about" }];

const Navbar: React.FC<any> = () => {
  return (
    <Box display={"flex"}>
      <CssBaseline />
      <AppBar component={"nav"} sx={{ justifyContent: "center" }}>
        <Toolbar>
          <Link href={"/"}>
          <Avatar
            alt={"Cubitech"}
            src={"./cubitech_dark.svg"}
            component={"div"}
            sx={{
              width: 176, // 1414
              height: 42, // 336
            }}
            variant={"square"}
          /></Link>
          <Box ml={2}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{ color: "inherit", textDecoration: "none" }}
                href={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box flexGrow={1} />
          <Button color={"inherit"} startIcon={<Login />} href={"#"}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
