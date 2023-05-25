import { useEffect } from "react";

// 1 монтирование компонента
// 2 обновление компонента
// 3 размонтирование компонента

// 1 монтирование компонента
// срабатыввает при загрузке компонента
useEffect(() => {
  console.log("mount");
}, []);

// 2 обновление компонента
// срабатыввает при загрузке компонента
// срабатыввает при обновлении зависимостей
useEffect(() => {
  console.log("mount");
}, [data]);

// 3 размонтирование компонента
// срабатыввает при размонтировании компонента
useEffect(() => {
  return () => {
    console.log("unmount");
    setError(null);
    setError("");
  };
}, [data]);