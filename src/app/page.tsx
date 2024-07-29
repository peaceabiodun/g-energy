const HomePage = () => {
  return (
    <div className="landing_bg w-full h-screen p-10 flex flex-col justify-center">
      <div className="p-6 bg-[#3b3b3b67] space-y-5 w-[500px] rounded-xl">
        <h1 className="text-white font-bold text-3xl">
          Gabskony Renewable Energy
        </h1>
        <p className="text-[#eef7ed] text-lg">
          {" "}
          Gobal integrated energy company
        </p>
        <button className="bg-[#17f3e8] rounded-3xl p-2 w-[160px] h-[40px] text-sm font-semibold">
          Explore
        </button>
      </div>

      <div className="p-6 border w-[80vw] my-10 bg-[#3b3b3b67] rounded-xl flex gap-6">
        <div>
            <h2>Solar</h2>
            <p>Solar energy is all we need. It is good safe and it is renewable</p>
        </div>
        <div>
            <h2>Solar</h2>
            <p>Solar energy is all we need. It is good safe and it is renewable</p>
        </div>
        <div>
            <h2>Solar</h2>
            <p>Solar energy is all we need. It is good safe and it is renewable</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
