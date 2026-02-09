import { useEffect, useState } from "react";
import Recipe from "./recipe/Recipe";

const Recipes = () => {
  const [fdsData, setfdData] = useState([]);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((json) => setfdData(json));
  }, []);
  console.log(fdsData);

  return (
    <>
      <div className="text-center">
        <h1 className="mt-8 text-5xl font-bold">Our Recipes</h1>
        <p className="mt-8 text-2xl">
          you can get good food good qualaity and fresh ingrideants,so feel free
          to order us .<br></br>we will cook your food and deliver you
        </p>
      </div>

      <div className="grid grid-cols-2 w-7/12 gap-4">
        {fdsData.map((fdData) => (
          <div className="">
            <Recipe fdData={fdData}></Recipe>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recipes;
