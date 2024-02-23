import React, { useEffect } from "react";
import { UseDispatch, useSelector } from "react-redux";
import { setAdminStatus } from "../redux/action/adminAction";

const withAdminAccess = (WrappedComponent) => {
  const WithAdminAccess = (props) => {
    const dispatch = useDispatch();
    const isAdmin = useSelector((state) => state.admin.isAdmin);

    useEffect(() => {
      // Simulate admin access check or fetch user role from API
      const isAdminUser = /* Check if the user is an admin */ true;
      dispatch(setAdminStatus(isAdminUser));
    }, [dispatch]);

    return <WrappedComponent {...props} isAdmin={isAdmin} />;
  };
  return WithAdminAccess;
};

export default withAdminAccess;
