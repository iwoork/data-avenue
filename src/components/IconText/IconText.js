import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './IconText.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class IconText extends React.Component {
  static propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
  };

  render() {
    const { icon, text, style } = this.props;
    return (
      <div className={s.icon} style={style}>
        <FontAwesomeIcon icon={icon} /> {text}
      </div>
    );
  }
}

export default withStyles(s)(IconText);
