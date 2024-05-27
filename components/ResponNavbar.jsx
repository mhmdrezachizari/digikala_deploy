import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./NavbarResponsive.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useSelector } from "react-redux";
function ResponNavbar() {
  const data= useSelector(state=>state.shoppingcard)
  const [massage, setmassage] = useState();
  const router = useRouter();
  const serchbox = useRef();
  const handlersub = () => {
    router.push(`/Searchbox/${serchbox.current.value}`);
    setmassage();
  };
  return (
    <Navbar sticky="top" className={`${styles.navbar} bg-dark`} expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link href="/" className={`${styles.navItem} nav-item mx-2`}>
            دیجی کالا
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-primary" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/SignUp" className={`${styles.navItem} nav-item mx-2`}>
              ثبت نام
            </Link>
            <Link href="/Login" className={`${styles.navItem} nav-item mx-2`}>
               ورود
            </Link>
            <Link
              href="/Products"
              className={`${styles.navItem} nav-item mx-2`}
            >
              محصولات
            </Link>
            <Link
              href="/ShoppingBuy"
              className={`${styles.navItem} nav-item mx-2`}
            >
              سبدخرید
            </Link>
          <label className="text-danger">{data.totalCount}</label>
          </Nav>
          <Form className="d-flex align-items-center">
            <input
              type="search"
              placeholder="جستجو"
              className="me-2"
              aria-label="Search"
              ref={serchbox}
              value={massage}
            />
            <div className="btn btn-primary" onClick={handlersub}>
              {" "}
              <SlMagnifier />
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponNavbar;
