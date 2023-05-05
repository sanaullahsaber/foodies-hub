import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
//  star updating.hkhkhkb onabort,.kbl jbi kbjlhufig kuljgldgdgkd; getIdToken; gkd; gkd; gkd; gkd; gkd;

  return (
    <div className="fixed-top ">
      <Container>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <NavLink
               
                className="fs-5 text-decoration-none"
                to="/"
              >
                <h2 className="fw-bold text-warning my-2">
                  F<span className="text-dark">oo</span>diesHub
                </h2>
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? " text-dark me-3 text-decoration-none fs-3 fw-bold"
                      : "text-warning text-orange mx-2 text-decoration-none fs-3 fw-bold"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? " text-dark me-3 text-decoration-none fs-3 fw-bold"
                      : "text-warning text-orange mx-2 text-decoration-none fs-3 fw-bold"
                  }
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? " text-dark me-3 text-decoration-none fs-3 fw-bold"
                      : "text-warning text-orange mx-2 text-decoration-none fs-3 fw-bold"
                  }
                >
                  blog
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? " text-dark me-3 text-decoration-none fs-3 fw-bold"
                      : "text-warning text-orange mx-2 text-decoration-none fs-3 fw-bold"
                  }
                >
                  Register
                </NavLink>

                <Nav className="text-light text-decoration-none fs-3 fw-bold">
                  {user ? (
                    <NavLink
                      onClick={handleLogOut}
                      className={({ isActive }) =>
                        isActive
                          ? " text-dark me-3 text-decoration-none fs-3 fw-bold"
                          : "text-warning text-orange mx-2 text-decoration-none fs-3 fw-bold"
                      }
                    >
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? " text-dark me-3 text-decoration-none fs-3 fw-bold"
                          : "text-warning text-orange mx-2 text-decoration-none fs-3 fw-bold"
                      }
                      to="/login"
                    >
                      Login
                    </NavLink>
                  )}
                </Nav>

                <Nav.Link>
                  {user && (
                    <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;
