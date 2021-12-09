// import '../about.scss';

function about() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="logo">
          <img className="h-44" src="/logo/fire.svg" alt="" />
        </div>
        <div className="logo">
          <img className="h-40" src="/logo/text.svg" alt="" />
        </div>
        <div className="content max-w-5xl pt-12">
          <p className="text-3xl">
            IGNITE is the annual technical festival of NMIMS, Navi Mumbai. We
            started in the year 2019 with the aim to give a platform for the
            technologies of future and also to have a time of their lives amidst
            the perfect blend of amusement and illuminations for a better
            tomorrow.
          </p>
        </div>
        <div className='p-10'>
          <section id="timeline">
            <div className="tl-item">
              <div
                className="tl-bg"
                // style="background-image: url(https://placeimg.com/801/801/nature)"
              ></div>

              <div className="tl-year">
                <p className="f2 heading--sanSerif">2011</p>
              </div>

              <div className="tl-content">
                <h1>Lorem ipsum dolor sit</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit.
                </p>
              </div>
            </div>

            <div className="tl-item">
              <div
                className="tl-bg"
                // style="background-image: url(https://placeimg.com/802/802/nature)"
              ></div>

              <div className="tl-year">
                <p className="f2 heading--sanSerif">2013</p>
              </div>

              <div className="tl-content">
                <h1 className="f3 text--accent ttu">
                  Vestibulum laoreet lorem
                </h1>
                <p>
                  Suspendisse potenti. Sed sollicitudin eros lorem, eget
                  accumsan risus dictum id. Maecenas dignissim ipsum vel mi
                  rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel,
                  fringilla sed felis. Morbi sed nisl et arcu.
                </p>
              </div>
            </div>

            <div className="tl-item">
              <div
                className="tl-bg"
                // style="background-image: url(https://placeimg.com/803/803/nature)"
              ></div>

              <div className="tl-year">
                <p className="f2 heading--sanSerif">2014</p>
              </div>

              <div className="tl-content">
                <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
                <p>
                  Mauris cursus magna at libero lobortis tempor. Suspendisse
                  potenti. Aliquam interdum vulputate neque sit amet varius.
                  Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices,
                  tristique dolor at, porttitor dolor. Etiam id cursus arcu, in
                  dapibus nibh. Pellentesque non porta leo. Nulla eros odio,
                  egestas quis efficitur vel, pretium sed.
                </p>
              </div>
            </div>

            <div className="tl-item">
              <div
                className="tl-bg"
                // style="background-image: url(https://placeimg.com/800/800/nature)"
              ></div>

              <div className="tl-year">
                <p className="f2 heading--sanSerif">2016</p>
              </div>

              <div className="tl-content">
                <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
                <p>
                  Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis
                  ornare purus non euismod. Donec vestibulum efficitur tortor,
                  eget efficitur enim facilisis consequat. Vivamus laoreet
                  laoreet elit. Ut ut varius metus, bibendum imperdiet ex.
                  Curabitur diam quam, blandit at risus nec, pulvinar porttitor
                  lorem. Pellentesque dolor elit.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default about;
