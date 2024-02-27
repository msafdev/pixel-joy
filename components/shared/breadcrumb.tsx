"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter((segment) => segment.trim() !== "");

  return (
    <div className="flex items-center">
      <code className="mr-3 font-semibold">{">"}</code>
      {segments.map((segment, index) => (
        <div className="flex items-center" key={index}>
          <Link
            href={`/${segment}`}
            className="font-medium text-foreground/60 hover:underline underline-offset-4"
          >
            {segment}
          </Link>
          {index !== segments.length - 1 && (
            <code className="mx-3 font-semibold">/</code>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
