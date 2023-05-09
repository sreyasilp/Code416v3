import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { getProducts } from "../../api";

const Cardstyleds= (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(1); // Pass the page number to get products
        setProducts(response.data.data); // Set the products in state
        // console.log(response.data); // Set the products in state
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (props.products) setProducts(props.products.data);
  }, [props]);

  return (
    <section style={{backgroundColor: '#eee'}}>
    <div class="container py-5">
      <div class="row justify-content-center">
        {products?.map((product) => (
          <div class="col-md-12 col-lg-3 mb-6 mb-lg-0" key={product._id}>
            <div class="card">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp" class="card-img-top" alt={product.name} />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      {product.category}
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>{product.price}</s>
                  </p>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">{product.name}</h5>
                  <h5 class="text-dark mb-0">{product.price}</h5>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">{product.price}</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Cardstyleds;
