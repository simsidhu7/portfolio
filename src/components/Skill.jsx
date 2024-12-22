import SkillCard from "./SkillCard"

const skillItem = [
    {
        imgSrc: '/images/html.svg',
        label: 'HTML',
        desc: 'Markup Language'
      },
    {
      imgSrc: '/images/sass-logo.png',
      label: 'Sass',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mysql.svg',
      label: 'MySQL',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
      }
    
  ];


const Skill=()=>{
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                My Tech Stack
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">Discover the powerful tools of the trade that I use to create exceptional web applications.</p>
    
    <div className="grid">
{
    skillItem.map(({imgSrc,label,desc}, key)=>
   ( <SkillCard 
    key={key}
    imgSrc={imgSrc}
    label={label}
    desc={desc}
    />
  ))
    }

            </div>
        </div>
        
    </section>
  )
}

export default Skill