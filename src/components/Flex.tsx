import { IFlex } from "../types/interfaces/components";

const Flex = ({
  children,
  direction,
  gap,
  justify,
  align,
  width,
  style,
}: IFlex) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap: `${gap}px`,
        justifyContent: justify,
        alignItems: align,
        width: `${width}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
