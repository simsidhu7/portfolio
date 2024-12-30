const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container md:grid md:grid-cols-2 items-center md:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/public/images/hero-img.jpeg"
                width={40}
                height={40}
                alt="Laptop cartoon"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for Work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Driving Innovation Through Code to Create Meaningful Change
          </h2>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto">
            <img
              src="/public/images/sim.png"
              width={656}
              height={800}
              alt="Portrait of Simmy"
              className="w-full lg:w-3/4 rounded-md"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
