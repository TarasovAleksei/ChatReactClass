import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Input = ({ inputValue, updateInputValue }) => {
  const updateValue = e => {
    const text = e.target.value;
    updateInputValue(text);
  };

  return (
    <TextField
      style={{ width: '70%' }}
      variant='outlined'
      label='add message'
      type='text'
      autoFocus
      value={inputValue}
      onChange={updateValue}
    />
  );
};

Input.propTypes = {
  inputValue: PropTypes.string,
  updateInputValue: PropTypes.func,
};

export default Input;
