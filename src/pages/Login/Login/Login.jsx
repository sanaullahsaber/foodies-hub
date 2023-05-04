import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location', location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true})
      })
      .catch((error) => {
        console.log(error)
    })
  }


  const handleGithubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true})
      })
      .catch((error) => {
      console.log(error);
    })
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1 className="text-center mb-5">Welcome back!</h1>
      <Form onSubmit={handleLogin} className="w-50">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
        <Form.Text className="mt-3 text-secondary">
          Don't have an account yet?{" "}
          <Link to="register" className="text-decoration-none">
            Register now
          </Link>
        </Form.Text>
        <Button onClick={handleGoogleSignIn} variant="primary" type="submit" className="w-100 mt-1 p-1">
         <FaGoogle></FaGoogle>oogle
        </Button>
        <Button onClick={handleGithubSignIn} variant="primary" type="submit" className="w-100 mt-1 p-1">
          <FaGithub></FaGithub>GitHub
        </Button>
      </Form>
    </Container>
  );
};

export default Login;