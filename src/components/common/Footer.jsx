import React, { useContext } from 'react'
import { ThemeContext } from "../../global/Contexts";
const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <footer
      className="navbar navbar-expand-lg bg-body-tertiary border-top"
      data-bs-theme={theme}
    >
      <div className="d-flex w-100 px-3 flex-wrap justify-content-between align-items-center">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        Sarth's Stor
      </a>
      </div>
      <div className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</div>
    
  </div>
    </footer>
  )
}

export default Footer
