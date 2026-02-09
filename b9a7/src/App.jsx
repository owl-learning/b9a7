import "./App.css";
import Hero from "./componet/Hero/Hero";
import Nav from "./componet/navbar/Nav";
import Recipes from "./componet/recipes/Recipes";

function App() {
  return (
    <>
      <div className="">
        <Nav></Nav>
        <Hero></Hero>
        {/* Recipe */}
        <div className="w-11/12 mx-auto">
          <Recipes></Recipes>
        </div>
      </div>
    </>
  );
}

export default App;
