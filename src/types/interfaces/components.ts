// Saving the interfaces of components folder
export interface IFlex {
  children: JSX.Element[] | JSX.Element;
  direction: "row" | "column" | "column-reverse" | "row-reverse";
  gap: number;
  justify?: string;
  align?: string;
  width?: number;
  style?: React.CSSProperties;
}

export interface ISubTitle {
  title: string;
  textAlign?: CanvasTextAlign | undefined;
}
