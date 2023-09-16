"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Homepage = () => {
  const [all, setall] = useState(true);
  const [read, setread] = useState(false);

  const handleUnread = () => {
    setall((prevAll) => !prevAll);
  };

  const handleNoti = () => {
    setread((prevAll) => !prevAll);
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100 justify-between">
      <div className="flex flex-col w-full px-8 pt-8">
        <div className="flex justify-between">
          <div className="flex flex-col">
            {/* <h1 className="font-semibold">Hello Ni Hao!</h1> */}
            <h1 className="text-blue-500 font-semibold text-lg">
              Welcome Back!
            </h1>
          </div>

          <div className="flex border-white border-[6px] rounded-full h-[36px] bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="23px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 12H8.01M12 12H12.01M16 12H16.01M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex rounded-lg bg-white text-gray-400 h-8 items-center mt-4">
          <svg
            className="ml-2 mr-2 bg-white bi bi-search"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="16"
            viewBox="0 0 16 16"
            fill="rgb(156 163 175)"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          Search
        </div>

        <div className="flex flex-col w-full px-4 mt-6 justify-center">
          <div className="w-full h-32 bg-white rounded-3xl flex flex-col items-center drop-shadow-xl">
            <h1 className="font-semibold text-[15px] text-center mt-2">SOCSO Identity Document</h1>
          <div className="flex w-full justify-evenly mt-2">
            <Image
                    src="https://png.pngtree.com/png-clipart/20221009/original/pngtree-face-hijab-muslim-template-png-image_8668214.png"
                    width={70}
                    height={60}
                    alt="doc"
                    className="mt-0"
                  />
              <div className="flex flex-col w-2/4 mt-2">
                <h1 className="font-semibold text-[14px]">60701201015238</h1>
                <h1 className="font-semibold text-[14px]">Nurul Binti Aina</h1>
                <h1 className="font-semibold text-[14px]">Maybank Sdn Bhd</h1>
              </div>
          </div>
          </div>

          <div className="flex w-full justify-evenly pt-6">
            <div className="flex flex-col w-24 items-center">
              <span className="bg-white rounded-full w-fit pt-2 pb-2 pl-1 pr-1">
                <Image
                  src="/perkeso.png"
                  width={50}
                  height={50}
                  alt="doc"
                  className="mt-0"
                />
              </span>
              <p>PERKESO</p>
            </div>
            {/* <div className="flex flex-col w-24 items-center">
              <span className="bg-white rounded-full w-fit pt-2 pb-2 pl-2 pr-2">
                <Image
                  src="/epf.png"
                  width={40}
                  height={40}
                  alt="doc"
                  className="mt-0"
                />
              </span>
              <p>EPF</p>
            </div>
            <div className="flex flex-col w-24 items-center">
              <span className="bg-white rounded-full w-fit pt-2 pb-3 pl-3 pr-3">
                <Image
                  src="/bank.png"
                  width={35}
                  height={30}
                  alt="doc"
                  className="mt-0"
                />
              </span>
              <p>BANKS</p>
            </div> */}
          </div>

          <div className="w-full h-12 bg-slate-300 rounded-full grid grid-cols-2 content-center gap-x-4 px-2 mt-6">
            <span
              className={`h-8 flex items-center justify-center rounded-full ${all ? "bg-white" : ""
                }`}
              onClick={handleUnread}
            >
              Unread
            </span>
            <span
              className={`h-8 flex items-center justify-center rounded-full ${all ? "" : "bg-white"
                }`}
              onClick={handleUnread}
            >
              All
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full mt-8">
          <div className="flex w-full justify-between">
            <p className="text-sm">Claim Status:</p>
            <span className="bg-blue-500 text-white rounded-full px-2 text-xs flex items-center">
              See More
            </span>
          </div>

          <div
            className={`flex rounded-2xl shadow-md ${read ? "bg-white" : "bg-slate-200"
              } drop-shadow-md items-center mt-4 pt-2 pb-3 pr-4`}
            onClick={handleNoti}
          >
            {read ? (
              <span className="w-2 h-4 mx-2"></span>
            ) : (
              <span className="w-4 h-4 rounded-full bg-red-500 mx-4 border-2 border-red-300"></span>
            )}
            <div className="flex flex-col">
              <p className="text-base font-semibold">Claims Document</p>
              <p className="text-xs">
                Enclosed in this message contains your....
              </p>
            </div>
          </div>

          <div
            className={`flex rounded-2xl shadow-md bg-white drop-shadow-md items-center mt-4 pt-2 pb-3 pr-4`}
            onClick={handleNoti}
          >
            <span className="w-2 h-4 mx-2"></span>
            <div className="flex flex-col">
              <p className="text-base font-semibold">Hospital Documents</p>
              <p className="text-xs">
                Enclosed in this message contains your....
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end h-20 items-end mb-0">
        <div className="w-full flex px-4 h-[80px] bg-white rounded-t-xl justify-evenly pb-2">
          <div className="flex flex-col w-12 pb-0 justify-center items-center">
            <svg
              width="30"
              height="30"
              fill="#3A81F7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
              />
            </svg>
          </div>
          <Link href={"/wallet"} className="flex flex-col w-12 pb-0 justify-center items-center">
            <svg
              width="30"
              height="30"
              fill="#dfdaeb"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z" />
            </svg>
          </Link>
          <Link href={"/qrcode"} className="rounded-full w-[60px] h-[60px] bg-blue-500 flex justify-center items-center mt-[-24px] border-gray-200 border-[6px]">
            <Image
              src="/qiconr.png"
              width={30}
              height={30}
              alt="doc"
              className="mt-0 bg-blue-500"
            />
          </Link>
          <Link href="/document-1" className="flex flex-col w-12 pt-0 justify-center items-center">
            <svg
              width="30"
              height="30"
              fill="#dfdaeb"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
              <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
            </svg>
          </Link>
          <Link href="/user" className="flex flex-col w-12 pb-0 justify-center items-center">
            <svg
              width="30"
              height="30"
              fill="#dfdaeb"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
