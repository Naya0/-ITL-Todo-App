import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem("tasks");
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (err) {
      console.error("Ошибка чтения LocalStorage: ", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Ошибка записи LocalStorage: ", err);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
