

const Cooking = ({ cookData }) => {
    
    const { recipe_name } = cookData;
    return (
        <div className="text-black">
            <h1 className="">{ recipe_name}</h1>
        </div>
    );
};

export default Cooking;