import React from "react";
import styles from "./MenuLink.module.css";
import { NavLink } from "react-router-dom";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={`
      	${styles.link}
	`}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? "underline" : "",
        };
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
}
