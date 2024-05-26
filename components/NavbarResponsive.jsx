import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavbarResponsive.module.css'
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SlMagnifier } from "react-icons/sl";
import { useRef, useState } from 'react';
import Router, { useRouter } from 'next/router';
function NavbarResponsive() {
  const [massage, setmassage] = useState(null)
   const router = useRouter()
  const serchbox = useRef()
  const handlersub = ()=>{
    router.push(`/Searchbox/${serchbox.current.value}`)
    // setmassage("")
  }
  return (
    <>
      <Navbar sticky="top" className={styles.navbar} bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: '100px' }}>
            <Link href="/Products" className={`${styles.navItem} nav-item mx-2`}>محصولات</Link>
            <Link href="/ShoppingBuy" className={`${styles.navItem} nav-item mx-2`}>سبدخرید</Link>
            <Link href="/SignUp" className={`${styles.navItem} nav-item mx-2`}>ثبت نام</Link>
            <Link href="/Login" className={`${styles.navItem} nav-item mx-2`}> ورود</Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="جستجو"
              className="me-2"
              aria-label="Search"
              ref={serchbox}
              value={massage}
            />
           <div className='btn btn-primary' onClick={handlersub}> <SlMagnifier/></div>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarResponsive;