// Header.js
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { logout, getUser } from "../../utils/helpers";
import "./Header.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = getUser();
  const navigate = useNavigate();
  const logoutUser = async () => {
    try {
      await axios.get(`http://localhost:4001/user/logout`);
      logout(() => navigate("/"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo">
            My App
          </Link>
          <nav className="nav">
            <Link to="/articles" className="nav-item">
              Articles
            </Link>
            <Link to="/resources" className="nav-item">
              Resources
            </Link>
            <Link to="/forum" className="nav-item">
              Forum
            </Link>
          </nav>
        </div>
        <div className="header-right">
          {user ? (
            <>
              {/* <Avatar className="avatar" src={user.picture} alt={user.name} /> */}
              <Avatar
                className="avatar"
                src="url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fencyclopediaofalabama.org%2Farticle%2Fcrayfishes-of-alabama%2F&psig=AOvVaw1ax1J0kVhZeCmGCoqO3T-2&ust=1707994799977000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOC_x8zWqoQDFQAAAAAdAAAAABAE)"
                alt={user.name}
              />
              <button className="logout-button" onClick={logoutUser}>
                Logout
              </button>
            </>
          ) : (
            <div className="auth-buttons">
              <Link to="/signin" className="auth-button">
                Sign In
              </Link>
              <Link to="/signup" className="auth-button">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
