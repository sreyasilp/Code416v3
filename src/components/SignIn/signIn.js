import { useState } from "react";
import { signIn } from "../../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function SignIn() {
  const navigate = useNavigate();
  const timeout = 1200;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const showToastMessage = (message, error) => {
    if (error) {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signIn(formData);
      localStorage.setItem("token", data.token);
      showToastMessage("Success", false);
      setTimeout(() => {
        navigate("/home");
      }, timeout);
    } catch (error) {
      showToastMessage(error.response.data.message, true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={6}>
          <h1 className="text-center my-4">Sign In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="my-2">
              Sign In
            </Button>
          </Form>
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
