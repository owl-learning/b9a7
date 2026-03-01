

const Cooking = ({ cookData }) => {
    const { recipe_name ,calories,preparing_time} = cookData;
    return (
        <>
            <div className="grid grid-cols-4 gap-x-8  justify-around text-center items-center bg-amber-100 mt-2.5 mb-2.5  
             font-semibold text-black">
                <h1>{recipe_name}</h1>
                <h1>{calories}</h1>
                <h1>{preparing_time}</h1>
        </div>
      </>
    );
};

export default Cooking;