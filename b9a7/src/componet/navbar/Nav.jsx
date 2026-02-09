import { FaRegUserCircle } from "react-icons/fa";
import{ IoSearchOutline} from "react-icons/io5"
const Nav = () => {
  return (
    <>
      <div className="w-11/12 mx-auto py-4">
        <nav className="flex justify-between items-center">
          <div className="text-4xl">Recipe Calories</div>
          <div className="">
            <ul className="flex ">
              <li className="mx-3 font-bold">Home</li>
              <li className="mx-3 font-bold">Recipes</li>
              <li className="mx-3 font-bold">About</li>
              <li className="mx-3 font-bold">Location</li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="flex
            items-center outline-1 rounded-2xl px-2 py-1">
              <IoSearchOutline className="text-2xl"></IoSearchOutline>
              <input className="outline-0" type="text" placeholder="Search" />
            </div>
            <FaRegUserCircle className="text-3xl ml-3"></FaRegUserCircle>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
