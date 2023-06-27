import { useCallback, useState } from "react";
import { UseLocalStorageRes, Value } from "./interface";

export const useLocalStorage = <TData = Value,>(
   key: string,
   initialValue: TData
): UseLocalStorageRes<TData> => {
   const getData = useCallback((): TData => {
      try {
         const items = localStorage.getItem(key);
         return items ? (JSON.parse(items) as TData) : initialValue;
      } catch (error) {
         console.warn(`Error while reading localStorage key "${key}"`, error);
         return initialValue;
      }
   }, [key, initialValue]);

   const [storedValue, setStoredValue] = useState<TData>(getData);

   const setData = () => {
      try {
         localStorage.setItem(key, JSON.stringify(initialValue));
         setStoredValue(initialValue);
      } catch (error) {
         console.warn(`Error while setting localStorage key "${key}"`, error);
      }
   };

   return { storedValue, setData, getData };
};
