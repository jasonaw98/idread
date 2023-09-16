
const Account = () => {
  return (
    <>
    <div className="flex w-full mt-8 mb-6 justify-center font-semibold text-white text-2xl">My Account</div>
    <div className="flex flex-col w-full h-full bg-gray-100 pt-4">
        <div className="flex w-full flex-col px-12 text-lg">
            <div className="flex flex-col py-6">
                <p className="text-gray-500">Username</p>
                <p className="font-semibold">nurulain</p>
            </div>
            <div className="flex flex-col py-6">
                <p className="text-gray-500">Full Name</p>
                <p className="font-semibold">Nurul Binti Aina</p>
            </div>
            <div className="flex flex-col py-6">
                <p className="text-gray-500">Email Address</p>
                <p className="font-semibold">nurulbintiaina@gmail.com</p>
            </div>
            <div className="flex flex-col py-6">
                <p className="text-gray-500">NRIC/Passport No.</p>
                <p className="font-semibold">701201015238</p>
            </div>
            <div className="flex flex-col py-6">
                <p className="text-gray-500">IDR Number</p>
                <p className="font-semibold">60701201015238</p>
            </div>
            <div className="flex flex-col py-6">
                <p className="text-gray-500">Wallet Address</p>
                <p className="font-semibold truncate">0x8db1972597D3F567aa836e96E1aa6ef5e15ae1bb</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Account