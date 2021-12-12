import Timer from "./Timer";
function footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="w-full bg-black text-white">
      <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
        <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 space-x-5 justify-around">
          <div className="w-full sm:w-2/5 pr-6 flex flex-row space-y-4 ">
            <object
              type="image/svg+xml"
              data="/logo/fire.svg"
              className="h-24 md:h-26 lg:h-32"
            />
            <div className="m-5 p-7 pt-8">
            <Timer
						hideYear={true}
						titlePosition='bottom'
						size='small'
						endAt={'2022-03-20 01:26:58'} // Date/Time
            

					/>
          </div>
          </div>
          <div className="w-full sm:w-1/5 flex flex-col space-y-4 cursor-pointer">
            <a className="">About</a>
            <a className="">Site Map</a>
            <a className="">Privacy Policy</a>
            <a className="">Gallery</a>
            <a className="">Team</a>
          </div>
          <div className="w-full sm:w-1/5 flex flex-col space-y-4">
            <h1 className=" font-bold">Contact Us</h1>

            <a className="flex ">
              <object
                type="image/svg+xml"
                data="/logo/navigation.svg"
                className="h-6 md:h-5 lg:h-6 m-1"
              />
              Plot No. 2, Pethapada, Next to Ramsheth Thakur College, Sector 33,
              Kharghar, Navi Mumbai, Maharashtra 410210
            </a>
            <a className="flex cursor-pointer">
              <object
                type="image/svg+xml"
                data="/logo/mail.svg"
                className="h-6 md:h-5 lg:h-6 m-1 cursor-pointer "
              />
              ignite@nmims.edu.in
            </a>
          </div>
          <div className="w-full sm:w-1/5 flex flex-col  md:pl-10 cursor-pointer">
            <h1 className=" font-bold  ">Follow Us </h1>
            <div className=" flex cursor-pointer  mt-5">
            <div className="cursor-pointer">
              <object
                type="image/svg+xml"
                data="/logo/ig.svg"
                className="h-8 md:h-8 lg:h-8 m-1 cursor-pointer  "
              />
              </div>
              <div className="cursor-pointer">
              <object
                type="image/svg+xml"
                data="/logo/fb.svg"
                className="h-8 md:h-8 lg:h-7 m-1 cursor-pointer  "
              />
              </div>
              
              <object
                type="image/svg+xml"
                data="/logo/twitter-logo.svg"
                className="h-6 md:h-5 lg:h-6 m-1 mt-2 cursor-pointer "
              />
              <div className="cursor-pointer">
              <object
                type="image/svg+xml"
                data="/logo/yt.svg"
                className="h-6 md:h-5 lg:h-6 m-1 cursor-pointer  "
              /></div>
            </div>
          </div>

        </div>
        <div className="opacity-60 pt-2">
          <p>© {year} All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
