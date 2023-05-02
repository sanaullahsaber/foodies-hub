import React from 'react';
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Footer from '../Shared/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

const Blog = () => {
  return (
    <div>
      <Container className="mt-5 p-5">
        <Col className="border p-4 mb-5">
          <h3 className="text-success fw-bold">
            What is the Difference Between a Controlled and Uncontrolled
            Component in React?
          </h3>

          <p className="text-primary-emphasis fw-bold">
            In React, a controlled component is a component that is controlled
            by React state, while an uncontrolled component is a component that
            maintains its own internal state. A controlled component receives
            its current value and an update callback via props, and the parent
            component manages the state of the component. When the user
            interacts with the component, the parent component updates the
            state, which in turn updates the component's value. An uncontrolled
            component, maintains its own internal state, and when the user
            interacts with the component, it updates its own state, which in
            turn updates the component's value.
          </p>
        </Col>
        <Col className="border p-4 mb-5">
          <h3 className="text-success fw-bold">
            How to validate React props using PropTypes
          </h3>
          <p className="text-primary-emphasis fw-bold">
            React is a JavaScript library used for creating interactive web
            frontend applications. It is one of the most popular libraries
            because of its easy-to-use API. We combine components into an app by
            passing data from parent components to child components. To do this,
            we pass data with props. Props are like HTML attributes, but they
            can contain dynamic data. A parent component passes props down to
            child components. And child components receive them. We can pass any
            data as props. Therefore, we need a way to validate their data type
            so that the child component gets what they expect.
          </p>
        </Col>

        <Col className="border p-4 mb-5">
          <h3 className="text-success fw-bold">
            what is the difference between nodejs and express js?
          </h3>
          <p className="text-primary-emphasis fw-bold">
            js web application framework that provides a robust set of features
            for web and mobile applications. In other words, NodeJS is the
            package, which provides the JavaScript run-time environment, whereas
            Express is a framework that sits on top of NodeJS and helps us to
            handle requests and responses.
          </p>
        </Col>
        <Col className="border p-4 mb-5">
          <h3 className="text-success fw-bold">
            What is a custom hook, and why will you create a custom hook?
          </h3>
          <p className="text-primary-emphasis fw-bold">
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </Col>
      </Container>
    </div>
  );
};

export default Blog;