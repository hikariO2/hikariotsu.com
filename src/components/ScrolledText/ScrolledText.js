import React from "react"
import "./ScrolledText.css"

export const ScrolledText = () => {
  return (
    <div className="scroll-outer">
      <div className="scroll-track">
        <span className="t--alpha scroll-text">See ya!</span>
        <span className="t--alpha-jp scroll-text">バイバイ👋</span>
        <span className="t--alpha scroll-text">Tshusss</span>
        <span className="t--alpha scroll-text">Bye~👋</span>
        <span className="t--alpha-jp scroll-text">さようなら。</span>
        <span className="t--alpha scroll-text">Auf wiedersehen!</span>
        <span className="t--alpha scroll-text">Adios.</span>
        <span className="t--alpha-jp scroll-text">ほなまた👋</span>
      </div>
    </div>
  );
};
