import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Search.css';

import ProfileSmall from '../../components/ProfileSmall';
import IconText from '../../components/IconText';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faEye from '@fortawesome/fontawesome-free-solid/faEye';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faPin from '@fortawesome/fontawesome-free-solid/faThumbtack';
import faUser from '@fortawesome/fontawesome-free-solid/faUserCircle';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faSync from '@fortawesome/fontawesome-free-solid/faSync';

class Search extends React.Component {
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
            <IconText
              icon={faSearch}
              style={{
                'font-size': '1.65em',
                'margin': '50px 0 0',
                'border-bottom': '1px solid #ccc',
                'padding': '10px',
                'position': 'absolute'
              }}
            />
            <input type="search" className={s.searchform} value="Orders by products" />
            <p>1-10 of 22 results found for <strong>'Orders by products'</strong></p>
            {
              this.props.search.map(item => (
                <article key={item.link} className={s.searchItem}>
                  <div className={s.type}>
                    {item.type}
                  </div>
                  <h3 className={s.title}>
                    <a href={item.link} className={s.link}>{item.title}</a>
                  </h3>
                  <p className={s.description}>{item.description}</p>
                  <div className={s.icons}>
                    <IconText icon={faHeart} text="121" />
                    <IconText icon={faPin} text="121" />
                    <IconText icon={faEye} text="207" />
                    <IconText icon={faUser} text={item.owner} style={{color:"#6699CC"}} />
                    <IconText icon={faClock} text="January 06, 2018" />
                    <IconText icon={faSync} text="2 days ago" />
                  </div>
                </article>
              ))
            }
          </div>
          <div className={s.sidebar}>
            <div className={s.panel}>
              <h3>Advanced search</h3>
              <ul className={s.list}>
                <li><input type="checkbox" checked/> Report (1)</li>
                <li><input type="checkbox" checked/> Dashboard (1)</li>
                <li><input type="checkbox" checked/> Experimentation (1)</li>
                <li><input type="checkbox" checked/> Hive table (1)</li>
                <li><input type="checkbox" checked/> Campaign (1)</li>
              </ul>
            </div>
            <div className={s.panel}>
              <h3>Related searches</h3>
              <ul className={s.list}>
                <li><a href="/search">Top channels by orders</a></li>
                <li><a href="/search">Product orders</a></li>
                <li><a href="/search">Orders by marketing channels</a></li>
               </ul>
            </div>
            <div className={s.panel}>
              <h3>Top consumers of these results</h3>
              <ProfileSmall />
              <ProfileSmall />
              <ProfileSmall />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Search);
