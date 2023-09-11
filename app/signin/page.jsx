import Link from "next/link"

const Signin = () => {
  return (
    <>
    <div className='w-full h-full flex flex-col items-center bg-gray-100 pt-16'>
        <div className='flex w-full justify-center'>
        <h1 className="font-semibold text-[26px] flex items-center">ID <svg className="" xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="#3A81F7" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path></svg>Read</h1>
        </div>
        <div className='mt-12'>
        <h1 className="font-semibold text-[26px]">Sign In</h1>
        </div>

    <div className='w-full flex flex-col pt-8 px-12 justify-center'>
  <input type="text" className="rounded-lg pl-4 bg-gray-200 min-w-[280px] h-10" placeholder="IDR Number/Mobile"/>
  <input type="password" className="rounded-lg pl-4 bg-gray-200 min-w-[280px] h-10 mt-8" placeholder="Password"/>
    </div>
<Link href="/otp-signin">
<button className='mt-16 general-button'>Sign In</button>
</Link>



    </div>
    </>
  )
}

export default Signin