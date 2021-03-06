import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/search">
          Search
        </Link>
        <Link className={s.link} to="/about">
          Teams
        </Link>
        <Link className={s.link} to="/reports">
          Tools
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
