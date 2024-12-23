import PropTypes from 'prop-types';


const ReviewCard = ({
    content, name, company
}) => {
  return (
    <div className="bg-zinc-800 p-5  min-w-[320px] rounded-xl flex flex-col lg:min-w-[420px]">

     <p className="text-zinc-400 mb-8">{content}</p>
     <div className="">
        {/* <p className="">
            <img src={imgSrc} alt={name} width={44} height={5} loading='lazy' className="img-cover"/>
        </p> */}
        
     </div>
     <p>{name}</p>
     <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
    </div>
  )
}

ReviewCard.propTypes={
    content:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    company:PropTypes.string.isRequired
}

export default ReviewCard