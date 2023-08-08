import * as React from "react";
import { FC } from "react";

interface TwitterSVGProps extends React.HTMLAttributes<SVGSVGElement> {}

const TwitterSVG: FC<TwitterSVGProps> = ({}) => (
  <svg xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#f6f1f9"
      d="M32.3 7.287c.023.32.023.64.023.959 0 9.754-7.424 20.992-20.992 20.992A20.85 20.85 0 0 1 0 25.926a15.263 15.263 0 0 0 1.782.091 14.776 14.776 0 0 0 9.16-3.152 7.391 7.391 0 0 1-6.9-5.117 9.3 9.3 0 0 0 1.393.114 7.8 7.8 0 0 0 1.942-.251 7.379 7.379 0 0 1-5.916-7.241v-.091a7.431 7.431 0 0 0 3.339.94 7.389 7.389 0 0 1-2.287-9.872 20.972 20.972 0 0 0 15.213 7.721 8.329 8.329 0 0 1-.183-1.69A7.385 7.385 0 0 1 30.312 2.33 14.526 14.526 0 0 0 34.995.548a7.358 7.358 0 0 1-3.244 4.066A14.791 14.791 0 0 0 36 3.472a15.86 15.86 0 0 1-3.7 3.815Z"
      data-name="Icon awesome-twitter"
    />
  </svg>
);
export default TwitterSVG;
