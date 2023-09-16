import Link from "next/link"
import Image from "next/image"

const Signin = () => {
  return (
    <>
    <div className='w-full h-full flex flex-col items-center bg-gray-100 pt-16'>
        <div className='flex w-full justify-center'>
        <Image src="/word.png" width={150} height={100} alt="logo"></Image>
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