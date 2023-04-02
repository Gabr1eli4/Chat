import PropTypes from "prop-types";

function User({ name }) {
  return <div> {name} </div>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export { User };
