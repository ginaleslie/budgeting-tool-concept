import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import '../../gobalStyles/globalCssVariables.css'

const Copy = ({ children, size, color, weight, pb, pt }) => (
  <p
    className={`roboto font-${size} color-${color} font-weight-${weight}  ${pb} ${pt}`}
  >
    {children}
  </p>
)

Copy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /**
   * medium: 16px, small: 14px, xsmall: 12px, xxsmall: 9px
   */
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium']),
  /**
   * padding bottom
   */
  pb: PropTypes.oneOf([
    'pb-xxsmall',
    'pb-xsmall',
    'pb-medium',
    'pb-large',
    'xxxlarge',
  ]),
  /**
   * padding top
   */
  pt: PropTypes.oneOf([
    'pt-xxsmall',
    'pt-xsmall',
    'pt-medium',
    'pt-large',
    'pt-xxxlarge',
  ]),

  weight: PropTypes.oneOf(['light', 'normal', 'medium', 'bold']),

  color: PropTypes.oneOf([
    'blue-500',
    'blue-700',
    'wealth-grey-500',
    'wealth-grey-300',
    'error-400',
    'alert-500',
    'white',
  ]),
}

Copy.defaultProps = {
  size: 'medium',
  weight: 'normal',
  color: 'wealth-grey-300',
}

export default Copy
