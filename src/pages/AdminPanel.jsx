import React from "react";
import withAdminAccess from "../hocs/withAdminAccess";

const AdminPanel = ({ isAdmin }) => {
  return (
    <div>
      {isAdmin ? (
        <div>
          <h2>Admin Panel</h2>
        </div>
      ) : (
        <div>Privilege Error</div>
      )}
    </div>
  );
};

export default withAdminAccess(AdminPanel);
