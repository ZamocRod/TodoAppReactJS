import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = [];
        } else {
          parsedItems = JSON.parse(localStorageItems);
          setItem(parsedItems);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 2000);
  }, []);
  const saveItems = (newItems) => {
    setItem(newItems);
    localStorage.setItem(itemName, JSON.stringify(newItems));
  };
  return { item, saveItems, loading, error };
}

export { useLocalStorage };

/*const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Terminar curso de React", completed: false },
  { text: "Comenzar la cosa del coso", completed: false },
  { text: "Si", completed: true },
];*/