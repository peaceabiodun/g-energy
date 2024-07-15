import Image from "next/image";
import { MdArrowBackIosNew, MdClose, MdOutlineArrowForwardIos } from "react-icons/md";
import { TfiArrowsCorner } from "react-icons/tfi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

export default function Home() {
  return (
    // <div className="landing_bg w-full h-full">
    //   welcome
    // </div>
    <div className="w-screen h-screen flex justify-center items-center p-5 lg:p-10 ">
      <div className="w-full h-full md:w-[760px] md:h-[700px] border border-gray-300 rounded-xl py-8 px-7 md:px-28 flex flex-col justify-between items-center">
        <p className="text-sm font-semibold text-center">Friday</p>
        <div>
          <h1 className="font-medium text-xl md:text-3xl text-center">
            How can we make things better ?
          </h1>
          <div className="flex flex-col md:flex-row gap-7 items-center my-8">
            <div className="w-[270px] xs:w-[300px] h-[200px] rounded-3xl bg_1 shadow-md p-4 xs:p-7 flex flex-col items-center">
              <Image
                alt="male"
                src={"/img2.jpg"}
                width={40}
                height={40}
                className="rounded-full object-cover w-10 h-10"
              />
              <p className="text-xs text-gray-400 my-5">Andy</p>
              <p className="text-sm text-center">
                Has anyone tried mario for virtual meetings ? I think it will be
                a better option than mural.
              </p>
            </div>
            <div className="w-[270px] xs:w-[300px] h-[200px] rounded-3xl bg_2 shadow-md p-4 xs:p-7 flex flex-col items-center">
              <Image
                alt="male"
                src={"/img1.jpg"}
                width={40}
                height={40}
                className="rounded-full object-cover w-10 h-10"
              />
              <p className="text-xs text-gray-400 my-5">Mariola</p>
              <p className="text-sm text-center">
                What about a virtual notice board to write down funny things
                people say?😊{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-100">
            <MdArrowBackIosNew size={18} className="text-[#424242]" />
          </div>

          <div className="border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-100">
          <MdOutlineArrowForwardIos size={18}  className="text-[#424242]" />
          </div>

          <div className="border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-100">
          <TfiArrowsCorner size={18}  className="text-[#424242]" />
          </div>

          <div className="border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-100">
          <HiOutlineArrowDownTray size={18}  className="text-[#424242]" />
          </div>

          <div className="border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-100">
          <MdClose size={18}  className="text-[#424242]" />
          </div>
        </div>
      </div>
    </div>
  );
}
