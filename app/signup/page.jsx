import Image from "next/image";
import Link from "next/link";
const Signup = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center bg-gray-100 pt-8">
        <div className="text-center">
          <h1 className="font-semibold text-[22px]">
            Getting Started
          </h1>
        </div>

        <div className="flex  w-full justify-center pt-4 items-center">
          <span className="flex flex-col items-center w-12">
            <span className="flex rounded-full w-7 h-7 bg-blue-500 items-center justify-center text-white">1</span>
            <p className="text-blue-500 text-[13px]">Verify</p>
          </span>
          <span className="flex w-24 h-2 bg-gray-300 mb-5 ml-[-10px] mr-[-12px]"></span>
          <span className="flex flex-col items-center w-12">
            <span className=" flex rounded-full w-7 h-7 bg-gray-300 items-center justify-center text-white">2</span>
            <p className="text-gray-400 text-[13px]">Details</p>
          </span>
          <span className="flex w-24 h-2 bg-gray-300 mb-5 ml-[-12px] mr-[-12px]"></span>
          <span className="flex flex-col items-center w-12">
            <span className=" flex rounded-full w-7 h-7 bg-gray-300 items-center justify-center text-white">3</span>
            <p className="text-gray-400 text-[13px]">Identification</p>
          </span>
        </div>

        <div className="text-center mt-12">
          <h1 className="font-semibold text-[24px]">
            Enter Your Mobile Number
          </h1>
          <p className="text-[13px] text-gray-500">
            We will send you a 4-digit verification code
          </p>
        </div>

        <div className="w-full flex flex-col pt-8 px-12">
          <p className="text-gray-500">Mobile Number</p>
          <div className="flex text-[18px] w-full justify-center">
            <span className="bg-gray-300 rounded-l-2xl h-10 w-24 flex items-center justify-center">
              <Image
                src="https://img.icons8.com/color/30/malaysia-circular.png"
                width={30}
                height={30}
                alt="flag"
                className="ml-0"
              />
              &nbsp;+60
            </span>
            <input
              type="tel"
              className="rounded-r-2xl pl-4 bg-gray-100 w-48 rounded-l-none"
              placeholder="11-627 5223"
            />
          </div>
        </div>
        <Link href="/otp-page">
          <button className="mt-16 general-button">Generate OTP</button>
        </Link>
      </div>
    </>
  );
};

export default Signup;
