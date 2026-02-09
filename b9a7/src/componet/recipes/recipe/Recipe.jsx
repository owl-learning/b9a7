const Recipe = ({ fdData }) => {
  const { recipe_image,recipe_name, } = fdData;
  console.log(fdData)
  return (
    <>
      <div className="flex gap-5">
        <div className="">
          <img className="w-full " src={recipe_image} alt="" />
          <h1>{ recipe_name}</h1>
        </div>
      </div>
    </>
  );
};

export default Recipe;
