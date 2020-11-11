import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-roboto'
import './styles.css'
import '../../gobalStyles/globalCssVariables.css'

const Heading = ({ children, size, color, weight, pb, pt }) => (
  <p
    className={`roboto font-${size} color-${color} font-${weight} ${pb} ${pt}`}
  >
    {children}
  </p>
)

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /**
   * xmedium: 24px, xxmedium: 28px, large: 40px, xxlarge: 52px
   */
  size: PropTypes.oneOf(['xmedium', 'xxmedium', 'large', 'xlarge', 'xxlarge']),
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
    'centennial-500',
  ]),
}

Heading.defaultProps = {
  size: 'xmedium',
  weight: 'normal',
  color: 'wealth-grey-300',
}

export default Heading
