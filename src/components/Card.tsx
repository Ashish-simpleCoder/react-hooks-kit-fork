import { ReactNode } from "react";

interface Props {
   children: ReactNode;
}

export const Card = ({ children }: Props) => {
   return (
      <div className="bg-white rounded-lg border border-gray-300 p-4 max-w-xs">
         {children}
      </div>
   );
};
