

const Cooking = ({ cookData }) => {
    const { recipe_name } = cookData;
    return (
        <>
            <div className="">
                
                <h1 className="text-black">{recipe_name}</h1>
                
        </div>
        </>
    );
};

export default Cooking;