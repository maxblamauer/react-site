import { useAuth } from "../../Contexts/AuthContext";
import NavBar from "../Navbar";

const Dashboard = () => {
  const { currentUser } = useAuth();
  
  return (
    <>
      <NavBar />
    
    </>

  );
}

export default Dashboard;
