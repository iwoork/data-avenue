import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfileSmall.css';

let profile = {
  avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6083/profile/profile-512.jpg?1',
  name: 'John Doe',
  role: 'Analyst',
  team: 'Product Analytics',
  email: 'john@doe.com'
}

class ProfileSmall extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };

  render() {
    const { icon, text, style } = this.props;
    return (
      <div className={s.profile}>
        <div className={s.avatar}>
          <img width="60" src={profile.avatar} />
        </div>
        <div className={s.bio}>
          <h5>{profile.name}</h5>
          <p className={s.job}>{profile.role}, {profile.team}</p>
          <p><a className={s.link} href="#">{profile.email}</a></p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProfileSmall);
