const HomePage = () => {
  return (
    <div className="">
      <div className="landing_bg w-full h-screen p-10 flex flex-col justify-center">
        <div className="p-6 bg-[#3b3b3b67] space-y-5 max-w-[514px] rounded-xl">
          <h1 className="text-white font-bold text-3xl">
            Gabskony Renewable Energy
          </h1>
          <p className="text-[#eef7ed] text-lg">
            {" "}
            Gobal integrated energy company
          </p>
          <button className="bg-[#17f3e8] hover:bg-[#32c7bf] rounded-3xl p-2 w-[160px] h-[40px] text-sm font-semibold">
            Explore
          </button>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          <div className="p-6 border bg-[#3b3b3b67] rounded-xl hover:bg-[#75737367] cursor-pointer">
            <h2 className="text-lg font-semibold text-white mb-4">Solar</h2>
            <p className="text-[#eef7ed] text-sm">
              Solar energy is all we need. It is good safe and it is renewable
            </p>
          </div>
          <div className="p-6 border bg-[#3b3b3b67] rounded-xl hover:bg-[#75737367] cursor-pointer">
            <h2 className="text-lg font-semibold text-white mb-4">Solar</h2>
            <p className="text-[#eef7ed] text-sm">
              {" "}
              Solar energy is all we need. It is good safe and it is renewable
            </p>
          </div>
          <div className="p-6 border bg-[#3b3b3b67] rounded-xl hover:bg-[#75737367] cursor-pointer">
            <h2 className="text-lg font-semibold text-white mb-4">Solar</h2>
            <p className="text-[#eef7ed] text-sm">
              Solar energy is all we need. It is good safe and it is renewable
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#91f5f5bd] p-10">
        <h2 className="text-2xl font-semibold mb-5">About us</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
