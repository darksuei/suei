import Link from "next/link";
import React, { useState } from "react";

const Instagram = (props: { size?: string }) => {
  const [active, setActive] = useState(false);
  return (
    <Link target='_blank' href='https://instagram.com/darksuei'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={props.size || "20"}
        height={props.size || "20"}
        viewBox='0 0 24 24'
        fill='none'
        stroke={active ? "#0579C3" : "#8892b0"}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='social-icon'
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
        <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
      </svg>
    </Link>
  );
};

export default Instagram;
