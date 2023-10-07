import PropTypes from "prop-types";

const Container = ({children}) => {
  Container.propTypes = {
    children: PropTypes.any
  }

  return (
    <div className="px-3 md:px-14 lg:px-56">
      {children}
    </div>
  )
}

export default Container