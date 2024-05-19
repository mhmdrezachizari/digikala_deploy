import React from "react";
import Link from "next/link";
import Styles from "./FooterResponsive.module.css";
const FooterResponsive = () => (
  <footer className={`${Styles.divout} page-footer font-small blue pt-4 bg-dark mt-4`}>
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <hr className="clearfix w-100 d-md-none pb-0" />
        <div className="col-md-6 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li>
              <Link
                href="/SignUp"
                className={`${Styles.navItem} nav-link text-white`}
              >
                ثبت نام
              </Link>
            </li>
            <li>
              <Link
                href="/ShoppingBuy"
                className={`${Styles.navItem} nav-link text-white`}
              >
                سبدخرید
              </Link>
            </li>
            <li>
              <Link
                href="/Products"
                className={`${Styles.navItem} nav-link text-white`}
              >
                محصولات
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-6 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li>
              <Link
                href="/SignUp"
                className={`${Styles.navItem} nav-link text-white`}
              >
                ثبت نام
              </Link>
            </li>
            <li>
              <Link
                href="/ShoppingBuy"
                className={`${Styles.navItem} nav-link text-white`}
              >
                سبدخرید
              </Link>
            </li>
            <li>
              <Link
                href="/Products"
                className={`${Styles.navItem} nav-link text-white`}
              >
                محصولات
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3 text-primary">
      © 2024 made by :
      <Link
        href="/about"
        className={`${Styles.navbarbrand} nav-link navbar-brand text-primary`}
      >
        mhmdrezachizari
      </Link>{" "}
    </div>
  </footer>
);
export default FooterResponsive;
