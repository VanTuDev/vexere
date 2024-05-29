import React from "react";

export default function FirstSeat(props) {
    return (
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8.75" y="2.75" width="22.5" height="26.5" rx="2.25" fill="#FFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect>
            <rect x="10.25" y="11.75" width="14.5" height="5.5" rx="2.25" transform="rotate(90 10.25 11.75)" fill="#FFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect>
            <rect x="35.25" y="11.75" width="14.5" height="5.5" rx="2.25" transform="rotate(90 35.25 11.75)" fill="#FFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect>
            <rect x="8.75" y="22.75" width="22.5" height="6.5" rx="2.25" fill="#FFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect>
            <path class="icon-selected" d="M20 6.333A6.67 6.67 0 0 0 13.334 13 6.67 6.67 0 0 0 20 19.667 6.67 6.67 0 0 0 26.667 13 6.669 6.669 0 0 0 20 6.333zm-1.333 10L15.333 13l.94-.94 2.394 2.387 5.06-5.06.94.946-6 6z" fill="transparent"></path>
            <path class="icon-disabled" d="M24.96 9.46l-1.42-1.42L20 11.59l-3.54-3.55-1.42 1.42L18.59 13l-3.55 3.54 1.42 1.42L20 14.41l3.54 3.55 1.42-1.42L21.41 13l3.55-3.54z" fill="transparent"></path>
        </svg>
    );
}
