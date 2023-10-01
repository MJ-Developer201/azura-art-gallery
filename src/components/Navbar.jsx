import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import tikTokLogo from "../../public/img/tiktokwht.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../css/navbar.css";
import { Twitter } from "@mui/icons-material";
import { Divider, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default function CustomNavbar() {
  const [anchorElement, setAnchorElement] = useState(null);

  function handleOpenDropdown(event) {
    setAnchorElement(event.currentTarget);
  }

  function handleCloseDropdown() {
    setAnchorElement(null);
  }

  return (
    <>
      <Navbar className="header-div" id="top">
        <Container fluid className="nav-interior">
          <Navbar.Brand style={{ marginLeft: "0.1rem" }} as={Link} to="/">
            <div style={{ display: "flex" }}>
              <a href="#hero-section-id">
                <img className="flower-logo" src="/azura-art.png" alt="" />
              </a>
            </div>
          </Navbar.Brand>
          <div
            className="links header-right"
            style={{ display: "flex", marginRight: "1rem" }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <p style={{ marginLeft: "20px", fontSize: 16 }}>Home</p>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/buy-ticket"}>
              <a style={{ textDecoration: "none" }} href="">
                <p style={{ marginLeft: "20px", fontSize: 16, color: "black" }}>
                  Tickets
                </p>
              </a>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/events"}>
              <a style={{ textDecoration: "none" }} href="#footer">
                <p style={{ marginLeft: "20px", fontSize: 16, color: "black" }}>
                  Events
                </p>
              </a>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/member"}
            >
              <p
                style={{
                  marginLeft: "20px",
                  fontSize: 16,
                  textDecoration: "none",
                }}
              >
                Membership
              </p>
            </Link>
          </div>

          <div className="dropdown">
            <MenuIcon onClick={handleOpenDropdown}>Dropdown</MenuIcon>
            <Menu
              anchorEl={anchorElement}
              open={Boolean(anchorElement)}
              onClose={handleCloseDropdown}
            >
              <MenuItem component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem component={Link} to="/member">
                Tickets
              </MenuItem>
              <MenuItem component={Link} to="/events">
                Events
              </MenuItem>
              <MenuItem component={Link} to="/member">
                Membership
              </MenuItem>
            </Menu>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
