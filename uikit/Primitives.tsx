type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <section className="container">{children}</section>;
};

type BoxProps = ContainerProps & {
  gap?: number;
};

export const Row = ({ children, gap }: BoxProps) => {
  return <div className={`flex flex-row gap-${gap}`}>{children}</div>;
};

export const Stack = ({ children, gap }: BoxProps) => {
  return <div className={`flex flex-col gap-${gap}`}>{children}</div>;
};

type size = string | "sm" | "md" | "lg" | "xl";

type GridProps = BoxProps & {
  gap?: number;
  cols?: Record<size, number>;
};

export const Grid = ({ children, gap, cols }: GridProps) => {
  const gapValue = gap && 8;
  let cls = "";
  // construct col sizes
  if (cols) {
    Object.keys(cols).forEach((key: size) => {
      cls += `${key}:grid-cols-${cols[key]} `;
    });
  } else {
    cls = "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3";
  }

  return <div className={`grid gap-${gapValue} ${cls}`}>{children}</div>;
};

export const Divider = () => (
  <section className="container">
    <hr />
  </section>
);
