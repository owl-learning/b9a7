

const Cook = ({ cookData,removeCook }) => {
    const { recipe_name ,calories,preparing_time,recipe_id} = cookData;
    return (
        <>
            <div className="grid grid-cols-4 gap-x-8  justify-around text-center items-center bg-amber-100 mt-2.5 mb-2.5  
             font-semibold text-black p-2 rounded-2xl">
                <h1>{recipe_name}</h1>
                <h1>{calories}</h1>
                <h1>{preparing_time}</h1>
                <button onClick={()=>removeCook(recipe_id)} className="py-1.5 text-xl bg-green-500 rounded-full text-black font-bold " >Preparing</button>
        </div>
      </>
    );
};

export default Cook;