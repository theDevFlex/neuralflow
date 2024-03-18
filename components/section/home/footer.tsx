import Link from "next/link";

export function Footer() {
  return (
    <div className="flex w-full items-center justify-between bg-secondary p-5">
      <h3>
        A{" "}
        <Link
          className="font-semibold hover:text-blue-500"
          target="_blank"
          href="https://github.com/theDevFlex"
        >
          DevFlex
        </Link>{" "}
        creation.
      </h3>
      <div className="flex flex-col items-end gap-2">
        {/* <Link
          className="font-semibold "
          target="_blank"
          href="https://github.com/theDevFlex"
        >
          Join Waitlist
        </Link> */}
        <Link
          className="font-semibold "
          target="_blank"
          href="https://github.com/theDevFlex"
        >
          Github
        </Link>
        <Link
          className="font-semibold "
          target="_blank"
          href="mailto:sks@devflex.co.in"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
