import { useFetch } from "./useFetch";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Demo() {
  // case 1: without any header object
  const url = "http://jsonplaceholder.typicode.com/posts";
  const { data, error, isLoading } = useFetch<Post[]>(url);

  // case 2: with header object
  //   const headers = {
  //     Autherization: "TOKEN",
  //     Content_Type: "application/json",
  //   };

  //   const url = "http://jsonplaceholder.typicode.com/posts";
  //   const { data, error, isLoading } = useFetch<Post[]>(url, headers);

  if (error) {
    return <p>Something went wrong! The error is: {error.message}</p>;
  }

  return (
    <>
      <div>
        <h2>useFetch custom hook demo</h2>
        {!isLoading
          ? data?.map((list) => <li key={list.id}>{list.title}</li>)
          : "loading..."}
      </div>
    </>
  );
}

export default Demo;
