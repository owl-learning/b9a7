import { useEffect, useState } from "react";
import Recipe from "./recipe/Recipe";
import Cook from "../cooking/Cook";
import Cooking from "../cooking/Cooking";

const Recipes = () => {
  const [fdsData, setfdData] = useState([]);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((json) => setfdData(json));
  }, []);
  const [cooksData, setcookData] = useState([]);
  const [mnCooks, setmnCook] = useState([])
  const mnCook = (cookData) => {
    setmnCook([...mnCooks, cookData])
    console.log(mnCooks)
  }
  const handelCook = (fdData) => {
    setcookData([ fdData, ...cooksData ]);
    console.log(cooksData);
    
  }
  const removeCook = (idToRemove) => {
    // We keep every item EXCEPT the one that matches the id
    const updatedCooks = cooksData.filter((cook) => cook.recipe_id !== idToRemove);
    setcookData(updatedCooks);
    
  };
  // const [cooksData, setcookData] = useState([]);
   
  //   setcookData([...cooksData,cookData]);
  //   console.log(cooksData);
  

  
  
  

  return (
    <>
      <div className="text-center">
        <h1 className="mt-8 text-5xl font-bold">Our Recipes</h1>
        <p className="mt-8 text-2xl">
          you can get good food good qualaity and fresh ingrideants,so feel free
          to order us .<br></br>we will cook your food and deliver you
        </p>
      </div>

      <div className="flex m-2 ">
        <div className="grid grid-cols-2 w-7/12 gap-4">
          {fdsData.map((fdData) => (
            <div className="">
              <Recipe fdData={fdData} handelCook={handelCook}></Recipe>
            </div>
          ))}
        </div>
        <div className="ml-6 p-2 bg-amber-50 w-5/12">
          <div className="">
            <h1 className="text-black text-4xl text-center pt-4 pb-1.5  border-b-2">
              Want To Cook
            </h1>
            <div className="">
              <div className="grid grid-cols-4 gap-x-8 text-center font-bold border-b-2 mb-2 p-2 text-black text-xl">
                <h1>Name</h1>
                <h1 className="">Cacolri</h1>
                <h1>Preparing-Time</h1>
              </div>
            </div>
            {cooksData.map((cookData) => (
              <Cook cookData={cookData} removeCook={removeCook} mnCook={mnCook} ></Cook>
            ))}
          </div>
          <div className="">
            <h1 className="text-black text-4xl text-center pt-4 pb-1.5  border-b-2">
              Currenly Cooking
            </h1>
            <div className="">
              <div className="grid grid-cols-4 gap-x-8 text-center font-bold border-b-2 mb-2 p-2 text-black text-xl">
                <h1>Name</h1>
                <h1 className="">Cacolri</h1>
                <h1>Preparing-Time</h1>
              </div>
            </div>
            {cooksData.map((cookData) => (
              <Cooking cookData={cookData} ></Cooking>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
