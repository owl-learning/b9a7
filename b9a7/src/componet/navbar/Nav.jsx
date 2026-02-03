import { FaRegUserCircle } from "react-icons/fa";
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
          <div className="flex">
            <input
              className="outline-1 outline-amber-50 rounded-2xl px-3"
              type="text"
              placeholder="Search"
            />
            <FaRegUserCircle className="text-3xl ml-3"></FaRegUserCircle>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
