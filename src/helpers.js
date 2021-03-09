import React from "react";

export const buildClassNames = (...classes) => {
  return [...classes].join(" ");
};
