import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; //podria usarse un find tambien, para pasar a lowerCase y validar mas correctamente
    setCategories([newCategory, ...categories]);
  };
  // const onAddCategory = () => {setCategories([...categories, 'Valorant'])};
  // const onAddCategory = () => setCategories(cat => [...cat, 'Valorant']);

  return (
    <>
      <h1>gif</h1>
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={(event) => onAddCategory(event)}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
