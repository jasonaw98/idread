'use client'
import Image from "next/image"
import { useState } from "react"
const Qrcode = () => {

    const [qr, setqr] = useState(2)

    const handldescan = () => {
        setqr(1)
    }

    const handldeshow = () => {
        setqr(2)
    }
    return (
        <div className="flex flex-col w-full h-full bg-gray-100 items-center">
            <h1 className="font-semibold text-[22px] text-center pt-8">Scan Code</h1>

            <div className="flex w-full justify-center mt-8">
                {qr === 2 ? <Image className=" rounded-3xl bg-white m-" src="/dinoqr.jpeg" width={258} height={258} alt="qrcode"/> : 
                <div className="bg-white rounded-3xl">
                <svg className="mb-2" width="250" height="250" fill="#fffff" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                        }
                {/* <Image className=" rounded-3xl bg-white m-" src="/dinoqr.jpeg" width={250} height={200} alt="qrcode"></Image> */}
            </div>

            <div className="flex px-4 bg-gray-200 rounded-2xl text-xs h-10 mt-8 items-center">
                <p>Scan this QR code to verify documents</p>
            </div>

            <div className="flex flex-col w-full mt-24 items-center">
                <span className="flex h-0.5 bg-slate-300 w-3/4"></span>
                <div className="flex w-full justify-evenly items-center px-8 py-4">
                    <div className="flex flex-col w-32  items-center text-xs" onClick={handldescan}>
                        <svg className="mb-2" width="50" height="50" fill="#000000" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
                        Scan QR Code
                    </div>
                    <span className="h-20 bg-slate-300 w-0.5"></span>
                    <div className="flex flex-col w-32  items-center text-xs" onClick={handldeshow}>
                        <svg className="mb-2" width={50} height={50} fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z" />
                        </svg>
                        Show QR Code
                    </div>
                </div>
                <span className="flex h-0.5 bg-slate-300 w-3/4"></span>
            </div>
        </div>
    )
}

export default Qrcode