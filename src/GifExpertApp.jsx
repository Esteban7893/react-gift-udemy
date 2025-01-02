import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["risas"]);

  const onNewCategory = (onNewValue) => {
    if (categories.includes(onNewValue)) return;

    setCategories([onNewValue, ...categories]);
    // setCategories((cat) => [...cat, "Valorant"]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewValue={(value) => {
          onNewCategory(value);
        }}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
