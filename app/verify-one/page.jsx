import Link from "next/link"
const VerifyOne = () => {
    return (
        <>
        <div className='w-full h-full flex flex-col items-center bg-gray-100 pt-8'>
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
          <span className="flex w-24 h-2 bg-blue-500 mb-5 ml-[-12px] mr-[-12px]"></span>
          <span className="flex flex-col items-center w-12">
            <span className=" flex rounded-full w-7 h-7 bg-blue-500 items-center justify-center text-white">2</span>
            <p className="text-blue-500 text-[13px]">Details</p>
          </span>
          <span className="flex w-24 h-2 bg-blue-500 mb-5 ml-[-10px] mr-[-12px]"></span>
          <span className="flex flex-col items-center w-12">
            <span className=" flex rounded-full w-7 h-7 bg-blue-500 items-center justify-center text-white">3</span>
            <p className="text-blue-500 text-[13px]">Identification</p>
          </span>
        </div>
    
        <div className='w-full flex font-semibold justify-center mt-8 text-[18px]'>
            <p className=''>Verify your identity in</p>
            <p className='text-blue-500'>&nbsp;2 easy steps:</p>
        </div>
    
    <div className='w-full flex flex-col pt-8 items-center'>
       <div className="bg-white rounded-lg h-36 w-60 shadow-xl flex flex-col items-center justify-center">
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 16 16">
            <path fill="#2583ef" d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z"></path><polygon fill="#fff" points="7,12 3.48,8.48 4.894,7.066 7,9.172 11.71,4.462 13.124,5.876"></polygon>
        </svg>
        </span>
        <p className="text-blue-500 font-semibold pt-3">Step 1: Submit ID Card</p>
       </div>
       <div className="bg-white rounded-lg h-36 w-60 shadow-xl flex flex-col items-center justify-center mt-12">
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 16 16">
            <path fill="#2583ef" d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z"></path><polygon fill="#fff" points="7,12 3.48,8.48 4.894,7.066 7,9.172 11.71,4.462 13.124,5.876"></polygon>
        </svg>
        </span>
        <p className="text-blue-500 font-semibold pt-3">Step 1: Submit ID Card</p>
       </div>
    </div>
    
    <Link href="/document-1">
    <button className='mt-16 general-button'>Submit</button>
    </Link>
    
    
    
        </div>
        </>
  )
}

export default VerifyOne