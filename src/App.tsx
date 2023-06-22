import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const url = "http://192.168.1.11:8004/admin/category?page=1&limit=10";
  const headers = {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2ODc0MzgwOTQsImV4cCI6MTY4ODA0Mjg5NH0.kJbZit6GGZj3-_15XjSAxTImdCc3WDta2SdQhH1kCno",
    "Content-Type": "application/json",
  };

  const { data, error, isLoading } = useFetch(url, headers);

  console.log("error", error);

  console.log(isLoading ? "Loading..." : data);

  return (
    <>
      <div>
        <h1>React Custom Hook</h1>
      </div>
    </>
  );
}

export default App;
