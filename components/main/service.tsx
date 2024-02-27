interface ServiceProps {
  number?: string;
  title?: string;
  text?: string;
}

const Service: React.FC<ServiceProps> = ({
  number = "01",
  title = "Service Title",
  text = "Service Description",
}) => {
  return (
    <div className="flex flex-col sm:flex-row w-full pad-x gap-x-4 gap-y-4 py-4 md:py-8 group hover:text-background hover:bg-foreground anim cursor-pointer">
      <div className="flex xs:flex-row flex-col gap-x-4">
        <code className="text-sm md:text-base lg:text-lg">({number})</code>
        <h2 className="text-2xl lg:text-5xl 2xl:text-6xl font-medium">
          {title}
        </h2>
      </div>
      <div className="flex flex-col ml-auto justify-end">
        <p className="text-end text-xs md:text-sm">Learn more</p>
        <h3 className="font-medium text-end text-sm md:text-xl">{text}</h3>
      </div>
    </div>
  );
};

export default Service;
