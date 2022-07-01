import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import IsLoading from "./IsLoading";

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
   if(loading){
    return <IsLoading></IsLoading>
   }
    if (!user) {     
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

export default RequireAuth;