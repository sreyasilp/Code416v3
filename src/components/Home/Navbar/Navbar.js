import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FaUserCircle, FaShoppingCart, FaHeart } from "react-icons/fa";
import { getProductsBySearch } from "../../../api";
// import Cards from "../../Cards/cards";

function NavBar() {
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
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Company
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
            </Nav>

            {/* <Form onSubmit={handleSearch}> */}
              {/* <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={searchQuery.search}
                  onChange={(event) =>
                    setSearchQuery({
                      ...searchQuery,
                      search: event.target.value,
                    })
                  }
                />
              </Form.Group> */}
              {/* <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Tags"
                  value={searchQuery.tags}
                  onChange={(event) =>
                    setSearchQuery({ ...searchQuery, tags: event.target.value })
                  }
                />
              </Form.Group> */}
              {/* <Button variant="primary" type="submit">
                Search
              </Button> */}
            {/* </Form> */}
            <Nav>
              {isLoggedIn ? (
                <>
                  <Nav.Link as={Link} to="/profile">
                    <FaUserCircle className="me-1" />
                    Profile
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/signin">
                    Sign In
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Sign Up
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart />
              </Nav.Link>
              <Nav.Link as={Link} to="/wishlist">
                <FaHeart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Cards products={searchResults} /> */}
    </>
  );
}

export default NavBar;
