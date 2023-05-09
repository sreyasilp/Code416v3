import React, { useState, useEffect } from "react";
import { getProducts, updateProduct, deleteProduct } from "../../../api";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(1);
        setProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setShowModal(true);
  };

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error(error);
    }
  };
  const handleSaveClick = async () => {
    const updatedProduct = {
      ...selectedProduct,
      name,
      description,
      price,
    };
    try {
      const response = await updateProduct(updatedProduct);
      const updatedProducts = products.map((product) =>
        product._id === response.data.data._id ? response.data.data : product
      );
      setProducts(updatedProducts);
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container fluid className="bg-dark text-white">
      {products.map((product) => (
        <Row className="p-4" key={product._id}>
          <Col md="3">
            <h6>{product.name}</h6>
          </Col>
          <Col md="3">
            <h6>{product.description}</h6>
          </Col>
          <Col md="3">
            <h6>{product.price}</h6>
          </Col>
          <Col md="3">
            <Button variant="primary" onClick={() => handleEditClick(product)}>
              Edit
            </Button> 
            <Button variant="danger" onClick={() => handleDelete(product._id)}>
              delete
            </Button>
          </Col>
        </Row>
      ))}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Product;
