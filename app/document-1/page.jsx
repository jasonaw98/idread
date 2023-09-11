import Image from "next/image"
import Link from "next/link"
const page = () => {
  return (
    <div className="w-full h-full flex flex-col pt-10">

      <div className="text-center">
        <span className="text-white text-[40px] font-semibold leading-snug">12</span>
        <span className="text-white text-xl font-normal leading-snug">&nbsp;files</span>
      </div>
      <span className="text-white text-sm text-center">Total Documents Received</span>

      <div className="flex w-full mt-6 relative bg- justify-evenly mb-6">
        <div className="flex flex-col bg-white w-[130px] h-[85px] rounded-2xl ml- shadow-2xl">
          <span className="ml-4 mt-4">
            <Image src="/perkeso.png" width={40} height={40} alt="flag" className="ml-0" />
          </span>
          <span className="text-[18px] ml-4 font-semibold">PERKESO</span>
        </div>
        <div className="flex flex-col bg-white w-[130px] h-[85px] rounded-2xl ml- shadow-2xl">
          <span className="ml-4 mt-4">
            <Image src="/file.png" width={30} height={30} alt="flag" className="ml-0" />
          </span>
          <span className="text-[18px] ml-4 mt-1 font-semibold">Banks</span>
        </div>
      </div>

      <div className="w-full h-full flex flex-col bg-gray-100 rounded-3xl justify-between">
        <div className="grid grid-cols-2 w-full justify-evenly h-[50px] text-center px-8 text-whit font-semibold text-lg pt-2">
          <span className="w-full h-full flex items-center justify-center text-blue-500 underline underline-offset-2 decoration-2 rounded-3xl drop-shadow-md">Recent Files</span>
          <span className="w-full h-full flex justify-center items-center">All Files</span>
        </div>
        <div className="flex w-full justify-start h-[40px] items-center px-8">
          <span className="text-[12px] font-semibold">23 July 2023</span>
        </div>

        <div className="flex w-full justify-evenly mb-4">
          <div className="w-[8rem] h-[8rem] bg-white rounded-2xl flex flex-col items-center justify-evenly mt-4 shadow-2xl">
            <span>
              <Image src="/doc.png" width={50} height={50} alt="doc" className="mt-4" />
            </span>
            <p className="font-semibold text-[14px]">license.pdf</p>
          </div>
          <div className="w-[8rem] h-[8rem] bg-white rounded-2xl flex flex-col items-center justify-evenly mt-4 shadow-2xl">
            <span>
              <Image src="/doc.png" width={50} height={50} alt="doc" className="mt-4" />
            </span>
            <p className="font-semibold text-[14px]">statement.pdf</p>
          </div>
        </div>

        <div className="flex w-full justify-evenly mb-8">
          <div className="w-[8rem] h-[8rem] bg-white rounded-2xl flex flex-col items-center justify-evenly mt-4 shadow-2xl">
            <span>
              <Image src="/doc.png" width={50} height={50} alt="doc" className="mt-4" />
            </span>
            <p className="font-semibold text-[14px]">license.pdf</p>
          </div>
          <div className="w-[8rem] h-[8rem] bg-white rounded-2xl flex flex-col items-center justify-evenly mt-4 shadow-2xl">
            <span>
              <Image src="/doc.png" width={50} height={50} alt="doc" className="mt-4" />
            </span>
            <p className="font-semibold text-[14px]">statement.pdf</p>
          </div>
        </div>

        <div className="flex w-full justify-end h-20 items-end mb-0">
          <div className="w-full flex px-4 h-[80px] bg-white rounded-t-xl justify-evenly pb-2">
            <Link href="/homepage" className="flex flex-col w-12 pb-0 justify-center items-center">
              <div>
                <svg
                  width="30"
                  height="30"
                  fill="#dfdaeb"
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
            </Link>
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
                src="/qicon.png"
                width={30}
                height={30}
                alt="doc"
                className="mt-0 bg-blue-500"
              />
            </Link>
            <div className="flex flex-col w-12 pt-0 justify-center items-center">
              <svg
                width="30"
                height="30"
                fill="#3A81F7"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
              </svg>
            </div>
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



    </div>
  )
}

export default page