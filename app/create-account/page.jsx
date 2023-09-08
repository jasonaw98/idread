import Link from "next/link"

const CreateAccount = () => {
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
          <span className="flex w-24 h-2 bg-blue-500 mb-5 ml-[-11px] mr-[-12px]"></span>
          <span className="flex flex-col items-center w-12">
            <span className=" flex rounded-full w-7 h-7 bg-blue-500 items-center justify-center text-white">2</span>
            <p className="text-blue-500 text-[13px]">Details</p>
          </span>
          <span className="flex w-24 h-2 bg-gray-300 mb-5 ml-[-10px] mr-[-12px]"></span>
          <span className="flex flex-col items-center w-12">
            <span className=" flex rounded-full w-7 h-7 bg-gray-300 items-center justify-center text-white">3</span>
            <p className="text-gray-400 text-[13px]">Identification</p>
          </span>
        </div>

        <div className='font-semibold text-[24px] mt-8'>
        <h1>Create an account</h1>
        </div>

<form className='w-full px-9 pt-5'>
  <div className="relative z-0 w-full mb-6">
      <input type="text" id="floating_firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
  </div>
  <div className="relative z-0 w-full mb-6">
      <input type="text" id="floating_lastname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
  </div>
  <div className="relative z-0 w-full mb-6">
      <input type="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-6">
      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 w-full mb-6 ">
      <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>

  {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button> */}
</form>

<div className='w-full flex px-9 justify-center text-center pt-2'>
    <p className='text-[10px] text-gray-500'>By registering, you agree to our <span className='font-semibold underline underline-offset-1 text-gray-700'>Terms of Service</span> and <span className='font-semibold underline underline-offset-1 text-gray-700'>Privacy Policy</span>.</p>
</div>

<Link href="/verify-one">
<button className='mt-9 general-button'>Register</button>
</Link>

<div className='w-full flex px-9 justify-center mt-9'>
    <p className='text-[13px] text-gray-500'>Already have an account?</p>
    <p className='text-[13px] text-blue-500'>&nbsp;Sign In</p>
</div>


    </div>
    </>
  )
}

export default CreateAccount