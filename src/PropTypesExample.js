import PropTypes from 'prop-types';

export default function PropTypesExample(props) {
  return (
    <ul>
      <li>Name: {props.user.name}</li>
      <li>Last Name: {props.user.lastName}</li>
      <li>Email: {props.user.email}</li>
      <li>age: {props.user.age}</li>
    </ul>
  );
}

PropTypesExample.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number,
  }).isRequired,
};
