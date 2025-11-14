import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Verify = () => {
  const location = useLocation()
  const [email] = useState(location.state)
  const navigate = useNavigate()

  useEffect(() => {
      if(!email){
        navigate("/")
      }
  },[email])

  return (
    <div>
      this is verify
    </div>
  );
};

export default Verify;
