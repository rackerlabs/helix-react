import PropTypes from 'prop-types';
import React from 'react';
import { POSITIONS } from '../constants';

/**
 * @see https://helixdesignsystem.github.io/helix-ui/elements/hx-search-assistance/
 */
const SearchAssistance = ({ children, className, relativeTo, ...rest }) => {
  return (
    <hx-search-assistance class={className} relative-to={relativeTo} {...rest}>
      {children}
    </hx-search-assistance>
  );
};

SearchAssistance.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  relativeTo: PropTypes.string.isRequired,
  position: PropTypes.oneOf(POSITIONS),
};

export default SearchAssistance;
