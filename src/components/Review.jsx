import ReviewCard from "./ReviewCard.jsx";
/*Add lenis scroll package via npm i lenis*/
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const reviews = [
  {
    content:
      "Simmy and I worked on multiple projects together during the Software Development Bootcamp at BrainStation.io. She naturally took well to a leadership role several times, was fantastic at helping manage the timeline of the project, and was a genuine pleasure to work with. She learns quickly, and I found we worked very well as a team. She would be a great addition to any team, especially as a leader.",
    name: "Robyn McNeil",
    company: "BrainStation (Team Member)",
  },
  {
    content:
      'I had the pleasure of teaching Simrit at Cornell University for the course "Entrepreneurship for Scientists and Engineers" (NBA 5070). Simrit is a motivated, forward-thinking, and intelligent student. Simrit and her team took on a course with a massive workload and delivered an exceptional final business plan and investor-ready presentation, where she was the clear and prepared leader of the team. As a team member or a leader for a company, Simrit earns my highest recommendation. ',
    name: "Brad Treat",
    company: "Cornell University (Professor/Founder of Start-Ups)",
  },

  {
    content:
      "Having worked with Simmy during her time at Baxter, I can say she was a real asset to our team. During her time with us she worked on applying multivariate data analysis (machine learning and data analytics) in our manufacturing processes, which resulted in significant savings. Simmy was also tasked with providing global training on our hardware and software implementation platform. She was always willing to take on new challenges within our group, and was a great partner to the teams she interfaced with. ",
    name: "Lee Hutson",
    company: "Baxter Healthcare (Director of Engineering)",
  },
  {
    content:
      "I’ve had the pleasure of knowing Simrit since 2016, when we both worked at Johnson & Johnson in the Engineering department. Her reliability and the focus on the task at hand would be a valuable asset for any company employing her. As a team member or a leader Simrit earns my highest recommendation!",
    name: "Adrian Stanila",
    company: "Johnson & Johnson (Project Manager)",
  },
  {
    content:
      "I had the opportunity to work with Simmy during a pair-programming hackathon organized by BrainStation. Simmy brought creative ideas and exceptional design skills to the table, laying a solid foundation for our project by helping us decide what to build and which APIs to use. Her confident and self-assured demeanor had a positive impact on the entire team, inspiring everyone to contribute their best efforts. Simmy’s ability to combine creativity with clear direction made her an invaluable teammate during the hackathon. I truly enjoyed working with Simmy and highly recommend her for any project or role she pursues.",
    name: "Jenny Kim",
    company: "BrainStation (Team Member)",
  },
  {
    content:
      "Working with Simmy on projects as we went through the Brainstation Software Engineering bootcamp together was an absolute joy. Her natural leadership and technical expertise were invaluable assets to the group, and her professionalism and kindness helped bring out the best from every member of the team. I can't recommend her enough, as I have no doubt she would quickly become one of the most effective contributors to any team lucky enough to have her.",
    name: "Sanjay Budhia",
    company: "BrainStation (Team Member)",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1000",
    });
  });
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Insights from Peers, Professors, and Professionals
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
