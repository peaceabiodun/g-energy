const HomePage = () => {
  return (
    <div className="landing_bg w-full h-screen p-10 flex flex-col justify-center">
      <div className="p-6 bg-[#3b3b3b67] space-y-5 max-w-[514px] rounded-xl">
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

      <div className="w-full grid grid-cols-3 gap-6 mt-20">
        <div className="p-6 border bg-[#3b3b3b67] rounded-xl ">
            <h2 className="text-lg font-semibold text-white mb-4">Solar</h2>
            <p className="text-[#eef7ed] text-sm">Solar energy is all we need. It is good safe and it is renewable</p>
        </div>
        <div className="p-6 border bg-[#3b3b3b67] rounded-xl ">
            <h2 className="text-lg font-semibold text-white mb-4">Solar</h2>
            <p className="text-[#eef7ed] text-sm"> Solar energy is all we need. It is good safe and it is renewable</p>
        </div>
        <div className="p-6 border bg-[#3b3b3b67] rounded-xl ">
            <h2 className="text-lg font-semibold text-white mb-4">Solar</h2>
            <p className="text-[#eef7ed] text-sm">Solar energy is all we need. It is good safe and it is renewable</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
