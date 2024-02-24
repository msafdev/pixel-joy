import { ReactNode } from "react";
import CardBadge from "../shared/cardbadge";

interface OfferProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
}

const Offer: React.FC<OfferProps> = ({
  icon = "",
  title = "Title",
  description = "Description",
}) => {
  return (
    <div className="w-full max-w-[400px] lg:max-w-[600px] xl:max-w-none mx-auto h-fit xl:h-auto bg-background/40 rounded-lg flex flex-col xl:anim-slow odd:xl:translate-y-8">
      <div className="flex justify-between items-center">
        <CardBadge text="X" className="translate-y-1 rounded-t-lg" />
        <div className="flex gap-x-2 px-2">
          <div className="w-3 h-3 bg-green-400 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </div>
      <div className="w-full h-full bg-background rounded-b-lg rounded-tr-lg p-1">
        <div className="flex flex-col w-full h-full bg-gray-50 p-6 rounded-lg border-2 group">
          {icon}
          <h1 className="flex flex-col text-2xl xl:text-[1.8vw] text-foreground font-semibold mt-3 xl:mt-4 w-fit xl:w-full anim group cursor-default">
            {title}
            <div className="w-[calc(100%+24px)] xl:w-0 xl:group-hover:w-[calc(100%+48px)] mt-3 mb-4 h-[2px] -translate-x-6 bg-gray-200 anim" />
          </h1>
          <p className="text-base lg:text-lg xl:text-[1.4vw] 2xl:text-[1.3vw] xl:leading-snug text-foreground/80 w-full lg:w-2/3 xl:w-full xl:pl-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
