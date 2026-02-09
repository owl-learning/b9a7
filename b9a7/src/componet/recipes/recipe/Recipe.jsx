const recipe = ({ fdData }) => {
  const { recipe_image } = fdData;
  console.log(fdData);
  return (
    <>
      <div className="flex gap-5">
        <div className="">
          <img src={recipe_image} alt="" />
        </div>
        <div className="">
          <img src={recipe_image} alt="" />
        </div>
      </div>
    </>
  );
};

export default recipe;
