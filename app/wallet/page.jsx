import Image from "next/image"
import Link from "next/link"

const Wallet = () => {
    return (
        <div className="w-full h-full flex flex-col pt-10">

            <div className="text-center flex justify-center items-center">
                <span className="mr-3 ml-[-2rem]"><svg width="25" height="40" fill="#ffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                </svg></span>
                <span className="text-white text-[35px] font-semibold">RM 112.40</span>
            </div>
            <span className="text-white text-sm text-center">Wallet Balance</span>

            <div className="flex w-full mt-6 relative justify-evenly mb-6 px-8">
                <div className="flex flex-col w-[80px] h-[85px] items-center">
                    <span className="bg-white border-3 border-white rounded-full p-3">
                    <svg className="" width="30" height="30" fill="#3A81F7" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="invisible_box" data-name="invisible box">
                                    <rect width="48" height="48" fill="none" />
                                </g>
                                <g id="Health_Icons" data-name="Health Icons">
                                    <g>
                                        <path d="M6,18a2,2,0,0,0,2-2V8h8a2,2,0,0,0,0-4H8A4,4,0,0,0,4,8v8A2,2,0,0,0,6,18Z" />
                                        <path d="M40,4H32a2,2,0,0,0,0,4h8v8a2,2,0,0,0,4,0V8A4,4,0,0,0,40,4Z" />
                                        <path d="M42,30a2,2,0,0,0-2,2v8H32a2,2,0,0,0,0,4h8a4,4,0,0,0,4-4V32A2,2,0,0,0,42,30Z" />
                                        <path d="M16,40H8V32a2,2,0,0,0-4,0v8a4,4,0,0,0,4,4h8a2,2,0,0,0,0-4Z" />
                                        <path d="M42,22H6a2,2,0,0,0,0,4H42a2,2,0,0,0,0-4Z" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </span>
                    <p className="text-gray-100 mt-2">Scan</p>
                </div>
                <div className="flex flex-col w-[80px] h-[85px] items-center">
                    <span className="bg-white border-3 border-white rounded-full p-3">
                        <svg width={30} height={30} fill="#3A81F7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z" />
                        </svg>
                    </span>
                    <p className="text-gray-100 mt-2">Pay</p>
                </div>
                <div className="flex flex-col w-[80px] h-[85px] items-center">
                    <span className="bg-white border-3 border-white rounded-full p-3">
                        <svg width={30} height={30} fill="#3A81F7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                        </svg>
                    </span>
                    <p className="text-gray-100 mt-2">Send</p>
                </div>

            </div>

            <div className="w-full h-full flex flex-col bg-gray-100 rounded-3xl justify-between">
                <div>
                    <div className="flex w-full px-8 text-whit font-semibold text-lg pt-3">
                        <span className="">Pay Bills</span>
                    </div>

                    <div className="flex w-full mt-3 relative justify-evenly">
                        <Link href="/wallet/perkeso" className="flex flex-col bg-white w-[90px] h-[80px] rounded-2xl justify-center items-center">
                            <span className="">
                                <Image src="/perkeso.png" width={50} height={50} alt="flag" className="ml-0" />
                            </span>
                            <span className="text-[15px] font-semibold">PERKESO</span>
                        </Link>
                        <div className="flex flex-col bg-white w-[90px] h-[80px] rounded-2xl justify-center items-center">
                            <span className="">
                                <Image src="/epf.png" width={40} height={50} alt="flag" className="ml-0" />
                            </span>
                            <span className="text-[15px] font-semibold">KWSP/EPF</span>
                        </div>
                        <div className="flex flex-col bg-white w-[90px] h-[80px] rounded-2xl justify-center items-center">
                            <span className="">
                                <Image src="/perkeso.png" width={50} height={50} alt="flag" className="ml-0" />
                            </span>
                            <span className="text-[15px] font-semibold">SOCSO</span>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-4">
                        <div className="flex ml-8 text-gray-500 text-md">Recent Transactions:</div>
                        <span className="w-full h-1 bg-gray-200 my-3"></span>
                        <div className="flex w-full px-8 justify-between">
                            <div className="flex flex-col">
                                <span className="text-lg font-medium">Order Payment</span>
                                <span className=" text-gray-500 text-sm">Remark: Order Payment</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-lg font-semibold text-red-500">-400.00</span>
                                <span className=" text-gray-500 text-sm">13 Jul, 13:55</span>
                            </div>
                        </div>
                        <span className="w-full h-1 bg-gray-200 my-3"></span>
                        <div className="flex w-full px-8 justify-between">
                            <div className="flex flex-col">
                                <span className="text-lg font-medium">EPF Deduction</span>
                                <span className=" text-gray-500 text-sm">Remark: EPF Deduction</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-lg font-semibold text-red-500">-660.00</span>
                                <span className=" text-gray-500 text-sm">13 Jul, 13:55</span>
                            </div>
                        </div>
                        <span className="w-full h-1 bg-gray-200 my-3"></span>
                        <div className="flex w-full px-8 justify-between">
                            <div className="flex flex-col">
                                <span className="text-lg font-medium">Tax Refund</span>
                                <span className=" text-gray-500 text-sm">Remark: Tax refund</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-lg font-semibold text-emerald-500">+1356.75</span>
                                <span className=" text-gray-500 text-sm">13 Jul, 13:55</span>
                            </div>
                        </div>
                        <span className="w-full h-1 bg-gray-200 my-3"></span>
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
                                fill="#3A81F7"
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
                        <Link href={"/document-1"} className="flex flex-col w-12 pt-0 justify-center items-center">
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



        </div>
    )
}

export default Wallet