import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <h1 className="mb-4">Oops, something went wrong!</h1>
      <p className="mb-4">The page you are looking for cannot be found.</p>
      <Link>
      <Button  to="/" variant="warning">
        Go back to home
      </Button>
      </Link>
    </Container>
  );
};

export default ErrorPage;