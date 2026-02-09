const Hero = () => {
  return (
    <>
      <div class="bg-[url('../../../public/cov.jpg')] h-150 w-11/12 mx-auto bg-cover bg-center rounded-4xl">
        <h1 className="text-6xl flex justify-around font-bold pt-40 text-white text-center">
          Discover an exceptional cooking <br></br> class tailored for you!
        </h1>
        <p className="text-center text-2xl px-6">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex items-center mt-6 justify-center">
          <button className="font-extrabold text-xl btn-circle bg-green-500 text-black py-4 px-6 mr-6">
            Explore Now
          </button>
          <button className="font-bold text-xl btn-circle outline-1 text-white py-4 px-6 ml-6">
            Our Feedback
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
