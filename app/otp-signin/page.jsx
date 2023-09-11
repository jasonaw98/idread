'use client'
import { useRef } from "react";
import Link from "next/link";
const Signup = () => {

        const inputs = useRef([]);
      
        const handleInput = (index, event) => {
          const value = event.target.value;
          if (value.length > 0) {
            // Move focus to the next input if a digit is entered
            if (inputs.current[index + 1]) {
              inputs.current[index + 1].focus();
            }
          }
        };

  return (
    <>
    <div className='w-full h-full flex flex-col items-center bg-gray-100 pt-12'>
       <div className="text-center">
          <h1 className="font-semibold text-[22px] text-blue-500">
            Welcome Back !
          </h1>
        </div>

        <div className='text-center mt-12'>
        <h1 className="font-semibold text-[24px]">OTP Verification</h1>
        <p className="text-[13px] text-gray-500">Enter OTP number sent to your mobile</p>
        </div>

    <div className='w-full flex flex-col pt-8 px-14 text-center'>
      <div className="flex text-[18px] w-full justify-between">
      {[0, 1, 2, 3].map(index => (
          <input
            key={index}
            ref={input => inputs.current[index] = input}
            type="number"
            className="rounded-full bg-gray-300 h-14 w-14 text-center"
            maxLength={1} // Limit input to one character
            onInput={event => handleInput(index, event)}
          />
        ))}</div>
      <div className='w-full flex px-9 justify-center mt-4'>
    <p className='text-[13px] text-gray-500'>Did not receive OTP?</p>
    <p className='text-[13px] text-blue-500'>&nbsp;Resend</p>
</div>
    </div>

<Link href="/homepage">
<button className='mt-16 general-button'>Verify</button>
</Link>



    </div>
    </>
  )
}

export default Signup