import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ textDecoration: match ? "none" : "none" , color: match? "white" : "white", padding:"10px" , backgroundColor: match? "rgb(250, 185, 21)" : "rgb(245, 91, 91)" , borderRadius:"10px"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
  }
  export default CustomLink;