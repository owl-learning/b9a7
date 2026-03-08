


const Cooking = ({ cookData }) => {
    
    const { recipe_name, calories, preparing_time } = cookData;
    // const [finalcal, setcal] = useState(0);
    // const cla =parseInt(calories);
    // setcal(finalcal + cal);
    return (
        <div className="text-black grid grid-cols-3 text-l text-center items-center bg-amber-200 m-2 p-2 font-bold">
            <h1 className="">{recipe_name}</h1>
            <h1 className="">{calories}</h1>
            <h1 className="">{preparing_time}</h1>
            
        </div>
    );
};

export default Cooking;