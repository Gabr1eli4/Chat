import PropTypes from "prop-types";

function Message({ user, message }) {
  return (
    <div className="message">
      <div className="user">{user.name}</div>
      <div className="message">{message}</div>
    </div>
  );
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export { Message };
