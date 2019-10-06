import React, { useContext } from "react";
import DashboardCard from "components/dashboard-card";
import { DataContext } from "context/data.context";

const Dashboard = () => {
  const [{ total }] = useContext(DataContext);
  return (
    <main style={{ padding: 20 }}>
      <div style={{ display: "flex" }}>
        <DashboardCard title="Hutang" bg="#1074e7" color="white">
          <p>Rp.{total > 0 ? total : 0}</p>
        </DashboardCard>
        <DashboardCard title="Piutang" bg="#37C2CE" color="white">
          <p>Rp.{total < 0 ? Math.abs(total) : 0}</p>
        </DashboardCard>
      </div>
    </main>
  );
};

export default Dashboard;
