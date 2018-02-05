import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Header.css';
import Link from '../Link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <FontAwesomeIcon icon={faGlobe} />
            <span className={s.brandTxt}>Data Avenue</span>
          </Link>
          <div className={s.account}>
            <Link className={cx(s.link, s.highlight)} to="/login">
              Log in
            </Link>
          </div>
        </div>
        <div className={s.menu}>
          <Navigation />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
