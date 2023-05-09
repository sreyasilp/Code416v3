import { useState } from "react";
import { signUp } from "../../api";
import "./signup.css"; // import CSS file
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "buyer",
  });

  const showToastMessage = (message, error) => {
    if (error) {
      toast.error(`'Error !' ${message.message} `, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(`'Success`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signUp(formData);
      console.log(response.data); // handle successful response
      showToastMessage(response.data.data, false); // show success toast
      navigate("/home");
    } catch (error) {
      showToastMessage(error.response.data, true); // show success toast
      console.log(error.response.data); // handle error response
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center my-4">Sign Up</h1>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        Sign Up
      </button>
      <ToastContainer />
    </form>
  );
}

export default SignUp;
