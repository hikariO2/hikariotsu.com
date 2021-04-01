import React from "react"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer grid">
        <div className="footer-sns">
          <a href="https://dribbble.com/hikariotsu" target="_blank" rel="dribbble" className="footer-sns_item t--epsilon">Dribbble</a>
          <a href="https://www.behance.net/pikaotsu5574" target="_blank" rel="behence"  className="footer-sns_item t--epsilon">Behence</a>
          <a href="https://twitter.com/_hikariO2" target="_blank" rel="twitter"  className="footer-sns_item t--epsilon">Twitter</a>
          <a href="https://www.instagram.com/_hikario2/" target="_blank" rel="instagram"  className="footer-sns_item t--epsilon">Instagram</a>
        </div>
        <div className="footer-copyright">
        © {new Date().getFullYear()}, Built with{` `}<a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
    </footer>    
  );
};
