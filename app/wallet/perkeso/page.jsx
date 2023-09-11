import Image from "next/image"
import Link from "next/link"
const Perkeso = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div>
                <h1 className="text-center text-2xl font-semibold pt-8 text-white">Payment</h1>
            </div>

            <div className="flex flex-col w-full h-full bg-gray-100 mt-4 justify-between">
                <div className="flex flex-col w-full ">

                    <div className="flex w-full bg-white drop-shadow-md h-20 items-center">
                        <div className="w-1/4 h-10 flex justify-center">
                            <Image src={"/perkeso.png"} width={50} height={50} />
                        </div>
                        <div className="pl-8 flex w-3/4">
                            <p>PERKESO Contribution</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-8 justify-center bg-white drop-shadow-md">
                        <div className="flex w-full pt-2 items-center">
                            <div className="w-5/12 flex pl-6">
                                <p className="text-sm text-gray-500">Employer Name</p>
                            </div>
                            <div className="flex w-7/12">
                                <p>Maybank Sdn Bhd</p>
                            </div>
                        </div>
                        <div className="flex w-full pt-2 items-center">
                            <div className="w-5/12 flex pl-6">
                                <p className="text-sm text-gray-500">Employer Code</p>
                            </div>
                            <div className="flex w-7/12">
                                <p>B3202044528X</p>
                            </div>
                        </div>
                        <div className="flex w-full pt-2 items-center">
                            <div className="w-5/12 flex pl-6">
                                <p className="text-sm text-gray-500">Last Paid</p>
                            </div>
                            <div className="flex w-7/12">
                                <p>13 Jun 2023</p>
                            </div>
                        </div>
                        <div className="flex w-full py-2 items-center">
                            <div className="w-5/12 flex pl-6">
                                <p className="text-sm text-gray-500">Last Paid Amount</p>
                            </div>
                            <div className="flex w-7/12">
                                <p>RM 578.40</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex px-10 mt-8">
                        <div className="flex flex-col w-8/12">
                            <p className="text-gray-500">Pay Amount</p>
                            <div className="flex w-full text-blue-500 font-semibold text-2xl mt-2">
                                <p className="pr-2">RM</p>
                                <input type="number" className="w-full bg-inherit border-0 outline-none" />
                                <svg className=" self-end" width={30} height={30} fill="#6F6F70" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                                </svg>
                            </div>
                            <span className="w-full h-0.5 bg-gray-300"></span>
                            <p className="text-xs text-gray-400 mt-2">IDR eWallet Balance: RM 889.67</p>
                        </div>
                        <div className="flex flex-col w-4/12 justify-center items-center pl-8">
                            <span className=""><svg width="50" height="50" fill="#3A81F7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                            </svg></span>
                            <p className="text-blue-500 text-md mt-[-6px]">Top Up</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full items-center mb-12">
                    <div className="flex w-full justify-center px-8 mb-4">
                        <svg width={50} height={30} fill="#dfdaeb" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                        <p className="text-gray-500 text-xs">Successful payment will be reflected in your account immediately or maximum 1 working day</p>
                    </div>
                    <Link href={"/wallet"}>
                    <button className="general-button">Pay</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Perkeso