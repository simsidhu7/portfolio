import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "SparkWell",
    tags: ["Spotify API Integration"],
    projectLink: "https://sparkwell.netlify.app/",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Just for Laughs - A Meta AI App",
    tags: ["24 Hour Meta Hackathon"]
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">Portfolio Highlights</h2>
        <div className="">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard 
            key={key}
            imgSrc={imgSrc}
            title={title}
            tags={tags}
            projectLink={projectLink}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
