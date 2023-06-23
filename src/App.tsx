import "./App.css";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";
// import { useFetch } from "./hooks/useFetch";

// export interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

function App() {
  // const url = "http://jsonplaceholder.typicode.com/posts";

  // const { data, error, isLoading } = useFetch<Post[]>(url);

  const { copiedRes, copyToClipboard } = useCopyToClipboard();

  console.log(copiedRes);

  console.log(typeof copiedRes.value);

  return (
    <>
      <div>
        <h1>React Custom Hook</h1>
        <div style={{ display: "flex" }}>
          {/* <button onClick={() => copyToClipboard({ a: "A" })}>A</button> */}
          <button onClick={() => copyToClipboard("B")}>B</button>
          <button onClick={() => copyToClipboard("C")}>C</button>
        </div>
        <pre>Copied value: {copiedRes.value ?? "Nothing is copied yet!"}</pre>

        {/* {!isLoading
          ? data?.map((list) => <li key={list.id}>{list.title}</li>)
          : "loading..."} */}
      </div>
    </>
  );
}

export default App;
