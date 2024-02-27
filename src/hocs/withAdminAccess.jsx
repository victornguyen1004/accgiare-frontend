import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdminStatus } from "../redux/action/adminAction";

const withAdminAccess = (WrappedComponent) => {
  const WithAdminAccess = (props) => {
    // Access Redux dispatch function
    const dispatch = useDispatch();
    // Access isAdmin state
    const isAdmin = useSelector((state) => state.admin.isAdmin);

    useEffect(() => {
      const checkAdminAccess = async () => {
        try {
          // Make a secure API call to check admin access
          const response = await fetch("apiurl", {
            method: "GET",
            headers: {
              // Include a secure, HttpOnly cookie with the token
              Authorization: `Bearer da`,
              "Content-Type": "application/json",
            },
            credentials: "include", // Include credentials for sending cookies
          });
          if (response.ok) {
            const isAdminUser = await response.json();
            dispatch(setAdminStatus(isAdminUser));
          } else {
            console.error("Failed to check admin access");
          }
        } catch (error) {
          console.error("Error checking admin access", error);
        }
      };
      checkAdminAccess();
    }, [dispatch]);

    return <WrappedComponent {...props} isAdmin={isAdmin} />;
  };
  return WithAdminAccess;
};

export default withAdminAccess;
