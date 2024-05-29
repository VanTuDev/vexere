import React from "react";

export default function SeatSelect() {
  return (
    <svg width="40" height="32" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="17.5" y="5.5" width="45" height="53" rx="4.5" fill="#8BE5B0" stroke="rgb(39, 174, 96)" strokeWidth="3" strokeLinejoin="round"></rect>
      <rect x="20.5" y="23.5" width="29" height="11" rx="4.5" transform="rotate(90 20.5 23.5)" fill="#8BE5B0" stroke="rgb(39, 174, 96)" strokeWidth="3" strokeLinejoin="round"></rect>
      <rect x="70.5" y="23.5" width="29" height="11" rx="4.5" transform="rotate(90 70.5 23.5)" fill="#8BE5B0" stroke="rgb(39, 174, 96)" strokeWidth="3" strokeLinejoin="round"></rect>
      <rect x="17.5" y="45.5" width="45" height="13" rx="4.5" fill="#8BE5B0" stroke="rgb(39, 174, 96)" strokeWidth="3" strokeLinejoin="round"></rect>
      <path className="icon-selected" d="M40 12.666A13.34 13.34 0 0 0 26.668 26 13.34 13.34 0 0 0 40 39.334 13.34 13.34 0 0 0 53.334 26 13.338 13.338 0 0 0 40 12.666zm-2.666 20L30.666 26l1.88-1.88 4.788 4.774 10.12-10.12 1.88 1.892-12 12z" fill="#27AE60"></path>
    </svg>
  );
}