import { Dialog, DialogContent, DialogTitle, Divider } from "@mui/material";
import React, { useState } from "react";

export default function BecomeAMember() {
  const [open, setOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission here
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="member-container">
      <div style={{ marginTop: "1rem" }} className="member-div">
        <div className="container mt-5 bg-black-transparent p-2 rounded">
          <div
            style={{ marginBottom: "6%" }}
            className="membership-header text-center "
          >
            <h1 style={{ fontSize: "3em" }} className="text-white">
              Join Our Art Gallery Membership
            </h1>
            <p className="text-white">
              Unlock exclusive benefits and immerse yourself in the world of
              art!
            </p>
            <button className="info-button" onClick={handleOpen}>
              Information
            </button>
          </div>

          <div className="membership-payment-options mt-5">
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="text-white"
            >
              Choose Your Membership Plan
            </h2>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h3 className="card-title">Standard Membership</h3>
                    <p className="card-text">
                      1-year access to standard benefits
                    </p>
                    <p className="card-text">Price: $50</p>
                    <button className="btn btn-success">Pay Now</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h3 className="card-title">Premium Membership</h3>
                    <p className="card-text">1-year with enhanced benefits</p>
                    <p className="card-text">Price: $100</p>
                    <button className="btn btn-success">Pay Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {" "}
          <h2 style={{ color: "black", textAlign: "center" }} className="">
            Membership Benefits
          </h2>
          <Divider style={{ backgroundColor: "black", color: "black" }} />
          <ul
            style={{
              color: "white",
              listStyle: "none",
              textAlign: "center",
              marginTop: 50,
            }}
            className="text-white"
          >
            <li
              style={{
                textAlign: "center",
                color: "black",
                marginRight: "1.5em",
                marginTop: "-0.em",
                lineHeight: "2.4",
                fontSize: "1.2em",
              }}
            >
              One-year validity of membership
            </li>
            <li
              style={{
                textAlign: "center",
                color: "black",
                marginRight: "1.5em",
                marginTop: "-0.em",
                lineHeight: "2.4",
                fontSize: "1.2em",
              }}
            >
              Hour early entry to exhibitions
            </li>
            <li
              style={{
                textAlign: "center",
                color: "black",
                marginRight: "1.5em",
                marginTop: "-0.em",
                lineHeight: "2.4",
                fontSize: "1.2em",
              }}
            >
              Early email updates about upcoming art
            </li>
            <li
              style={{
                textAlign: "center",
                color: "black",
                marginRight: "1.5em",
                marginTop: "-0.em",
                lineHeight: "2.4",
                fontSize: "1.2em",
              }}
            >
              Exclusive access to member-only events
            </li>
            <li
              style={{
                textAlign: "center",
                color: "black",
                marginRight: "1.5em",
                marginTop: "-0.em",
                lineHeight: "2.4",
                fontSize: "1.2em",
              }}
            >
              Discounts on art purchases and workshops
            </li>
          </ul>
          <Divider
            style={{
              marginTop: "5em",
              backgroundColor: "black",
              color: "black",
            }}
          />
          <h2
            style={{ color: "black", textAlign: "center", listStyle: "none" }}
            className=""
          >
            Premium Benefits
          </h2>
          <Divider style={{ backgroundColor: "black", color: "black" }} />
          <ul
            style={{
              color: "white",
              listStyle: "none",
              textAlign: "center",
              marginTop: 50,
            }}
            className="text-white"
          >
            <li
              style={{
                textAlign: "center",
                color: "black",
                marginRight: "1.5em",
                marginTop: "-0.em",
                lineHeight: "2.4",
                fontSize: "1.2em",
              }}
            >
              Art Collectors' Network
            </li>
            <li
              style={{
                textAlign: "center",
                color: "black",
                marginRight: "1.5em",
                marginTop: "-0.em",
                lineHeight: "2.4",
                fontSize: "1.2em",
              }}
            >
              Customized Art Framing
            </li>

            <li
              style={{
                textAlign: "center",
                color: "black",
                marginRight: "1.5em",
                marginTop: "-0.em",
                lineHeight: "2.4",
                fontSize: "1.2em",
              }}
            >
              Limited Edition Prints
            </li>
            <li
              style={{
                textAlign: "center",
                color: "black",
                marginRight: "1.5em",
                marginTop: "-0.em",
                lineHeight: "2.4",
                fontSize: "1.2em",
              }}
            >
              VIP Events and Exhibitions
            </li>
            <li
              style={{
                textAlign: "center",
                color: "black",
                marginRight: "1.5em",
                marginTop: "-0.em",
                lineHeight: "2.4",
                fontSize: "1.2em",
              }}
            >
              Discounts on art purchases and workshops
            </li>
          </ul>
        </DialogContent>
        <button onClick={handleClose} />
      </Dialog>
    </div>
  );
}
