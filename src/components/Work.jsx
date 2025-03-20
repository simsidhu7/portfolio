import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-3.png",
    title: "ClassClarity",
    tags: ["OTPP & Koru 1 Week Hackathon"],
    projectLink: "https://classclarity.netlify.app/",
  },
  {
    imgSrc: "/images/project-1.png",
    title: "SparkWell",
    tags: ["Spotify API Integration"],
    projectLink: "https://sparkwell.netlify.app/",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Just for Laughs - A Meta AI App",
    tags: ["24 Hour Meta Hackathon"],
    projectLink: "https://github.com/simsidhu7/ip-meta-client",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,+1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
