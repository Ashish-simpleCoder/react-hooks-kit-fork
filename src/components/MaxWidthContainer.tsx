import { ReactNode } from "react";

interface Props {
   children: ReactNode;
   className?: string;
}

export const MaxWidthContainer = ({ children, className }: Props) => {
   return <div className={`max-w-7xl m-auto ${className}`}>{children}</div>;
};
