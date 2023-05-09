import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FaUserCircle, FaShoppingCart, FaHeart } from "react-icons/fa";
import { getProductsBySearch } from "../../../api";
import Cards from "../../Cards/cards";

function NavBarstyled() {
  const isLoggedIn = localStorage.getItem("token");
  const [searchQuery, setSearchQuery] = useState({
    search: "",
    tags: "",
  });
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (event) => {
    try {
      const response = await getProductsBySearch(searchQuery);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogout = async (event) => {
    localStorage.clear();
  };
  return (
<>
</>
  );
}

export default NavBarstyled;
