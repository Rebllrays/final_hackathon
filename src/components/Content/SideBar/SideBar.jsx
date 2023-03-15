import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState, useEffect } from "react";

import {MdKeyboardDoubleArrowRight} from "react-icons/md";

const SideBar = () => {
      const {
        collapseSidebar,
      } = useProSidebar();

  return (
    <div
      id="app"
      style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
    >
      <Sidebar
        breakPoint="sm"
        transitionDuration={800}
        backgroundColor="#24242f"
        rtl={false}
        style={{ height: "100vh" }}
      >
        {/* {!broken && ( */}
        <Menu style={{ color: "#bb2649" }}>
          <MenuItem
            icon={<MdKeyboardDoubleArrowRight />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center", color: "#bb2649" }}
          >
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
