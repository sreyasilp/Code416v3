import React, { useState, useEffect } from "react";
import { getProducts, updateProduct, deleteProduct } from "../../../api";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

const Productstyled = () => {
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
    <section style={{ backgroundColor: "#eee" }}>
      <div class="container py-5">
      {products?.map((product) => (
        <div key={product.name} class="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                        class="w-100"
                      />
                      <a href="#!">
                        <div class="hover-overlay">
                          <div
                            class="mask"
                            style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}
                          ></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>{product.name}</h5>
                    <div class="d-flex flex-row">
                      <div class="text-danger mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <span>310</span>
                    </div>
                    <div class="mt-1 mb-0 text-muted small">
                      <span>100% cotton</span>
                      <span class="text-primary"> • </span>
                      <span>Light weight</span>
                      <span class="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span>
                    </div>
                    <div class="mb-2 text-muted small">
                      <span>Unique design</span>
                      <span class="text-primary"> • </span>
                      <span>For men</span>
                      <span class="text-primary"> • </span>
                      <span>
                        Casual
                        <br />
                      </span>
                    </div>
                    <p class="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">${product.price}</h4>
                      <span class="text-danger">
                        <s>$20.99</s>
                      </span>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4">
                      <button class="btn btn-primary btn-sm" type="button">
                        Details
                      </button>
                      <button
                        class="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                      >
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Productstyled;
