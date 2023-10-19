import { useAuth } from "../../Contexts/AuthContext";

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div>Dashboard</div>
  );
}

export default Dashboard;
