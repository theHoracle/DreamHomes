import Form from "../forms/NoteForm"
import Image from "next/image"
import Link from "next/link"
import styles from './footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <h3 className={styles.menuTitle}>Sitemap</h3>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <Link href="/" className={styles.menuLink}>
              Home
              </Link>
              </li>
          <li className={styles.menuItem}>
            <Link href="#" className={styles.menuLink}>
              About
              </Link>
            </li>
          <li className={styles.menuItem}>
            <Link href="#" className={styles.menuLink}>
              Pricing
              </Link>
            </li>
          <li className={styles.menuItem}>
            <Link href="#" className={styles.menuLink}>
              Sign up
              </Link>
            </li>
        </ul>
      </div>
      
      <div className={styles.menu}>
        <h3 className={styles.menuTitle}>Support</h3>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <Link href="/faq" className={styles.menuLink}>
              FAQs</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#" className={styles.menuLink}>
              Request Assistance
              </Link>
         </li>
        </ul>
      </div>

      <div className={styles.menu}>
        <h3 className={styles.menuTitle}>Contact-Us</h3>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <Link href="facebook.com" className={styles.menuLink}>
              Facebook
              </Link>
            </li>
          <li className={styles.menuItem}>
            <Link href="twitter.com" className={styles.menuLink}>
              Twitter
              </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="linkedIn.com" className={styles.menuLink}>
              LinkedIn
              </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="instagram.com" className={styles.menuLink}>
              Instagram
              </Link>
          </li>
        </ul>
      </div>

      <div className={styles.menu}>
        <h3 className={styles.menuTitle}>Send us a Note</h3>
        <Form />
      </div>
    </footer>
    <div className={styles.copyright}>
        <Image height={100} width={303} src="/images/delta-logo-accent.png" alt="delta-trade" />
        <p className={styles.copyrightText}>
          Copyright C 2023. All Rights Reserved
        </p>
      </div>
    </>
  )
}