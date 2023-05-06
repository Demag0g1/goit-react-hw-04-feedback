import PropTypes from 'prop-types';
import css from './statistic.module.css';
import { useMemo } from 'react';

export function Statistics({ options, statistic, total }) {
  const positivePercentage = useMemo(() => {
    return Math.round((statistic.good / total) * 100);
  }, [statistic.good, total]);

  return (
    <>
      {options.map((name, i) => {
        return (
          <p key={i} className={css[name]}>
            {name}:<span className={css.numbers}> {statistic[name]}</span>
          </p>
        );
      })}
      <p>
        Total: <span className={css.numbers}> {total}</span>
      </p>
      <p className={css.good}>
        Positive feedback: {' '}
        <span className={css.numbers}> {positivePercentage}%</span>
      </p>
    </>
  );
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
};
