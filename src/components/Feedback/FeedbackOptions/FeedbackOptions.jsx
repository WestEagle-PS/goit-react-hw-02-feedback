import css from './feedback-options.module.scss';

const FeedbackOptions = ({ onClickFeedbackButton }) => {
  return (
    <ul className={css.list}>
      <li>
        <button name="good" onClick={() => onClickFeedbackButton('good')}>
          Good
        </button>
      </li>
      <li>
        <button name="neutral" onClick={() => onClickFeedbackButton('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button name="bad" onClick={() => onClickFeedbackButton('bad')}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {};
