import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Hive.css';

class Hive extends React.Component {
  static propTypes = {
    search: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        link: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.main}>
            <h1>Hive table</h1>
          </div>
          <div className={s.sidebar}>
            <div className={s.panel}>
              <h3>Top consumers of these results</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Hive);
