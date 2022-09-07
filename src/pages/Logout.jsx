import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    navigate(-1);
  }, [navigate]);
  return <div>logout</div>;
}

export default Logout;
