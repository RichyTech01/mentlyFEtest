

import ProgramImg from "../../assets/Program.svg"
import MemberImg from "../../assets/Member.svg"


const ProgramCard = () => {
  return ( 
    <div className="bg-white ">
            <div className="bg-white rounded-[10px] shadow-md overflow-hidden max-w-xl w-full  p-[13.4px]">
      <div className="relative">
        <img
          src={ProgramImg}
          alt="Group Call"
          className="w-full h-[70px] object-cover rounded-[6.57px] "
        />
        <span className="absolute top-[3px] left-2 text-white text-[16px] pr- font-bold max-w-[204px]">
          Colour Hack Practical Group Call
        </span>
        <span className="bg-[#D4F3D4] absolute bottom-1 left-2 px-[9.85px] py-[1.64px] text-[#008000] text-[6px] rounded-[9.85px] flex items-center  ">
          <span className="h-[4.11px] w-[4.11px] bg-[#008000] rounded-full mr-[3.28px]"></span>
          Group Call 
          </span>
      </div>

      <div className="">
        <p className="text-[10px] text-[#A3A3A3] mt-2 ">
          This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach
        </p>

        <div className="mt-4 flex items-center justify-between">
          {/* Hosted Info */}
          <div className="flex items-center gap-2">
            <img
              src={MemberImg}
              alt="Host"
              className="w-[33.37px] h-[13px] rounded-ful "
            />
            <span className="text-sm text-gray-600">Hosted by: <span className="font-medium text-gray-800">Self</span></span>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="text-sm px-3 py-1 border border-purple-600 text-purple-600 rounded hover:bg-purple-50">
              View Details
            </button>
            <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700">
              Assign Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
   );
}
 
export default ProgramCard;