import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';
import { useState } from 'react';

export function FeedbackOptions({ onLeavefeedback, options }) {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleLeaveFeedback(name) {
    setSelectedOption(name);
    onLeavefeedback(name);
  }

  return (
    <div className={css.wrap}>
      {options.map((name, i) => (
        <button
          key={i + 1}
          className={`${css[name]} ${name === selectedOption ? css.selected : ''}`}
          onClick={() => handleLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
};
