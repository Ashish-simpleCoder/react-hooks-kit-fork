import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const UseLocalStorageDemo = () => {
   const initialData = 0;

   const { storedValue, getData, setData } = useLocalStorage(
      "counter",
      initialData
   );

   useEffect(() => {
      getData();
   }, [storedValue]);

   const handleUpdate = () => {
      const updatedValue = storedValue + 1;
      setData(updatedValue);
   };

   return (
      <div>
         <h2>LocalStorage custom hook</h2>
         <p>{storedValue}</p>
         <button onClick={() => handleUpdate()}>Increment</button>
         <button>Decrement</button>
      </div>
   );
};
