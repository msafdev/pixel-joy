import { ReactNode, FC } from "react";

type SquareButtonProps = {
  children: ReactNode;
  background?: string;
  foreground?: string;
};

const SquareButton: FC<SquareButtonProps> = ({
  children,
  background,
  foreground,
}) => {
  return (
    <div
      className={`w-fit aspect-square p-3 rounded-xl anim ${background} ${foreground}`}
    >
      {children}
    </div>
  );
};
export default SquareButton;
