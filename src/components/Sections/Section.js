import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
