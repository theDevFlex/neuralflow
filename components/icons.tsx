import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export function NFLogo({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      className={cn("", className)}
      width="28"
      height="31"
      viewBox="0 0 28 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="22.75" y="4.375" width="1.75" height="22.75" fill="black" />
      <circle cx="23.625" cy="4.375" r="4.375" fill="black" />
      <circle cx="23.625" cy="26.25" r="4.375" fill="white" />
      <rect x="3.5" y="4.375" width="1.75" height="22.75" fill="black" />
      <circle cx="4.375" cy="26.25" r="4.375" fill="black" />
      <circle cx="4.375" cy="4.375" r="4.375" fill="white" />
    </svg>
  );
}

export function TensorFlow({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      className={cn("-mb-14 -mt-8 w-24 md:m-0 md:w-52", className)}
      width="150"
      height="150"
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.818 114L35.3667 102.707V36.1148L6.06519 53.0456L6.13644 27.8231L54.818 0V114ZM59.191 0V114L78.6422 102.707V70.6355L93.3286 79.1231L93.2396 57.187L78.6422 48.8508V36.1148L107.935 53.0456L107.864 27.8231L59.191 0Z"
        fill="#FF6F00"
      />
    </svg>
  );
}

export function BonnyIcon({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      className={cn("", className)}
      width="181"
      height="181"
      viewBox="0 0 181 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="90.3141" cy="90.3141" r="90.3141" fill="#0C0A09" />
      <path
        d="M92.0181 73.3857V59.7534H78.3857"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M112.467 73.3857H71.5696C67.8051 73.3857 64.7534 76.4374 64.7534 80.2019V107.467C64.7534 111.231 67.8051 114.283 71.5696 114.283H112.467C116.231 114.283 119.283 111.231 119.283 107.467V80.2019C119.283 76.4374 116.231 73.3857 112.467 73.3857Z"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M57.9373 93.8342H64.7534"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M119.283 93.8342H126.099"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M102.242 90.426V97.2422"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M81.7937 90.426V97.2422"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
