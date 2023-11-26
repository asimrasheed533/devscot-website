import React from "react";
import { NavLink } from "react-router-dom";
import errorg from "../assets/errorg.gif";
export default function NotFound() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1366px",
          margin: "0 auto",
          padding: "0 2em",
        }}
        className="error__main__over"
      >
        <NavLink
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1em 0",
            alignItems: "center",
            width: "100%",
            maxWidth: "150px",
            backgroundColor: "#6554dc",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
            marginBottom: ".5em",
          }}
          className="back__btn"
        >
          Go back
        </NavLink>
        <div
          className="error_container"
          style={{ width: "100%", display: "flex" }}
        >
          <img
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "40px",
              objectFit: "cover",
              objectPosition: "center",
              // position: "absolute",
              // top: "0",
              // left: "0",
            }}
            src={errorg}
            alt="404"
          />
        </div>
      </div>
    </>
  );
}
