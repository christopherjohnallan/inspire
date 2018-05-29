import * as React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { StyleGuide } from './theme';

class TextComp extends React.PureComponent {
  static defaultProps = {
    type: 'body',
    theme: '',
    style: {},
    color: StyleGuide.palette.black,
    align: 'left',
    primary: false,
    children: '',
    numberOfLines: 0,
  };

  render() {
    const {
      theme, type, style, children, primary, numberOfLines, align: textAlign,
    } = this.props;
    const typography = StyleGuide.typography[type];
    const color = (() => {
      if (primary) {
        return theme.palette.primary;
      } else if (typeof typography.color === 'string' && !this.props.color) {
        return typography.color;
      }
      return this.props.color;
    })();
    const computedStyle = [typography, { textAlign, color }];
    computedStyle.push(style);
    return (
      <Text style={computedStyle} {...{ numberOfLines }}>
        {children}
      </Text>
    );
  }
}

TextComp.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  type: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  primary: PropTypes.bool,
  theme: PropTypes.string,
  children: PropTypes.string,
  numberOfLines: PropTypes.number,
};

export default TextComp;
