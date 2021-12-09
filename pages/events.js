import Image from "next/image" 
function events(props) {
    return (
        <div>
            <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition transform duration-250 ease-out'>
        {/* Left */}
        <div className='relative h-16 w-16'>
            {/* <Image src={img} layout='fill' className='rounded-lg' /> */}
            </div>
            {/* Right */}
            <div>
            <h2></h2>
            <h3 className='text-gray-500'>distance</h3>
            </div>
        </div>
        </div>
    )
}

export default events
