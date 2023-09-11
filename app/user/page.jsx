import Image from "next/image";
import Link from "next/link";

const User = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gray-100 justify-between">
            <div className="flex flex-col w-full px-8 pt-8">
                <div>
                    <h1 className="text-center text-2xl font-semibold">Profile</h1>
                </div>

                <div className="flex w-full mt-6">
                    <span className="px-2"><Image src="/use.png" width={60} height={50} /></span>
                    <div className="flex flex-col ml-4 justify-center">
                        <p className="font-semibold text-lg">Najib Bin Razak</p>
                        <p>IDR: 60-010122-04-1313</p>
                    </div>
                </div>

                <div className="w-full flex flex-col mt-8 px-0">
                    <Link href="/user/account" className="flex w-full h-12 bg-white rounded-2xl items-center drop-shadow-md mb-4">
                        <span className="w-1/4 justify-center flex"><svg width="30" height="30" fill="#3A81F7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" />
                        </svg></span>
                        <span className="w-3/4">My Account</span>
                    </Link>
                    <div className="flex w-full h-12 bg-white rounded-2xl items-center drop-shadow-md mb-4">
                        <span className="w-1/4 justify-center flex"><svg width="30" height="30" fill="#3A81F7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg></span>
                        <span className="w-3/4">Settings</span>
                    </div>
                    <div className="flex w-full h-12 bg-white rounded-2xl items-center drop-shadow-md mb-4">
                        <span className="w-1/4 justify-center flex"><svg width="30" height="30" fill="#3A81F7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z" />
                        </svg></span>
                        <span className="w-3/4">Notifications</span>
                    </div>
                    <div className="flex w-full h-12 bg-white rounded-2xl items-center drop-shadow-md mb-4">
                        <span className="w-1/4 justify-center flex"><svg width="30" height="30" fill="#3A81F7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" />
                        </svg></span>
                        <span className="w-3/4">Transactions</span>
                    </div>
                    <div className="flex w-full h-12 bg-white rounded-2xl items-center drop-shadow-md mb-4">
                        <span className="w-1/4 justify-center flex"><svg width="30" height="30" fill="#3A81F7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" />
                        </svg></span>
                        <span className="w-3/4">FAQ</span>
                    </div>
                    <div className="flex w-full h-12 bg-white rounded-2xl items-center drop-shadow-md mb-4">
                        <span className="w-1/4 justify-center flex"><svg width="30" height="30" fill="#3A81F7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" />
                        </svg></span>
                        <span className="w-3/4">About</span>
                    </div>
                </div>

            </div>

            <div className="flex w-full justify-end h-20 items-end mb-0">
                <div className="w-full flex px-4 h-[80px] bg-white rounded-t-xl justify-evenly pb-2">
                    <Link href={"/homepage"} className="flex flex-col w-12 pb-0 justify-center items-center">
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
                            fill="#3A81F7"
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
    )
}

export default User