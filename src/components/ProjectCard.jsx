import PropTypes from 'prop-types';

const ProjectCard = ({imgSrc,title,tags,projectLink,classes}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img src={imgSrc}
            alt={title}
            loading='lazy'
            className="img-cover"
            />
        </figure>

        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className="title-1">
                    {title}
                </h3>

                <div className="">
                    {tags.map((label,key)=>(
                        <span key={key} className="">
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="">
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    arrow_outward
                </span>
            </div>
        </div>
        <a href="projectLink"
        className=""
        target='_blank'></a>
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard