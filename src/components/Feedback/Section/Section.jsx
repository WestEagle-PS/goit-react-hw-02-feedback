import PropTypes from 'prop-types';
import css from './section.module.scss';

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
