import React from "react";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import Link from "next/link";

import documentationLogo from "../assets/images/doc.png";
import contactLogo from "../assets/images/contact.png";
import issueLogo from "../assets/images/issue.png";

const ContactContainer = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.title}>Contact Us</div>

      <div className={styles.helpItem}>
        <article className="contactCard">
          <Image
            src={documentationLogo}
            alt="Docs logo"
            width={50}
            height={50}
            className={styles.logo}
          />
          <h1 className={styles.helpTitle}>Documentation</h1>
          <p className={styles.helpText}>Need help with with api?</p>
          <Link href="./documentation" className={styles.gotoBtn} passHref>
            Explore <span className={styles.arrow}>&#8594;</span>
          </Link>
        </article>
        <article className="contactCard">
          <Image
            src={contactLogo}
            alt="Contact Logo"
            width={50}
            height={50}
            className={styles.logo}
          />
          <h1 className={styles.helpTitle}>Mail us</h1>
          <p className={styles.helpText}>
            Request a feature or Wanted to tell us your exprience.
          </p>
          <Link href="./help/contact" className={styles.gotoBtn} passHref>
            Explore <span className={styles.arrow}>&#8594;</span>
          </Link>
        </article>
        <article className="contactCard">
          <Image
            src={issueLogo}
            alt="Issue Logo"
            width={50}
            height={50}
            className={styles.logo}
          />
          <h1 className={styles.helpTitle}>Report a bug</h1>
          <p className={styles.helpText}>Found any error</p>
          <Link
            href="https://github.com/losier/bhagavadgitaapi/issues/new"
            className={styles.gotoBtn}
            passHref
          >
            Explore <span className={styles.arrow}>&#8594;</span>
          </Link>
        </article>
      </div>
    </div>
  );
};

export default ContactContainer;
