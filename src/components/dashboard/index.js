import React, { useContext } from "react";
import DashboardCard from "components/dashboard-card";
import rupiahFormat from "functions/numeric";
import { DataContext } from "context/data.context";

const Dashboard = () => {
  const [{ total }] = useContext(DataContext);
  const utang = rupiahFormat("Rp.", total > 0 ? total : 0);
  const piutang = rupiahFormat("Rp.", total < 0 ? Math.abs(total) : 0);
  return (
    <main style={{ padding: 20 }}>
      <div style={{ display: "flex" }}>
        <DashboardCard title="Utang" bg="#1074e7" color="white">
          <p>{utang}</p>
        </DashboardCard>
        <DashboardCard title="Piutang" bg="#37C2CE" color="white">
          <p>{piutang}</p>
        </DashboardCard>
      </div>
    </main>
  );
};

export default Dashboard;
