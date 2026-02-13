import styles from "../layouts/Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
      <h1>Crypto App</h1>
    </header>
    {children}
    <footer className={styles.footer}>
      <p>Developed By MARZIEH.</p>
    </footer>
    
    </>
  )
}

export default Layout