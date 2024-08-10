import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
   <nav>
    <div className="wrapper">
    <ul>
        <li><a href="/" onClick={()=>{navigate("/")}}>Home</a></li>
        <li><a href="/" onClick={()=>{navigate("/")}}>About</a></li>
        <li><a href="/" onClick={()=>{navigate("/")}}>Your Points</a></li>
    </ul>

    </div>
    </nav>
  );
};

export default NavBar;
