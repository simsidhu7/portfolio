const aboutItems = [
  {
    label: "Years of Professional Experience",
    number: 10,
  },
  {
    label: "Years of Problem-Solving Experience",
    number: 17,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[78ch]">
            Welcome! I'm <strong>Simmy Sidhu</strong>, an engineering leader
            with a multidisciplinary background and a deep
            <strong> drive for innovation</strong>. My journey has taken me from
            earning a
            <strong> Master of Engineering in Biomedical Engineering</strong> at
            Cornell University to leading transformative projects that have
            saved organizations over <strong>$750,000</strong> and significantly
            improved operational efficiency. Recently, I expanded my expertise
            by earning a <strong>Diploma in Software Engineering</strong>,
            reflecting my commitment to staying ahead in technology and
            combining my engineering experience with cutting-edge software
            development. I am also the
            <strong> Founder & CEO of Drastic Drinks Inc.</strong>, where I lead
            product development, operations, and strategy for an innovative
            hydration beverage company. I’m driven by a desire to solve complex
            challenges, particularly in
            <strong> healthcare</strong>, where technology has the power to
            revolutionize patient outcomes and streamline operations. As a
            <strong> Certified Six Sigma Black Belt (CSSBB)</strong> and a
            <strong> licensed Professional Engineer (P.Eng)</strong>, I bring a
            blend of strategic thinking and hands-on problem-solving to every
            project. Whether optimizing processes, developing software, or
            creating innovative solutions, I thrive on delivering measurable
            impact. If you're looking for a dedicated professional who bridges
            engineering and technology with a focus on driving meaningful
            change, let's connect! Together, we can create solutions that
            transform industries and improve lives.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
