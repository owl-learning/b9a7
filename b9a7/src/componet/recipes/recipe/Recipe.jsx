import { CiClock2 } from "react-icons/ci";
import { FaGripfire } from "react-icons/fa";
const Recipe = ({ fdData }) => {
  const {
    recipe_image,
    recipe_name,
    ingredients,
    short_description,
    calories,
    preparing_time,
  } = fdData;

  return (
    <>
      <div className="bg-gray-50 rounded-xl text-black p-5">
        <div className="">
          <img className="w-full rounded-3xl  " src={recipe_image} alt="" />
          <h1 className="text-2xl font-bold mt-3">{recipe_name}</h1>
          <p>{short_description}</p>
          <hr />
          <h1 className="text-xl font-bold mt-2 ">Ingrediants</h1>
          <div className="ml-5 mb-2">
            {ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="flex items-center text-xl">
              <CiClock2 />
              {calories}
            </p>
            <p className="flex items-center text-xl ">
              <FaGripfire />
              {preparing_time}
            </p>
          </div>
          <button className="btn-active bg-green-400 font-bold px-3 rounded-full mt-4 py-2">Want to Cook</button>
        </div>
      </div>
    </>
  );
};

export default Recipe;
