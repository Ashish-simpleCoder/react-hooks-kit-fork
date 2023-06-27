import { FaGithub, FaReact, FaSun } from "react-icons/fa";
import { MaxWidthContainer } from "./MaxWidthContainer";
import { Link } from "react-router-dom";

export const Navbar = () => {
   return (
      <nav className="bg-white py-7 px-8">
         <MaxWidthContainer>
            <nav className="flex items-center justify-between">
               <div className="flex items-center gap-10">
                  <Link to={"/"} className="flex items-center gap-2">
                     <FaReact className="text-2xl text-sky-500" />
                     <p className="text-base font-bold">react-hooks-kit</p>
                  </Link>
                  <Link
                     to={"/react-hooks"}
                     className="font-medium text-sm text-gray-500">
                     Documentation
                  </Link>
               </div>
               <div className="flex items-center gap-5">
                  <a
                     href="https://github.com/rajpatelbot/react-hooks-kit"
                     target="_blank">
                     <FaGithub className="text-2xl" />
                  </a>
                  <FaSun className="text-2xl" />
               </div>
            </nav>
         </MaxWidthContainer>
      </nav>
   );
};
