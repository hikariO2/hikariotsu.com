import React from "react";
import { buildClassNames } from "../../helpers";
import "./Icon.css";


const ArrowLeft = ({ ...props }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.59 12.09L13 15.67V1.5h-2v14.17l-3.59-3.59L6 13.5l6 6 6-6-1.41-1.41zM18 20.5H6v2h12v-2z"
      fill="#000000"
    />
  </svg>
);

const ExternalLink = ({ ...props }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
      fill="#000000"
    />
  </svg>
);

export { ArrowLeft, ExternalLink };
