import Image from "next/image";

const PersonCard = ({ person, index }: { person: any; index: number }) => {
  return (
    <div
      key={index}
      className="grid grid-cols-2 md:grid-cols-3 w-full gap-4 group cursor-pointer"
    >
      {/* Image */}
      <div className="w-full h-auto col-span-2 md:col-span-1 relative flex items-center justify-center">
        <div
          className={`w-0 h-0 rounded-full absolute group-hover:w-14 group-hover:h-14 xs:group-hover:w-20 xs:group-hover:h-20 md:group-hover:w-14 md:group-hover:h-14 lg:group-hover:w-12 lg:group-hover:h-12 blur anim ${
            index === 0
              ? "bg-red-500"
              : index === 1
              ? "bg-blue-500"
              : index === 2
              ? "bg-green-500"
              : "bg-yellow-500"
          }`}
        />
        <Image
          src={person.node.avatar.url}
          alt={person.node.name}
          className={`w-full aspect-square object-cover scale-75 lg:scale-100 xl:scale-75 group-hover:scale-[60%] md:group-hover:scale-[85%] lg:group-hover:scale-110 xl:group-hover:scale-[85%] anim ${
            index % 2 === 0
              ? "group-hover:-rotate-6 md:group-hover:rotate-12"
              : "group-hover:rotate-6 md:group-hover:-rotate-12"
          }`}
          width={150}
          height={150}
          sizes="100%"
          priority
        />
      </div>

      {/* Details */}
      <div className="col-span-2 flex flex-col justify-center gap-y-1">
        <h2 className="text-xl md:text-xl font-medium">{person.node.name}</h2>
        <p className="text-sm md:text-base text-gray-500">{person.node.role}</p>
      </div>
    </div>
  );
};
export default PersonCard;
