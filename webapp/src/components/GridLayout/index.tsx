import { PropsWithChildren } from "react";

export interface GridLayoutProps extends PropsWithChildren {
  className?: string;
}

const GridLayout = ({ className = "", children }: GridLayoutProps) => {
  return (
    <div className={`grid grid-cols-12 gap-4 ${className}`}>{children}</div>
  );
};

export default GridLayout;
