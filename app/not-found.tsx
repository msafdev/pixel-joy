import Image from "next/image";
import Link from "next/link";

// Assets
import Avatar from "@/public/assets/avatar/avatar-3.png";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-88px)] items-center justify-center pad-x">
      <div className="flex items-center justify-center relative">
        <div className="absolute w-36 h-36 bg-primary -translate-y-10 -z-10 rounded-full blur-lg" />
        <Image
          src={Avatar}
          alt="Avatar"
          className="w-full h-auto max-w-[200px] aspect-square"
          priority
        />
      </div>
      <h1 className="font-semibold text-xl md:text-3xl text-center">
        Oops! Page not found
      </h1>
      <p className="text-center font-medium text-foreground/60 pt-2 pb-5">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        aria-label="Try again"
        className="bg-foreground hover:bg-foreground/80 anim text-background border-2 shadow-sm px-3 py-2"
      >
        Try again
      </Link>
    </div>
  );
}
