import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["valorant", "Dargon Ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* <ol> */}
      {categories.map(
        (category) => (
          // {
          /*
        return (
          <div key={category}>
            <h3>{category}</h3>
            <li>{category}</li>
          </div>
        );
        */
          // return
          <GifGrid key={category} category={category} />
        )
        // ;
        // }
      )}
      {/* </ol> */}
    </>
  );
};
