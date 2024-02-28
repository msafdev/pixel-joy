import Image from "next/image";

// Libs
import Balancer from "react-wrap-balancer";

// Icons
import { MoveRight } from "lucide-react";

const BlogCard = ({ post }: { post: any }) => {
  return (
    <div className="w-full h-auto aspect-square xs:aspect-[4/3] relative group overflow-hidden cursor-pointer bg-cover hover:bg-[50%]">
      {/* Image */}
      <Image
        src={post.node.thumbnail.url}
        alt={post.node.title}
        sizes="100%"
        className="w-full h-full flex grow group-hover:scale-105 xs:group-hover:scale-110 anim-slower object-cover scale-110 xs:scale-100"
        priority
        fill
      />

      {/* Overlay */}
      <div className="z-[5] px-4 py-1 trans group-hover:translate-x-10 translate-x-0 group-hover:-translate-y-20 translate-y-0 anim-slow font-medium uppercase rounded-full bg-background/80 backdrop-blur text-foreground text-xs md:text-sm absolute top-0 right-0 m-3">
        <code className="mr-1 text-sm">#</code>{post.node.category}
      </div>

      {/* Post Details */}
      <div className="z-[5] w-full absolute bottom-0 p-3 bg-background group-hover:translate-y-full translate-y-0 anim-slower flex flex-col">
        <p className="text-[6vw] md:text-lg xl:text-xl font-medium line-clamp-2">
          <Balancer>{post.node.title}</Balancer>
        </p>

        {/* Avatar */}
        <div className="flex gap-x-2 items-center">
          <Image
            src={post.node.person.avatar.url}
            alt={post.node.person.name}
            width={35}
            height={35}
            className="rounded-full overflow-hidden"
          />
          <MoveRight size={16} className="text-foreground/60 mr-2" />
          <p className="text-foreground/60 font-medium">
            {post.node.person.name}
          </p>
        </div>
      </div>

      {/* Hover Effect */}
      {/* <div className="absolute inset-0 bg-foreground/20 hover:opacity-0 opacity-100 transition-opacity duration-300 z-0" /> */}
    </div>
  );
};
export default BlogCard;
