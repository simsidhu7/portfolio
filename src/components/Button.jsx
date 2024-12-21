

/*Node modules*/
import PropTypes from 'prop-types';

/*Primary Button*/

const ButtonPrimary=({
href,
target='_self',
label,
icon,
classes
})=>
 {
  return (
    <div>Button</div>
  )
}

ButtonPrimary.propTypes={
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes: PropTypes.string
}

export default Button;