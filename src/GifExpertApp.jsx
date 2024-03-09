import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["OnePonch", "Dargon Ball"]);

  const onAddCategory = ( newCategory ) => {
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ value => onAddCategory(value)}
      />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
