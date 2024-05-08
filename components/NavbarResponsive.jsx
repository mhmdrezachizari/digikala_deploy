import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavbarResponsive.module.css'
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SlMagnifier } from "react-icons/sl";
import { useRef } from 'react';
function NavbarResponsive() {
  const serchbox = useRef()
  const handlersub = ()=>{
    console.log(serchbox.current.value)
  }
  return (
    <>
      <Navbar sticky="top" className={styles.navbar} bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: '100px' }}>
          <Link href="/" className={`${styles.navItem} nav-item `}>دیجی</Link>
            <Link href="/Products" className={`${styles.navItem} nav-item mx-2`}>محصولات</Link>
            <Link href="/ShoppingBuy" className={`${styles.navItem} nav-item mx-2`}>سبدخرید</Link>
            <Link href="/SignUp" className={`${styles.navItem} nav-item mx-2`}>ثبت نام</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="جستجو"
              className="me-2"
              aria-label="Search"
              ref={serchbox}
            />
            <Link href={'/'} onClick={handlersub} type='submit' variant="outline-success"><SlMagnifier/></Link>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarResponsive;