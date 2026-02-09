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
        <Recipes></Recipes>
      </div>
    </>
  );
}

export default App;
