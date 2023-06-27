export type Value = string | boolean | number;

export interface UseLocalStorageRes<TData> {
   storedValue: TData | null;
   setData: () => void;
   getData: () => TData;
}
