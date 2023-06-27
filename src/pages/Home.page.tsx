import { BsArrowRight } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../components/Card";
import { MaxWidthContainer } from "../components/MaxWidthContainer";
import { customHookData } from "../data/customHookData";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="h-full px-8">
        <div className="py-24">
          <p className="text-5xl font-extrabold text-center">react-hooks-kit</p>
          <p className="text-center py-5 text-xl text-gray-500">
            The react-hooks-kit is a collection of reusable custom hooks for
            your daily projects.
          </p>
          <div className="w-full flex items-center justify-center gap-5">
            <button
              className="bg-sky-500 text-white py-2 px-5 rounded-md"
              onClick={() => navigate("/react-hooks")}
            >
              Get Started
            </button>
            <a
              className="border py-2 px-5 rounded-md border-gray-300"
              href="https://github.com/rajpatelbot/react-hooks-kit"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </section>

      <section className="h-full bg-gray-100 px-8">
        <MaxWidthContainer className={`p-10 rounded-xl`}>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {customHookData.map((data) => (
              <Card key={uuidv4()}>
                <p className="font-bold text-sky-500">{data.name}</p>
                <p className="text-gray-500 pt-3">{data.description}</p>
                <div className="flex justify-end mt-3">
                  <BsArrowRight className="text-2xl text-sky-500" />
                </div>
              </Card>
            ))}
          </div>
        </MaxWidthContainer>
      </section>
    </>
  );
};
