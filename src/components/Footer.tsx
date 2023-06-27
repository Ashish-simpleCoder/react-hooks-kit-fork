import { FaGithub } from "react-icons/fa";
import { MaxWidthContainer } from "./MaxWidthContainer";

export const Footer = () => {
   return (
      <footer className="py-7 bg-white px-8">
         <MaxWidthContainer className="flex justify-between items-center">
            <p className="text-sm">Maintaining by Raj Patel</p>
            <div>
               <p className="font-bold text-center text-sm">
                  Open Source Focused
               </p>
            </div>
            <a
               href="https://github.com/rajpatelbot/react-hooks-kit"
               target="_blank">
               <FaGithub className="text-2xl" />
            </a>
         </MaxWidthContainer>
      </footer>
   );
};
