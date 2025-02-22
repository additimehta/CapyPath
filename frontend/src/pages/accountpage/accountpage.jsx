import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); 
    }
  }, [user, navigate]);

  return (
    <div>
      <h2>Welcome to Your Account Dashboard</h2>
      <p>Manage your settings here.</p>
    </div>
  );
};

export default AccountPage;

