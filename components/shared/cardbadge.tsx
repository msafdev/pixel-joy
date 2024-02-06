import { FC } from "react";

interface CardBadgeProps {
  text?: string;
  className?: string;
}

const CardBadge: FC<CardBadgeProps> = ({ text = "Badge", className = "" }) => {
  return (
    <div className={`bg-background text-foreground px-4 py-1 font-semibold uppercase w-fit text-sm ${className}`}>
      {text}
    </div>
  );
};

export default CardBadge;
