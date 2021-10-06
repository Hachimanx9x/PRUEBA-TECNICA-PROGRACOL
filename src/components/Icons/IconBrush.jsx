import * as React from "react";

function IconBrush(props) {
  return (
    <svg {...props} viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M-2-3h24v24H-2z" />
        <path
          d="M5 11c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37L17.37.29a.996.996 0 00-1.41 0L7 9.25 9.75 12l8.96-8.96a.996.996 0 000-1.41z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default IconBrush;
