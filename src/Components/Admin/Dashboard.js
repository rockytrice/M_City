import React from "react";
import AdminLayout from "../../Hoc/AdminLayout";

const Dashboard = (props) => {
  console.log(props);
  return (
    <AdminLayout>
      <div className="user_dashboard">This is Your Dashboard</div>;
    </AdminLayout>
  );
};
export default Dashboard;
