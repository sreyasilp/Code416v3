import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { getProducts } from "../../api";

const Cards = (props) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await getProducts(1); // Pass the page number to get products
  //       setProducts(response.data.data); // Set the products in state
  //       // console.log(response.data); // Set the products in state
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  // useEffect(() => {
  //   if (props.products) setProducts(props.products.data);
  // }, [props]);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {products?.map((product) => (
          <Col className="mb-4" key={product._id}>
            <Card bg="dark" text="white" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body className="d-flex flex-column">
                <div className="mb-auto">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price}</Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <Button variant="primary" className="me-2">
                    <FaShoppingCart className="me-1" />
                    Add to Cart
                  </Button>
                  <Button variant="outline-primary">
                    <FaHeart />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {products?.length === 0 && (
          <Col md={4} className="mb-4">
            <Card
              text="black"
              style={{ width: "18rem", marginTop: "5rem", border: "none" }}
            >
              No products found
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Cards;
