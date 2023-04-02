import PropTypes from "prop-types";

function Message({ user, message }) {
  return (
    <div className="message">
      <i>{user.name}</i>: {message}
    </div>
  );
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export { Message };
