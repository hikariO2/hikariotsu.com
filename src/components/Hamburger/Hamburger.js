import React from "react"
import "./Hamburger.css"

export const Hamburger = ({
  isMenuOpen,
  setIsMenuOpen
}) => {
  return (
    <button
      type="button"
      className="hamburger-button hamburger"
      aria-controls="global-nav"
      aria-expanded={isMenuOpen}
      //クリックされると真偽値が逆になる。falseの場合trueに切り替わる
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span className="hamburger-line">
        <span className="hamburger-hidden-text">
          open menu
        </span>
      </span>

    </button>
  );
};
